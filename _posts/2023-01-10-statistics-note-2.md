---
layout: post
title: Statistical Inference
date: 2023-01-09 11:12:00-0400
description: Key concepts in statistical inference.
tags: math
categories: notes
related_posts: false
---
# Statistics Note

This is a note based on [MIT 18.650](https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/).  

---

### 1.Trinity of statistical inference  
1. Estimation  
2. Confidence intervals  
3. Hypothesis testing  

### 2.Statistical model

$$
(E,\rm (I\!P_\theta)_{\theta \in \Theta})
$$  

E: Sample space  

$(P_\theta)_{\theta \in \Theta}$ is a family of probability  

$\Theta$:parameter set

### 3.Estimation  
#### Parameter Estimation  

Statistic: Any measurable **function** of the sample, e.g.,  
$\bar X_n, maxX_i, X_1 + log(1 + |X_n|)$, sample variance etc.

Estimator of $\theta$: Any statistic whose expression does not depend on $\theta$.  (**r.v.**)

$$
\hat{\theta}_n\to\theta
$$

Asymptotically normal:  

$$
sqrt{n}(\hat{\theta}_n-\theta)\to N(0,\sigma^2)
$$  

#### Bias of an estimator
$$bias(\hat{\theta}_n)=E[\hat{\theta}_n]-\theta$$
If bias = 0, we say $\hat{\theta}_n$ is **unbiased**.  

#### Quadratic risk  
Idea: We want estimators to have **low bias** and **low variance** at the same time.  
Quadratic risk:

$$
R(\hat{\theta}_n)=E[(\hat{\theta}_n-\theta)^2]=Var(\hat{\theta}_n)+bias(\hat{\theta}_n)^2
$$  

### 4. Confidence intervals
Let $(E,\rm (I\!P_\theta)_{\theta \in \Theta})$ be a statistical model based on observations $X_1,\cdots,X_n$. Let $\alpha\in(0,1)$
#### Confidence interval (C.I.) of level 1-$\alpha$ for $\theta$:  
Any **random** (depending on $X_1,\cdots,X_n$. Let $\alpha\in(0,1)$) interval $I$ whose boundaries do not depend on $\theta$ and such that  

$$
\rm I\!P_\theta[\theta \in I]\ge 1-\alpha,\forall \theta \in \Theta
$$  
  
We bulid an **error bar** around estimator. It is also worth noticing that $p$ ( or $\theta$ ) is a **deterministic** number, whereas $\bar R_n $ is a **r.v.** , $I$ is produced based on  $\bar R_n $.  
  
example (for Bernoulli, $R_i \in Ber(p)$):  

$$
\sqrt{n}\frac{\bar{R_n}-p}{\sqrt{p(1-p)}}\stackrel{(d)}{\longrightarrow} N(0,1)
$$

which is:

$$
\sqrt{n}({\bar{R_n}-p)}\stackrel{(d)}{\longrightarrow} N(0,\sigma^2)
$$  
  
By CDF:  

$$
\rm I\!P[|\bar R_n-p|\ge x] \approx 2(1-\phi(\frac{x\sqrt{n}}{\sqrt{p(1-p)}}))=\alpha
$$  
  
We can solve for x (use the notation of **Quantile**):  

$$
\frac{x\sqrt{n}}{\sqrt{p(1-p)}}=\phi^{-1}(1-\frac{\alpha}{2})=q_{\frac{\alpha}{2}}
$$
  
So we can get the interval:  

$$
\bar R_n \in[\bar R_n-\frac{q_{\frac{\alpha}{2}}\sqrt{p(1-p)}}{\sqrt{n}},\bar R_n+\frac{q_{\frac{\alpha}{2}}\sqrt{p(1-p)}}{\sqrt{n}}]
$$

But this is **not** a confidence interval (depends on p).  
##### Solution 1: Conservative Bound  

$$
p(1-p) \le \frac{1}{4}
$$  

##### Solution 2: Solving the (quadratic) equation for p  
We have the system of two inequalities in p:  

$$
\bar R_n-\frac{q_{\frac{\alpha}{2}}\sqrt{p(1-p)}}{\sqrt{n}}\le p \le \bar R_n+\frac{q_{\frac{\alpha}{2}}\sqrt{p(1-p)}}{\sqrt{n}}
$$

Each is a quadratic inequality in p of the form：  

$$
(p-\bar R_n)^2 \le \frac
{q_\frac{\alpha}{2}^2 p(1-p)}
{n}
$$

solve $p_1,p_2$ to get the interval $[p_1,p_2]$
##### Solution 3: Plug-in  
(by slutsky)  
#### The Delta Method  
Let $Z_n$ be a sequence of r.v.that satisfies  

$$
\sqrt{n}(Z_n-\theta)\xrightarrow[n\to \infty]{(d)} N(0,\sigma^2)
$$

Let $g:\rm I\!R \to \rm I\!R$ be continuously differentiable at the point $\theta$  
Then  

$$
\sqrt{n}(g(Z_n)-g(\theta))\xrightarrow[n\to \infty]{(d)} N(0,g^{'}(\theta)^2\sigma^2)
$$

### 5.Hypothesis testing  
#### Statistical formulation  
Consider a sample of $X_1,X_2,\cdots ,X_n$ of i.i.d.  r.v. and a statistical model $(E,\rm (I\!P_\theta)_{\theta \in \Theta})$. 
Let $\Theta _0$ and $\Theta _1$ be disjoint subsets of $\Theta$.  

Consider the two hypotheses:  

$$
H_0 : \theta \in \Theta _0
$$  

$$
H_1: \theta \in \Theta _1
$$  

$H_0$ is the **null hypothesis**, $H_1$ is the **alternative hypothesis**.  
#### Asymmetry in the hypothesis
$H_0$ and $ H_1$ **do not** play a symmetric role: the data is is only used to try to disprove $H_0$.  
In particular lack of evidence, does not mean that $H_0$ is true.  
A test is a statistic $\psi \in${ $0,1$ } such that:  
If $\psi =0$ ,$H_0$ is **not rejected**.  
If $\psi =1$ ,$H_0$ is **rejected**.  

#### Errors  
Type 1 error of a test (rejecting $H_0$ when it is actually true)  :  $\alpha _\psi$

Type 2 error of a test (not rejecting $H_0$ although $H_1$ is actually true)  
#### Level
A test $\psi$ has level $\alpha$ (error 1) if  

$$
\alpha _\psi (\theta) \le \alpha
$$

#### One-sided vs two-sided tests  
If $H_1：\theta \ne \theta _0$ : **two-sided test**  
If $H_1：\theta \gt \theta _0$ or $H_1：\theta \lt \theta _0$: **one-sided test**   
#### Example(Bernoulli)  
$$H_0: p\le0.33,\ H_1:p\ge0.33$$
Reject if $\hat p = \bar X_n \gt \lambda$  (to be chosen later)  

$$
max\ _{p\le0.33}\rm I\!P_\theta[\bar X_n \gt \lambda]\to \alpha\ (Error1)
$$  
  
By normalization:  

$$
\rm I\!P_\theta[\frac{\sqrt n(\bar X_n-p)}{\sqrt{p(1-p)}} \gt \frac{\sqrt n(\lambda-p)}{\sqrt{p(1-p)}}]\to \alpha
$$  
  
So the RHS: $q_\alpha$ or $q_{1-\alpha}$(less than)  
#### p-value  
Definition: the **smallest** (asymptotic) level $\alpha$  at which $\psi_\alpha$ rejects $H_0$  
Golden rule:  
$\alpha \ge p$, $H_0$ is rejected.$H_0$ is more likely to be rejected as $\alpha$ increases.  