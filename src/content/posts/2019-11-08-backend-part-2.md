---
category: posts
title: 'Backend: Part 2'
date: 2019-11-08T19:22:38.348Z
---
Welcome back to the second installment of backend programming. If you missed the first, [read it here](https://brettk.dev/2019-10-30-backend-part-1/). This is the one where we start coding.

<!-- end -->

### First Things First

We'll start by initiating the `dotenv` library. This will load information from a `.env` file in the root of the project. The `.env` file does **not** get checked into source control.

```javascript
require('dotenv').config()
```

### Importing Stuff

The first step is going to be getting `express` and `mongoose` imported.

```javascript
const express = require('express')
const mongoose = require('mongoose')
```
