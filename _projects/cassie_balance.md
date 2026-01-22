---
layout: page
title: Cassie Balancing
description: A hierarchical force control pipeline for external disturbance rejection using QP-based force distribution.
img: assets/img/cassie.jpg
importance: 1
category: coursework
related_publications: false
---

## Overview

We developed a force-based balancing controller for the Cassie robot that combines task-space PD control with optimal force distribution. By solving a constrained optimization problem (QP) in MATLAB, the system allocates contact forces that respect physical limits like friction and Center of Pressure (COP). The resulting controller allows the robot to maintain its upright posture and resist continuous pushing forces from both the X and Y directions.



<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/cassie_edit.mov" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Balancing under forward/lateral push disturbances.
</div>

---

## Control Methodology

The controller follows a **Hierarchical Force Control** architecture, mapping high-level stability tasks to low-level joint torques through three primary stages:

### 1. Task-Space Wrench Calculation
The controller treats the robot as a single rigid body at its Center of Mass (CoM). We compute a **Desired Wrench** (force and torque) required to stabilize the robot:
* **Linear Force**: A PD controller tracks the target CoM position and velocity while compensating for gravity ($Mg$).
* **Angular Torque**: A rotational PD controller regulates the torso's orientation (Roll, Pitch, Yaw) using rotation matrix error.

### 2. QP-Based Force Distribution
Since the robot has multiple contact points, the required Wrench is distributed among the feet using **Quadratic Programming (QP)**. The optimizer solves for optimal contact forces while respecting physical hardware limits:
* **Friction Cones**: Prevents the feet from slipping.
* **Unilateral Contacts**: Ensures the ground can only "push" the robot ($F_z > 0$).
* **COP Constraints**: Restricts the Center of Pressure to stay within the physical footprint to prevent tipping.



### 3. Joint Torque Mapping
Finally, the optimized contact forces are mapped back to the 10-actuated joints using **Task-Space Jacobians**:
$$\tau = -J^T F_{contact} + \tau_{PD}$$
A high-gain joint-level PD controller is superimposed to maintain the nominal posture and provide damping, ensuring the robot remains robust even near kinematic singularities.

---