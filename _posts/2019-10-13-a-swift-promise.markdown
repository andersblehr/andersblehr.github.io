---
layout: post
title:  "A Swift promise"
date:   2019-10-13 15:31:00 +0200
---
I mentioned my intention of factoring out [Origon](https://origon.co)'s replication framework in a [previous post](/i-fixed-a-bug-in-my-app). The thing is, it's not really a framework _per se_, more like a distributed algorithm with constituent parts running on both the server and on any number of clients. So factoring it out, as it were, is more a question of generalising it. And no, I have yet got around to generalising it in any meaningful way.

But as it turns out, parts of it already exist in the open. Back in early 2017, I was working on the iOS side of an MVP app project, and I was blocked by a [bug](https://github.com/3lvis/Sync/issues/373) in the [Sync](https://github.com/3lvis/Sync) library we were using to cache backend data on the device. The bug didn't get the attention we required, so to get out of the impasse, I decided to roll my own, based on the client portion of Origon's replication algorithm.

I did it in my own time to retain ownership, published it on GitHub as [JSONCache](https://github.com/andersblehr/JSONCache), and pulled it into the MVP app, where it worked flawlessly.

However, something about the implementation has been bugging me ever since I wrote it. To extrapolate an example from the [documentation](https://andersblehr.co/JSONCache/):

```swift
JSONCache.bootstrap(withModelName: "Bands") { result in
  switch result {
  case .success:
    switch JSONCache.fetchObject(ofType: "Band", withId: "Japan") {
    case .success(let japan):
      var japan = japan as! Band
      japan.otherNames = "Rain Tree Crow"

      ServerProxy.update(band: japan.toJSONDictionary()) { result in
        switch result {
        case .success:
          switch JSONCache.save() {
          case .success:
            print("Japan as Rain Tree Crow all nicely tucked in")
          case .failure(let error):
            print("An error occurred: \(error)")
          }
        case .failure(let error):
          print("An error occurred: \(error)")
        }
      }
    case .failure(let error):
      print("An error occurred: \(error)")
    }
  case .failure(let error):
    print("An error occurred: \(error)")
  }
}
```

There's nothing special going on here. The Core Data stack is bootstrapped, an object is fetched, modified and persisted back to the backend and then to Core Data.

But there's a strong smell. The [pyramid of doom](https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)) as the callback stack unwinds is quite pronounced, and on every stack pop there's the same error handling taking place.

I knew this was a smell already when I wrote it, but I was unsure how to address it.

However, in the meantime I have been working quite a lot with asynchronous programming. I have worked with [promises](https://en.wikipedia.org/wiki/Futures_and_promises) in TypeScript and Java (where they're called `CompletableFuture`), and Scala has a plethora of async libraries to choose from. On the Swift side, [PromiseKit](https://github.com/mxcl/PromiseKit) is perhaps the most well known, but there's a few others as well.

The thing is, however, that after having cut the dependency to [Antitypical's `Result`](https://github.com/antitypical/Result) library once Swift 5 came with native `Result` support, I was hesitant to pull in another heavy dependency that I'd probably only need a tiny portion of.

So again I decided to roll my own.

I have spent quite some time over the past year and a half practicing and wrapping my head around the underlying principles of functional programming, [first in Haskell](/monads-in-music), and lately in Scala, and I decided that what I needed was a minimal `Promise` type that would let me sequence both asynchronous and synchronous operations that return a `Result`.

I ended up calling it [`ResultPromise`](https://andersblehr.co/JSONCache/Classes/ResultPromise.html). It's only about 40 lines of code, and it lets me rewrite the above example as follows:

```swift
let promise = JSONCache.bootstrap(withModelName: "Bands")
    .then { JSONCache.fetchObject(ofType: "Band", withId: "Japan") }
    .thenAsync { object in
        let japan = object as! Band
        japan.otherNames = "Rain Tree Crow"
        return ServerProxy.update(band: japan.toJSONDictionary())
    }
    .then { JSONCache.save() }

promise.await { result in
    switch result {
    case .success:
        print("Japan as Rain Tree Crow all nicely tucked in")
    case .failure(let error):
        print("An error occurred: \(error)")
    }
}
```

Short and sweet. (If we disregard the fact that from a functional programming perspective, this is about as impure as it gets. But that's I/O for you. I'm not writing an [`IO` monad](https://www.quora.com/What-is-an-IO-Monad) for Swift just yet.)

In fact, it's so short and sweet that I'll paste the full code right here:

```swift
public class ResultPromise<T, E: Error> {
    fileprivate var result: Result<T, E>? {
        didSet { observers.forEach { observer in result.map(observer) } }
    }
    fileprivate lazy var observers = [(Result<T, E>) -> Void]()

    public func fulfil(with result: Result<T, E>) {
        self.result = result
    }

    public func await(with observer: @escaping (Result<T, E>) -> Void) {
        observers.append(observer)
        result.map(observer)
    }

    public func then<U>(_ f: (@escaping (T) -> Result<U, E>)) -> ResultPromise<U, E> {
        let promise = ResultPromise<U, E>()
        await { result in
            promise.fulfil(with: result.flatMap(f))
        }
        return promise
    }

    public func thenAsync<U>(_ f: (@escaping (T) -> ResultPromise<U, E>)) -> ResultPromise<U, E> {
        let promise = ResultPromise<U, E>()
        await { result in
            switch result {
            case .success(let value):
                f(value).await { result in
                    promise.fulfil(with: result)
                }
            case .failure(let error):
                promise.fulfil(with: .failure(error))
            }
        }
        return promise
    }
}
```

This is the beauty of rolling your own: You get to make it do exactly what you need it to do and nothing else. Zero risk of a [`left-pad` debacle](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/).

Feel free to copy it into your own project. I may publish it as a gist on GitHub, or maybe in a repo of its own, so it can evolve. Time will tell. For now, it's [here](https://github.com/andersblehr/JSONCache/blob/master/JSONCache/ResultPromise.swift).
