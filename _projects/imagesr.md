---
layout: page
title: Image Super-Resolution
description: Super-resolution weighting method with meta-Learning.
img: assets/img/12.jpg
importance: 1
category: research
related_publications: true
---

# Super-Resolution Weighting Method by Meta-Learning

## 1. Background: Image Super-Resolution
- **Goal**: Enhance the resolution of images beyond their original limits  
  - Reconstruct high-resolution (HR) images from low-resolution (LR) inputs.  
- **Examples**:  
  - `240×240 → 480×480`  
  - `240×240 → 960×960`

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.

## 2. Problem in Previous Studies
- **Long-tailed distribution** in image frequencies:
  - **High frequency part** → Hard to recover, but less frequent.  
  - **Low frequency part** → Easy to recover, but dominant.  

- **Existing weighting method (CVPR2023)**:  
  - Assigns **bigger weights for bigger pixel loss**.  
  - Limitation: Not content-aware.

## 3. Our Method
- **Core idea**: Make weights **content-aware and learnable** via CNN.  
- **Contribution**: Supports few-shot learning by adaptively selecting from training data (e.g., hard examples, RealSR).  

### 3.1 Loss Adjustment
- Adjust the **loss (gradient)** by applying weights to each pixel.  
- **Weight generation**:  
  - A Fully Convolutional Network (FCN) produces a **Weight Map** with the same size as the Loss Map.  
  - **Sigmoid + Normalization** → Interpreted as probabilities.  

### 3.2 Meta-Learning Inspiration
- Inspired by **MAML [1]**, but with differences:
  - We define a **meta-dataset** (few-shot LR-HR pairs).  
  - Instead of using explicit meta-gradients, we **use weights** to guide learning.  

### 3.3 Reinforcement-Learning Style Reward
- If a weight contributes to better performance (**more reward**), we increase its magnitude.  
- Reward is defined by **similarity of gradients**.  

## 4. Experimental Validation
- Tested with special examples to validate the effect.  
- Observations:
  - Generated weights vary with different inputs.  
  - The **Weight-Net** learned useful patterns when provided with different meta-datasets.  

---

**Reference**  
[1] Finn, C., Abbeel, P., & Levine, S. *Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks.* ICML, 2017.
