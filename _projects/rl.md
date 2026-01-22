---
layout: page
title: Humanoid Balancing
description: Training Unitree G1 to withstand external disturbance using Reinforcement Learning in MuJoCo.
img: assets/img/rl_g1.jpg
importance: 1
category: coursework
related_publications: false
---
## Overview

In this project, we developed a robust locomotion controller for humanoid robots using Reinforcement Learning. The agent is trained to maintain a stable standing posture and recover from significant external disturbances. 

This project is built upon the [mjlab](https://github.com/mujocolab/mjlab) framework, leveraging its powerful MuJoCo-based simulation environment for efficient RL training.

### Successful Recovery
The final trained policy demonstrates impressive stability, successfully withstanding a **5m/s instant velocity disturbance** by dynamically adjusting its posture.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/rl_success.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    5m/s instant velocity disturbance applied and successfully rejected.
</div>

---

## Reward Function Design

To achieve this level of robustness, we designed a multi-objective reward function. The weights were tuned to balance the trade-off between energy efficiency and stability.



### 1. Positive Incentives
| Reward Name | Weight | Description |
| :--- | :--- | :--- |
| **alive** | +10.0 | Main incentive to prevent termination. |
| **feet_contact** | +2.0 | Encourages standing in place first for small perturbations. |
| **posture** | +1.0 | Penalizes deviation from a nominal running joint configuration with loose arm constraints. |

### 2. Negative Penalties
| Reward Name | Weight | Description |
| :--- | :--- | :--- |
| **feet_slip** | -10.0 | Penalizes foot sliding velocity to enforce stable standing. |
| **knee_height** | -10.0 | Penalizes knee collapse. |
| **penalty_lin_vel** | -1.0 | Penalizes base linear velocity (robot should remain stationary). |
| **penalty_ang_vel** | -0.2 | Penalizes base angular velocity. |
| **angular_momentum**| -0.1 | Encourages arm swing to cancel angular momentum. |
| **action_rate_l2** | -0.001 | Regularization for smooth control actions. |

---

## Lessons Learned: Reward Shaping

### Reward Hacking
In the early stages of training, when **`feet_contact`** and **`knee_height`** rewards were not yet implemented, the agent discovered "hacks" to maximize the `alive` reward. It would adopt unnatural, vibrating, or leaning poses that avoided falling but failed to provide actual physical stability.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/reward_hacking.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Reward hacking case due to missing foot contact and knee height constraints.
</div>

### Bad Reward Design
Incorrectly balanced weights or missing regularization often led to poor performance, where the robot could not sustain its balance even under minor noise.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/bad_reward.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    A failure case resulting from sub-optimal reward weighting.
</div>

---

## Termination Conditions

The simulation terminates early if the robot enters an unrecoverable state, which accelerates the learning process:

* **Fall Threshold**: Base orientation (Roll or Pitch) **> 90 degrees**.
* **Collapse Threshold**: Base height **< 0.3 m**.
* **Time Limit**: **6.0 s** (equivalent to 300 steps).