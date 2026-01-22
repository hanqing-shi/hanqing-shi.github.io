---
layout: page
title: Quadruped Backflip
description: Implementing a dynamic backflip maneuver using phase-based trajectory tracking and yaw-invariant rewards.
img: assets/img/go1_backflip.jpg
importance: 2
category: coursework
related_publications: false
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/go1_backflip.mov" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Unitree Go1 performing a backflip with trajectory tracking.
</div>

---

### 1. Motion Strategy: Phase-Based Keyframes

The backflip is modeled as a time-indexed maneuver. We use a trajectory generator to define the robot's target state across several critical phases. This ensures the robot transitions smoothly from a stationary stance to a dynamic leap.

* **Start / Squat**: The robot lowers its Center of Mass (CoM) to store potential energy in the legs.
* **Takeoff**: Rapid extension of the joints to generate the necessary vertical and rotational momentum.
* **Apex**: The robot reaches its maximum height while completing a full mid-air rotation.
* **Landing**: The legs extend to align the feet for ground contact and absorb the impact energy.

> **Note on JIT (Just-In-Time)**: 
> In this implementation, the trajectory generator uses **PyTorch JIT (`@torch.jit.script`)**. This is a way to compile Python code into a high-performance representation. Because Reinforcement Learning involves thousands of parallel environments, JIT ensures the trajectory is calculated at near-C++ speeds, preventing the reference math from becoming a bottleneck during training.

---

### 2. Reward Function Design

To achieve robust and natural movement, the reward function is decomposed into tracking accuracy and physical regularization components.

#### Yaw-Invariant Orientation Tracking
A key innovation is the use of **Projected Gravity Matching**. Instead of forcing the robot to maintain a specific compass heading (Yaw), we align the actual gravity vector in the body frame with a target gravity vector derived from the reference pitch.

The orientation reward is calculated based on the cosine similarity (dot product) between the actual and target gravity vectors:
$$r_{ori} = \exp\left( -\frac{(\mathbf{g}_{target} \cdot \mathbf{g}_{actual} - 1.0)^2}{\sigma_{pitch}^2} \right)$$

This allows the robot to backflip successfully regardless of its starting orientation, focusing only on the correct Pitch and Roll.



#### Regularization & Constraints
* **Action Rate L2**: Penalizes high-frequency oscillations in joint commands to ensure hardware-friendly motor outputs.
* **Joint Soft Limits**: Prevents the robot from reaching mechanical singularities or hitting hardware stops.
* **Action L2**: Penalizes large action magnitudes as a proxy for energy consumption and torque limits.

---

### 3. Implementation Details

The controller is implemented within the `ManagerBasedRlEnv` framework. By mapping the simulation time to a normalized phase variable $\phi \in [0, 1]$, the robot can synchronize its physical actions with the reference trajectory precisely.

```python
# Normalized phase calculation for interpolation
phase = torch.clamp(current_time / max_time, 0.0, 1.0)