---
layout: page
title: 6-DOF Robotic Arm Sorting
description: Pick and place for target darts.
img: assets/img/12.jpg
importance: 1
category: coursework
related_publications: false
---

# 6-DOF Robotic Arm Sorting Project

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/6dof_sorting.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    the darts sorting experiment video.
</div>


## 1. Task Description
- **Objective**: Implement a **pick-and-place** task based on image input.  
- **Scenario**: A 6-DOF robotic arm sorts objects placed in its workspace.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A illustration of the project setup.
</div>

## 2. Key Highlight
- **Coordinate Transformation & Collision-Free Planning**  
- **Workspace analysis**
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Modeling in Matlab.
</div>

- **Coordinates transformation**:  
  - Typical: **camera calibration**. Mapping from **2D image → 3D coordinates** usually needs **two images** (stereo vision).  
  - We use **perspective transformations to approximate a 2D-to-2D mapping**, simplifying computation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Affine transformation.
</div>

## 3. Motion Planning
- **Steps**:  
  1. Define a **pre-grasp location** (safe approach pose before picking).  
  2. Add **constraints for end-effector pose** to avoid invalid orientations.  
  3. Apply **collision-free planning** to ensure safe arm trajectories.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sorting8.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    illustration of the joint constraint.
</div>


## 4. Issues
- **Geometry-based Inverse Kinematics (IK)**: Sometimes fails to provide a closed-form solution.  
- **Coordinate transformations**: are not exact → requires tolerance handling.  


## Summary:  
This project demonstrates how to complete the manipulation task based on **single image** input, and how to integrate **motion planning with constraints** for a 6-DOF robotic arm, bridging computer vision and robotics control techniques.

