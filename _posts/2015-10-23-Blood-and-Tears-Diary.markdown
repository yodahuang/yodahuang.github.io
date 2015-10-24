---
layout: post
title:  "Blood and Tears Diary"
date:   2015-10-23 22:44:35
categories: Development
summary: A bug diary
author: Yanda Segment Default
---

## EECS281
### A course of segment fault and infinite loop 


#### Project2 Sorted Qriority Queue (5 hours debugging)
- **Never** use (x--) when using `cout` or other functions, it's dangerous!
- If there's bug, try using simple test case instead of a large complex one
- **Never** use a pointer pointing to dynamic structure.
  -E.g. Having a iterator pointing to `std::lower_bound`. After there's a `std::vector::push` action, it's no longer correct.

![My awesome git commit](http://i.imgur.com/Jrhj1TQ.png)

## EECS 370
### Assembly where you go through tens of thousands of output to find the bug


#### Project2 Combination Number (6 hours debugging)
- When using recursion, the memory values may change, so don't simply use memory to transfer data, though in your code it looks as it will never change.
- if the register is full and I want to save something, don't use fix memory, it may change. Push the data onto the stack (spilled register)

![I can imagine..](http://i.imgur.com/JSlGglz.png)