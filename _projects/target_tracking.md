---
layout: page
title: Target Tracking
description: A two-DOF laser workbench tracking moving targets.
img: assets/img/tracking1.jpg
importance: 1
category: coursework
related_publications: false
---

We designed image processing and control algorithms for a two-degree-of-freedom laser workbench equipped with a monocular camera, enabling stepper motor control for target identification and tracking.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Target_Identification_and_Tracking_System.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    the tracking experiment video.
</div>

# Target Tracking Project

## 1. Task Description
We designed **image processing** and **control algorithms** for a two-degree-of-freedom (2-DOF) laser workbench.  
- Equipped with a **monocular camera**.  
- Controlled by **stepper motors**.  
- Objective: **Target identification and tracking** of moving objects.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tracking1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tracking2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tracking3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experiment setup.
</div>

## 2. Task Specification
1. Fit inverse kinematics (not shown in demo video).  
2. Scan a **QR code** to retrieve a **color sequence**.  
3. Use the **laser to point at corresponding targets**, including statical and dynamical objects.  
4. Change target color and repeat step 3.  


## 3. Mathematical Modeling

### 3.1 Basic Inverse Kinematics

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tracking4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modeling the problem.
</div>

$$
x = d \cdot \tan \theta_1, \quad y = d \cdot \tan \theta_2
$$

where

* $d$: fixed distance between laser source and target plane
* $\theta_{1}, \theta_{2}$: motor-controlled angular displacements

---

## 4. Coordinate Transformation

### 4.1 Camera Calibration (Considered, but not used)

* Standard method: Estimate **intrinsic** and **extrinsic** parameters.
* Challenge:

  1. Calibration is cumbersome and depends on camera position.
  2. Projection matrix inversion requires **depth information**, which is unavailable with a monocular camera.

### 4.2 Function Fitting (Chosen Method)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tracking5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Function fitting method.
</div>

* Problem reformulation:

  * Input: image coordinates $(x, y)$.
  * Output: motor angles $(\theta_1, \theta_2)$.
  * Target: Find a mapping $f : \mathbb{R}^2 \to \mathbb{R}^2$.

* **Data Collection**:

  * Control motor to move to $\theta_{1}, \theta_{2}$.
  * Record corresponding laser point in image plane $(x_i, y_i)$.
  * Collect $N$ pairs of samples.

* **Model Selection**:

  * Within limited range, $(\theta_1, \theta_2)$ vs. $(x, y)$ approximates **linear relation**.
  * Adopt **linear regression**:

$$
\theta = A X + b
$$

where

$$
\begin{bmatrix}
\theta_1 \\
\theta_2
\end{bmatrix}
=
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
+
\begin{bmatrix}
b_1 \\
b_2
\end{bmatrix}
$$

---


### Summary:
This project demonstrates **laser-based moving target tracking** by integrating **computer vision**, **control algorithms**, and **kinematic modeling**. Instead of relying on camera calibration and depth recovery, a **function fitting approach** is used, proving to be simple yet effective for mapping image observations to motor commands.
