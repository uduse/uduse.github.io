---
title: RL with Sequence Modeling
date: 2021-09-12 20:12:31
tags: RL
---

<!-- Per -->

This post gives a brief introduction to a new paradigm of solving Reinforcement Learning (RL) problems using sequence modeling.
I assume the readers have a basic understanding of RL and deep learning.

<!-- more -->

# Sequence Model
A **sequence model** is a model whose inputs have a sequential dependence.
Inputs of sequence models could be audio streams, video streams, and stock prices where inputs are temporally correlated.
Inputs could also be DNA sequences.


In this post, we will focus on the discrete case where inputs are represented as **tokens**: small units

For texts, inputs could be words or characters.
For videos, inputs could be frames.

When a sequence model takes a sequence of tokens and outputs a single token, we can train this model for the task of **prediction**.
In other words, we train the model to answer the question that "if we see these tokens, what's the most likely next token?".

<!-- sequence model for prediction, where inputs are tokens and output is a single token -->
{% asset_img 2021-09-13-16-02-28.png "Sequence Model for Prediction" %}

For example, say we train such a model by feeding it words as tokens .
Then, we may query the model with tokens from an incomplete sentence and the model will guess the next token.

{% asset_img 2021-09-14-15-14-37.png "Model correctly guesses the next token is the word \"VIM\"." %}

Since the output of the model is also a token, we could append the output token to the end of input tokens to form a new sequence of tokens (this will pushes out the first token in the original sequence).
This means we now can use the model to generate a sequence of tokens given the input tokens.
We call a model with this property as an **autoregressive model**.

<!-- https://deepmind.com/blog/article/wavenet-generative-model-raw-audio -->
{% asset_img wavenet.gif "An autoregrssive model that generate a sequence of tokens." %}

{% note info %}

{% endnote %}


<!-- This simple idea of predicting "what's the next token" is taken to the extreme where -->

## Regular RL
Urna himenaeos sed nostra tellus ultrices nulla lectus ipsum, nisi habitant dis nisl eleifend nec sit, hac taciti purus quisque mollis consequat consectetur. Elit at ultricies per augue, nibh enim ipsum vestibulum, nostra dapibus lectus. Lobortis netus facilisis litora magnis rutrum nunc sapien id, torquent varius himenaeos orci phasellus ac viverra mus convallis, nam a porta conubia sagittis nisi nec.

# RL with Sequence Modeling 
Urna himenaeos sed nostra tellus ultrices nulla lectus ipsum, nisi habitant dis nisl eleifend nec sit, hac taciti purus quisque mollis consequat consectetur. Elit at ultricies per augue, nibh enim ipsum vestibulum, nostra dapibus lectus. Lobortis netus facilisis litora magnis rutrum nunc sapien id, torquent varius himenaeos orci phasellus ac viverra mus convallis, nam a porta conubia sagittis nisi nec.

## Partial Observability
Urna himenaeos sed nostra tellus ultrices nulla lectus ipsum, nisi habitant dis nisl eleifend nec sit, hac taciti purus quisque mollis consequat consectetur. Elit at ultricies per augue, nibh enim ipsum vestibulum, nostra dapibus lectus. Lobortis netus facilisis litora magnis rutrum nunc sapien id, torquent varius himenaeos orci phasellus ac viverra mus convallis, nam a porta conubia sagittis nisi nec.

## Agent Behavior Understanding
Urna himenaeos sed nostra tellus ultrices nulla lectus ipsum, nisi habitant dis nisl eleifend nec sit, hac taciti purus quisque mollis consequat consectetur. Elit at ultricies per augue, nibh enim ipsum vestibulum, nostra dapibus lectus. Lobortis netus facilisis litora magnis rutrum nunc sapien id, torquent varius himenaeos orci phasellus ac viverra mus convallis, nam a porta conubia sagittis nisi nec.

## Credit Assignment
Urna himenaeos sed nostra tellus ultrices nulla lectus ipsum, nisi habitant dis nisl eleifend nec sit, hac taciti purus quisque mollis consequat consectetur. Elit at ultricies per augue, nibh enim ipsum vestibulum, nostra dapibus lectus. Lobortis netus facilisis litora magnis rutrum nunc sapien id, torquent varius himenaeos orci phasellus ac viverra mus convallis, nam a porta conubia sagittis nisi nec.

## RL 

## Planning

$$E = mc^2$$

