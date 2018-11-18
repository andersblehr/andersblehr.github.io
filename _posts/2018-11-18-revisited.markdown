---
layout: post
title:  "Revisited"
date:   2018-11-18 16:00:00 +0100
---
There's this app I made, [Origon](https://origon.co). Back in July I [wrote](/direction) that I hadn't touched the codebase in years and probably wouldn't again. And I really had no intention to, except from maybe factoring out the replication framework that sits at its heart.

But then on a whim I decided to check the logs for any activity and noticed spurious errors when sending emails – in particular when sending out one-time passwords to new users.

It took me a few seconds to realise what had happened.

The app's [backend](https://github.com/andersblehr/origon-backend) runs on Google App Engine (GAE). Back when it launched, the only way to send email from GAE was to create a paid Gmail account with what was then known as Google Apps. So somewhat grudgingly I created an account and got it all working.

Fast forward 3 years to earlier this year.

I was getting emails from all sorts of online services alerting me that I needed to update my payment information if I wanted to avoid service interruption, as my credit card was about to expire. One of the emails was from G Suite. I couldn't for the life of me remember what I needed G Suite for, so I decided not to renew.

As it turns out, G Suite is what used to be Google Apps. I vaguely remembered getting an email to the effect. So since then no new users have received their one-time password for completing registration on Origon. They haven't been many, but there's been a steady trickle.

The easy thing would have been to just pull the plug.

But the thing is, I now have my own email server running on an Amazon EC2 instance that I set up to handle my contracting related emails. (Yup, I'm that level of DIY..)

And I've been needing a coding project outside of work.

So I decided to set up a lightweight REST API on my email server that would let me send emails from Origon's GAE backend – under the radar, as it were, from GAE's G Suite-only requirement.

So there it is, my [Origon mailer](https://github.com/andersblehr/origon-mailer). It's a very simple Sinatra app with only 2 endpoints:

* `POST /oauth2/token` for obtaining a JWT token using OAuth2 `client_credentials` grant;
* `POST /mailer` for sending the actual email.

It uses Pony to talk to my Postfix MTA over SMTP, and I have configured it to be served up by Phusion Passenger running as a plugin in Nginx. For deployment I use Capistrano.

I had done very little Ruby programming before this, and all of Sinatra, Passenger and Capistrano were new to me, so there was a certain learning curve involved. Which sort of was the whole point.

As an added bonus, I got go bring both the iOS and backend Java codebases up to date with the latest versions of their respective libraries and frameworks (there's an updated version of Origon [in the App Store](https://itunes.apple.com/us/app/origon-shared-contact-lists/id988915565), who'd've thunk), which in turn helped me refamiliarise myself with the code.

So there should be much less of a hurdle now, factoring out that replication framework. I should really just get started.