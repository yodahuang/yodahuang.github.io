---
title: Comparision between DDPG and A2C
date: 2018-04-27 20:32:37
layout: post
category: "Deep Reinforcement Learning"
draft: false
tags: 
  - "DDPG"
  - "A3c"
description: "DDPG and A2C both use the Actor-Critic structure. What are the differences between them?"
---

[Deep Deterministic Policy Gradient](https://arxiv.org/abs/1509.02971) algorithm and [Advantage Actor Critic](https://arxiv.org/abs/1602.01783) algorithm both have two networks, namely Actor and Critic network for training the agent. When I read the papers, I was kinda confused about their difference. Here is some of my thoughts.

DDPG aims to extend Deep Q Network to continuous action space. In DQN, to pick an action you need to go throught the network and calculate `argmax`, which is infeasible for continuous action space. To fix this problem, DDPG introduce another actor network to pick the "best action". So critic network is the main network, while the actor network is the sub network.

A3C is a improvement on the Reinforce algorith. It adds a baseline to the algorithm to make it more robust. The baseline is calculated using a critic network. Note here the critic network is not a Q network, since its input is a state instead of state-action pair. Here the actor network is the main network and the critic one is the sub network.

The network weights are also updated differently.

DDPG updates critic network by Temporal Difference (TD) update. The actor network is updated based on the fact that the good state-action pair should be visited more often. Since it's deterministic, it does not to some over something in loss function.

A2C updates actor network by awarding good actions, using Monte Carlo method minus baseline as an estimatte of Q function. The critic network is updated by making the baseline better.