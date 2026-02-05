---
title: Email sign in, with no password!
date: 2015-07-01
---

Medium has launched a passwordless sign in option that relies solely on you having access to your email account. This simultaneously feels like a brilliant and innovative idea to authentication, but also a little uneasy. This got me thinking about the current state of authentication common within websites and apps.

#### Passwords and Generators

I’ve been feeling for quite some time that passwords have crossed over to being a relic of the Internet. Something born out necessity from the early days of computing. My indicator was when tools such as 1Password and LastPass came into popular use. There is something inherently backwards in the necessity of an app the generates garbled strings you can’t possibly remember so that you have a secure password, and then the need to use that same app to insert the password for you. Removing the need to remember your password defeats the purpose of having one in the first place.

#### Two-Factor Authentication

Recently, 2FA has grown in popularity and support. Comprised of two parts: a password that you know, and a device that you have with you in real-time. The device part of this flow is made easy with apps like Authy or Google Authenticator. But again, the mere fact that a second step is needed to make the first step (a password) more secure, seems to really defeat the purpose of a password.

#### The Magic Link Email

This is more or less what Medium is doing. This has primarily been used as an account setup feature brought into popularity by mobile apps and how annoying it is to type in usernames and passwords. Except now, Medium seems to be elevating it to being the one and only process needed for authenticating your person and logging in. It’s simple and to the point. Cut out the middleman (passwords), and utilize the one service people already rely heavily on (email). It just so happens that email is already the de facto backup plan for passwords anyways, which makes it the natural only authentication step needed.

#### Will this be the norm?

It’ll be interesting to see if this works out and is actually convenient. I’ll be trying it out just to see what the experience is like. My concern is that waiting for a magic link email will be annoying, but maybe it’s still less annoying than remembering and typing in a password. The actual security of this solution I haven’t thought enough about yet, but I trust Medium has.
