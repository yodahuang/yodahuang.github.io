---
title: "Marble Madness"
layout: project
previewYoutube: "NYh3HTQ2zSk"
description: "Why don't we make a robot that can play marble games?"
---

![system architecture](system.png)
## Vision
![vision](vision.png)

## Optimizer

- Find block positions, given the bounds and properties of environment, so ball can successfully travel to the goal position
- Based on the Box2d physics engine
- Use Differential Evolution for optimizer

![optimizer](optimizer.gif)

## Manipulation

![grasp](baxter_grasp.gif)

## What did I specifically do?

I implemented the optimizer and the interface, source code available at [Github](https://github.com/realMarbleMadness/Box2D)