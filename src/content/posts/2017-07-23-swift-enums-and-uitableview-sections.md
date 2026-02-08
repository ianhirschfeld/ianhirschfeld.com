---
title: Swift Enums and UITableView Sections
date: 2017-07-23
featuredImage: ../../assets/posts/swift-enums-and-uitableview-sections/image-01.jpeg
canonicalUrl: https://medium.com/@ianhirschfeld/swift-enums-and-uitableview-sections-1806b74b8138
---

## The Problem

Sectioned data in a `UITableView` is annoying to deal with. It can get quite cumbersome to keep track of everything that is needed to render rows of table data that have multiple sections. Here is a quick list: all the data sorted by section, the current section you are viewing, the current row within that section you are viewing, the total number of sections and rows, loading / refresh state if applicable, etc. The more of this we can keep track with using less objects and variables, the better.

## The Solution

### 1\. Setting up our TableSection enum

Creating a enum is fairly straightforward. There are a couple important things to note when using an enum specifically for `UITableView` sections:

- Set the enum type to `Int`.
- While the order of each enum case (aka our sections) does not matter, reserve the last case for a helper called `total`.
- Set the first case to start at 0 which will correspond to the section at index 0.

<script src="https://gist.github.com/ianhirschfeld/f8c286d6e62a8f152dab303a817330d9.js"></script>

### 2\. Add some data and a helper method for sorting it

For the sake of simplicity the data in this tutorial will be an array of `Dictionary` of type `[String: String]`. You could in theory (and probably do) have a more complicated data object, but the basic principles remain the same. At the bottom of the code below you can see a straightforward example of taking the raw data and sorting it using the `TableSection` enum into our data variable from above:

<script src="https://gist.github.com/ianhirschfeld/fea31b8bbfbd59172a6a967e1392c86d.js"></script>

### 3\. Setting up UITableViewDataSource and UITableViewDelegate with our TableSection enum

Now it’s time to integrate our `TableSection` into the data source and delegate for our `UITableView`. Since all the delegate methods give us the current section as an `Int` or the current `IndexPath`, the most important parts of our code boil down to looking up the current section from the `TableSection`:

```
let tableSection = TableSection(rawValue: section)let tableSection = TableSection(rawValue: indexPath.section)
```

And then whenever we need to grab the data associated with a table section it’s as easy as:

```
let movieData = data[tableSection]
```

Below is the code for setting up the barebones of a `UITableView` with multiple sections and rows:

<script src="https://gist.github.com/ianhirschfeld/1b342e4b9a5143666e46c43e149d3826.js"></script>

And that’s it! The only other thing you need with the above code is the storyboard that attaches the `UITableView` to this `ViewController`.

![image](../../assets/posts/swift-enums-and-uitableview-sections/image-02.gif)

## [Download the source code](https://github.com/ianhirschfeld/EnumTableViewTutorial) to a full Xcode project you can play around with.
