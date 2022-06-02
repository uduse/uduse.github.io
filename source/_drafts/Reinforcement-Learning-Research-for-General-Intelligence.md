---
title: Reinforcement Learning Research for General Intelligence
tags:
  - Artificial General Intelligence (AGI)
  - Reinforcement Learning
---

This is a sketch of my recent reflections and future research plan. Disclaimer: I am dumb and I do not read papers.

## I am really bothered.

The core of my problem is that I think the current problem formulations of RL deviates too much from the problems I am interested in solving. I am only interested in solving real world complex problems and my ultimate goal is to build a system with general intelligence someday. As a result, the discussion here is only for the path to general intelligence.

However, current problem formulations, especially MDP, are not good abstractions. In real world, the state is always only partially observable. In fact, our observation is so partial compared to the state so that we should give up thinking about the full state completely. The action space is usually continuous and in multiple dimensions. The reward signals do not really exist. The system dynamics is never known. In addition, real world always moves forward and never resets to a starting state, at least for the real world we could perceive.

When we need to solve a real world problem with this formulation, we have to put in great effort to squeeze the real problem into the formulation. Information lost is unavoidable during this process of abstraction, but could be less harmful if we carefully pick the right information to retain. The most significant change is the addition of reward signals. We do this by first imagining a desired behavior for the agent, such as walking or jumping, then craft the reward function to describe such behavior. This extreme compression from a continuum of behavior to a single value is hardly desirable, if it is even possible, when the behavior is complex. For example, how do you craft a reward function for a parkour move? In a way, we have manually performed inverse reinforcement learning (creating a reward function based on some desired behavior) in the process of just defining the problem. I do not think we need this step.

## What we should do:

**Give up MDP.** MDP is too restrictive and we should not use it to frame hard problems. There are some work on extending MDP, such as adding partial observability, but why not start a new one from scratch? MDP should belong to textbooks for educational purposes.

**Agent should know more about itself.** The value function we use right now could be comprehended as a compressed description of the behavior of itself. For any complex task this single value is no way near sufficient for the agent to learn its own behavior. We need more ways to compress the behavior of the agent so that agent has a larger bandwidth of information to learn from its own behavior.

**Give up learning from environment rewards.** I do not believe in the reward hypothesis. I think being smart about defining the reward for a complex task is creating a bad problem to solve. Solving a bad problem is for sure not the best way to get a good solution to the real problem.

**Only use continuous tasks, or treat episodic tasks as a special case.** An "episode" of something is an extremely high level concept and we should not inject it when we formulate the problem. Instead, we should think about why we conceptually divide events into discrete windows. Instead of resetting the agent for each episode, is it possible for the agent to learn to segment 

## What I will do:

(In-progress) I will try to formulate the problem and design the interface differently. This reduces the time cost and information lost for converting real world problems. For example, episodic tasks are now special cases of continuous tasks by using two additional booleans that signals the episode start/end. This interface will be mostly compatible with our current problem formulation and interface but I do think such an update will be beneficial in the long run. We have different programming languages that not only for solving specific problems more efficiently, but also 

I will show that for tasks like cart-pole and mountain-car, it is possible to obtain an optimal policy without using the reward signal to guide its learning. The agent would also learn a coherent map of behaviors that demonstrates different "skills" that users can interact like large language models.

I will show that temporal difference (TD) in learning could be used differently. The agent would have two seemingly competing components that work together: one minimizes TD error for the model and learns to predict the TD error, one maximizes predicted TD error by planning with the model. This TD error should be ideally computed by aggregating various auxiliary tasks.

I will show that the "goal" is a summarized expectation of the future. When we force the agent to aggressively compress coherent behaviors into discretized embedding, "goals" will appear.

I will show that a central sequence model could be used to connect all things aforementioned. We will also stack various smaller procedures or networks on top of the sequence model, but all of them will work together to create a coherent behavior of the agent.

I will also journal my thoughts as much as possible. I have a vague big picture in mind and it will take great effort already just to put it down nicely. If you would like me to expand any topic here, please let me know and I will do my best to either elaborate or show it with a paper.

## Closing thoughts.

My deepest fear is that I am actually living in an ivory tower and not realizing it. I have little research output yet I want to make great changes. That is a bad sign. On the one hand, I desperately need some proof for myself so that I have a little more faith in myself. On the other hand, breaking changes always have to go through tons of failures. Maybe I will only have such confidence decades later. Maybe this is what life all about.

<!-- [](https://arxiv.org/pdf/1706.03741.pdf) -->