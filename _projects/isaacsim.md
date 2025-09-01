---
layout: page
title: Robot Simulation and VLA model
description: We constructed a manipulation task in Isaac Sim simulator and trained the model.
img: assets/img/r9.png
importance: 1
category: industrial
related_publications: false
---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/grasp.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    The result demonstration.
</div>

## 1. Background
This project focuses on **robot manipulation** tasks and the **Sim-to-Real transfer problem**, leveraging **vision-language-action (VLA)** models pretrained on large-scale internet data and fine-tuned on our task.

- **Core Reference**:  
  [Brohan, Anthony, et al. *"RT-2: Vision-language-action models transfer web knowledge to robotic control."*](https://arxiv.org/abs/2307.15818)

- **Robot Transformer-2 (RT-2)**:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/r1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Robot Transformer 2.
</div>

  - **Pretrained**: Large-scale robot datasets  
  - **Fine-tune**: Few-shot, unseen tasks  
  - **Ours**: Overfits to specific tasks, achieving high success rates.

---

## 2. Task: Nut-Screw Manipulation
- **Objective**: Robot is instructed to **tighten a nut onto a bolt** with high precision.  
- **Instruction**:  
  *“What should the robot do to grab the nut and screw it onto a bolt?”*  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/r6.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A comparison between simulation and real environment.
</div>

---

## 3. Simulation Environment: Isaac Sim
Features:
- Physics Engine: **PhyX**  
- Rendering: **Ray Tracing**, GPU acceleration  
- Assets: **Massive 3D object library**  
- Advantage: Generate **synthetic training data** at scale.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/r3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A comparison between simulation and real environment.
</div>

- We designed its trajectory and collected two views for training.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/r2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    The designed policy.
</div>

---

## 4. Training Setup
- **Pretrained Models**:  
  - Language Model: **LLaMa-3-8B**  
  - Vision Model: **CLIP ViT-L/14-336**  

- **Training Data**:  
  - 2.4k rollouts  
  - 4.8k videos  
  - Trained for 3 epochs  

- **Computation**:  
  - Cloud computation
  - Robot Operating System(ROS) for transmission

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/r7.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A illustrative graph for the simulator and server.
</div>

---

## 5. Limitations
- **Generalization**: Requires more diversed data for fine-tuning.  
- **Action Representation**: Sequential action space may struggle with long-horizon planning.  
- **Perception**: Lack of explicit **depth and 3D information** limits manipulation robustness.  

---

## 6. Failure Cases
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/241203_132741_0_Fail.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="/assets/video/241202_163350_0_Fail.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="/assets/video/241202_163736_1_Fail.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
    </div>
</div>
<div class="caption">
    The failure cases.
</div>
---

**Summary**:  
This project explores how **vision-language-action models** can be fine-tuned on robotic data to perform **high-accuracy manipulation tasks** such as screwing a nut onto a bolt. It highlights both the power of **large-scale pretrained models** and the challenges of **generalization** in fine-tuning and Sim-to-Real transfer.


