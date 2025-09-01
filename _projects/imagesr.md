---
layout: page
title: Image Super-Resolution
description: Super-resolution weighting method with meta-Learning.
img: assets/img/s1.jpg
importance: 1
category: research
related_publications: false
---

## 1. Background: Image Super-Resolution
- **Goal**: Enhance the resolution of images beyond their original limits  
  - Reconstruct high-resolution (HR) images from low-resolution (LR) inputs.  
- **Examples**:  
  - `240×240 → 480×480`  
  - `240×240 → 960×960`

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Image super-resolution through deep learning.
</div>

## 2. Problem in Previous Studies
- **Long-tailed distribution** in image frequencies:
  - **High frequency part** → Hard to recover, but less frequent.  
  - **Low frequency part** → Easy to recover, but dominant.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Bigger losses for high frequency parts.
</div>

- **Existing weighting method**:  
  - Assigns **bigger weights for bigger pixel loss**.  
  - Limitation: Not content-aware.
- **Core idea**: Make weights **content-aware and learnable** via CNN.  

## 3. Our Method

- **Contribution**: Supports few-shot learning by adaptively selecting from training data.  

### 3.1 Loss Adjustment
- Adjust the **loss (gradient)** by applying weights to each pixel.  
- **Weight generation**:  
  - A Fully Convolutional Network (FCN) produces a **Weight Map** with the same size as the Loss Map.  
  - **Sigmoid + Normalization** → Interpreted as probabilities.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   The weighting pipeline.
</div>

### 3.2 Meta-Learning Inspiration
- Inspired by **MAML [1]**, but with differences:
  - We define a **meta-dataset** (few-shot LR-HR pairs).  
  - Instead of using explicit meta-gradients, we **use weights** to guide learning.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Adjusting gradient by meta-learning.
</div>

### 3.3 Similarity and Objective
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s7.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Definition of gradient similartiy and objectiv e.
</div>
- If a weight contributes to better performance (**more reward**), we increase its magnitude.  
- Reward is defined by **similarity of gradients**.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/s6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   A illustration of low-level similarity.
</div>

## 4. Experimental Validation
- Tested with Urban100 to validate the effect.  
- Observations:
  - Generated weights vary with different inputs.  
  - The **Weight-Net** learned useful patterns when provided with different meta-datasets.  

---

**Reference**  
[1] [Finn, C., Abbeel, P., & Levine, S. *Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks.* ICML, 2017.](https://arxiv.org/abs/1703.03400)