---
title: DeviceType — A Swift Helper
date: 2015-03-19
featuredImage: ../../assets/posts/devicetype-a-swift-helper/image-01.png
canonicalUrl: https://medium.com/@ianhirschfeld/devicetype-a-swift-helper-301b71675a05
---

A series of helpers and extensions for identifying what device is interacting with your app.

## The Problem

It’s not straight forward to identify exactly what device is running your app. I’m working on an update for [Role](http://roleapp.com), and I need to be able to split some code depending on whether the device running it is an iPod Touch, an iPhone 4s, or an iPhone 5 or later.

## The Solution

I’ve created a helper class called **DeviceType**, along with two extensions: **UIDevice+DeviceType** and **UIViewController+DeviceType**. You can find them and a sample project on GitHub: https://github.com/ianhirschfeld/Swift-DeviceType

The main usage is the ability to make a call similar to the following:

```
if UIDevice.currentDevice().deviceType == .iPhone6Plus {  // Some iPhone 6 Plus specific logic...}
```

I also added a few view helpers for estimating the device based off of the view’s frame size:

```
if self.isIPhone5sSize {  // Some iPhone 5s specific view logic...}
```

These methods and extensions have already helped me separate out logic and special cases within my own projects, and I hope they can do the same for others. Feel free to let me know your thoughts here, tweet me [@ianhirschfeld](https://twitter.com/ianhirschfeld), or even contribute to the repo!

## [Download the Source Code](https://github.com/ianhirschfeld/Swift-DeviceType)

_DeviceType was based off code from Dennis Weissmann and his_ [_git repo_](https://github.com/dennisweissmann/Basics)_. Along with some insight gained from_ [_this_](http://stackoverflow.com/questions/25377878/how-to-import-sys-utsname-h-in-swift) _and_ [_this_](http://stackoverflow.com/questions/14411075/uidevice-currentdevice-model-possible-values) _StackOverflow threads._
