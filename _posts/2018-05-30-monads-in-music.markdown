---
layout: post
title:  "Monads in music"
date:   2018-05-30 21:11:00 +0100
---
_Monads in music_, I once vexed lyrically to a flame of mine. She was smart. Dead smart, an incredible conversationalist, and well versed in [functional programming](https://en.wikipedia.org/wiki/Functional_programming) - of which I knew next to nothing at the time. Oh, the allure. I'm a sucker for smart women, particularly when they know about stuff that I don't.

Unfortunately (for me), she was already spoken for. (And most of it was probably just projections on my part, anyhow.)

But anyway, monads. For real, this time.

But first, functors. Then applicatives and monoids. And _then_, monads. It has to be done in order.

And in Haskell, which I've tasked myself with learning these past few weeks.

(Yes, this is mostly a note to self. Sorry.)

### Functors

```haskell
class Functor f where  
    fmap :: (a -> b) -> f a -> f b  
```

Functors must follow the _functor laws_:

1. `fmap id = id`
2. `fmap (f . g) = fmap f . fmap g`

The second law can more readably be expressed as `fmap (f . g) F = fmap f (fmap g F)`.

`Maybe` and function instances:

```haskell
instance Functor Maybe where  
    fmap f (Just x) = Just (f x)  
    fmap f Nothing = Nothing
```

```haskell
instance Functor ((->) r) where  
    fmap f g = (\x -> f (g x))  
```

The latter is the function type `r -> a` rewritten as `(->) r a`, and made an instance of the `Functor` type class by partially applying it. It's synonomous with

```haskell
instance Functor ((->) r) where  
    fmap = (.)
```

So using `fmap` over functions is just composition.

### Applicative functors

```haskell
class (Functor f) => Applicative f where  
    pure :: a -> f a  
    (<*>) :: f (a -> b) -> f a -> f b  
```

Applicatives must follow the _applicative laws_:

1. `pure f <*> x = fmap f x`
2. `pure id <*> v = v`
3. `pure (.) <*> u <*> v <*> w = u <*> (v <*> w)`
4. `pure f <*> pure x = pure (f x)`
5. `u <*> pure y = pure ($ y) <*> u`

`Maybe` and function instances:

```haskell
instance Applicative Maybe where  
    pure = Just  
    Nothing <*> _ = Nothing  
    (Just f) <*> something = fmap f something  
```

```haskell
instance Applicative ((->) r) where  
    pure x = (\_ -> x)  
    f <*> g = \x -> f x (g x)  
```

### Monoids

```haskell
class Monoid m where  
    mempty :: m  
    mappend :: m -> m -> m  
    mconcat :: [m] -> m  
    mconcat = foldr mappend mempty  
```

Monoids must follow the _monoid laws_:

- ``mempty `mappend` x = x``
- ``x `mappend` mempty = x``
- ``(x `mappend` y) `mappend` z = x `mappend` (y `mappend` z)``

where `mempty` is the identify. List and `Ordering` instances:

```haskell
instance Monoid [a] where  
    mempty = []  
    mappend = (++)  
```

```haskell
instance Monoid Ordering where  
    mempty = EQ  
    LT `mappend` _ = LT  
    EQ `mappend` y = y  
    GT `mappend` _ = GT  
```

It seems `Maybe` is not well suited for the `Monoid` class, though. Some talk of `Option` being a better fit, but I haven't looked further into it.

### And finally, monads

```haskell
class Monad m where  
    return :: a -> m a  
  
    (>>=) :: m a -> (a -> m b) -> m b  
  
    (>>) :: m a -> m b -> m b  
    x >> y = x >>= \_ -> y  
  
    fail :: String -> m a  
    fail msg = error msg  
```

Monads must follow the _monad laws_:

1. Left identity: `return x >>= f = f x`
2. Right identity: `m >>= return = m`
3. Associativity: `(m >>= f) >>= g = m >>= (\x -> f x >>= g)`

`Maybe` and list instances:

```haskell
instance Monad Maybe where  
    return x = Just x  
    Nothing >>= f = Nothing  
    Just x >>= f  = f x  
    fail _ = Nothing  
```

```haskell
instance Monad [] where  
    return x = [x]  
    xs >>= f = concat (map f xs)  
    fail _ = []  
```

For example

```haskell
foo :: Maybe String  
foo = Just 3   >>= (\x ->
      Just "!" >>= (\y ->
      Just (show x ++ y)))  
```

Or with `do` notation:

```haskell
foo :: Maybe String  
foo = do  
    x <- Just 3  
    y <- Just "!"  
    Just (show x ++ y)  
```