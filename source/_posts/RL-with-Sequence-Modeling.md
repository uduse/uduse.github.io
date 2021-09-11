---
title: RL with Sequence Modeling
date: 2021-09-10 15:12:54
tags:
---

This post gives a brief introduction to a new paradigm of solving RL problems using sequence modeling.

# Regular RL

## Limitation

# RL with Sequence Modeling 


@online{janner_ReinforcementLearningOne_2021,
  title = {Reinforcement {{Learning}} as {{One Big Sequence Modeling Problem}}},
  author = {Janner, Michael and Li, Qiyang and Levine, Sergey},
  date = {2021-06-03},
  eprint = {2106.02039},
  eprinttype = {arxiv},
  primaryclass = {cs},
  url = {http://arxiv.org/abs/2106.02039},
  urldate = {2021-06-29},
  abstract = {Reinforcement learning (RL) is typically concerned with estimating single-step policies or single-step models, leveraging the Markov property to factorize the problem in time. However, we can also view RL as a sequence modeling problem, with the goal being to predict a sequence of actions that leads to a sequence of high rewards. Viewed in this way, it is tempting to consider whether powerful, high-capacity sequence prediction models that work well in other domains, such as natural-language processing, can also provide simple and effective solutions to the RL problem. To this end, we explore how RL can be reframed as "one big sequence modeling" problem, using state-of-the-art Transformer architectures to model distributions over sequences of states, actions, and rewards. Addressing RL as a sequence modeling problem significantly simplifies a range of design decisions: we no longer require separate behavior policy constraints, as is common in prior work on offline model-free RL, and we no longer require ensembles or other epistemic uncertainty estimators, as is common in prior work on model-based RL. All of these roles are filled by the same Transformer sequence model. In our experiments, we demonstrate the flexibility of this approach across long-horizon dynamics prediction, imitation learning, goal-conditioned RL, and offline RL.},
  archiveprefix = {arXiv},
  keywords = {RL,transformer},
  file = {/Users/Uduse/Zotero/storage/3B5BLAQ9/Janner et al. - 2021 - Reinforcement Learning as One Big Sequence Modelin.pdf;/Users/Uduse/Zotero/storage/G49PWIYJ/2106.html}
}

