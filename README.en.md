<p align="center">
  <img src="assets/header.svg" alt="Qian Sen 钱森 · Computer Science at Hohai University" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/qiansen0809-droid/qiansen0809-droid/blob/main/README.md">中文</a> · <a href="https://github.com/qiansen0809-droid/qiansen0809-droid/blob/main/README.en.md"><b>English</b></a>
  &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="#my-journey">My journey</a> · <a href="#research-focus">Research</a> · <a href="#selected-projects">Projects</a> · <a href="#contact">Contact</a>
</p>

## About me

Hi, I'm **Qian Sen (钱森)**, an undergraduate studying Computer Science and Technology at **Hohai University**.

My current interests center on **efficient LLM inference**, particularly KV cache compression, head-wise budget allocation, and cache reuse across tasks. I also work on projects in drone perception, student behavior modeling, and audio-based identity recognition, turning concrete questions into code and experiments.

## My journey

A major setback in China's national college entrance examination kept me from attending the university I had dreamed of. But I did not give up on myself, and I did not want a single exam to define me. I chose to keep learning and to build myself up, one step at a time.

In my first year at Hohai University, I ranked first in the Internet of Things Engineering (IoT) program. Drawn by a genuine love of computer science, I transferred to Computer Science and Technology to study what I truly wanted to learn.

During my second year, I took courses normally spread across the first two years, earning a **GPA rank of 2/210 for the academic year and 3/210 cumulatively**, with the highest academic standing among students who had transferred into the program. It was not until my third year that I finally finished all the additional courses required by the transfer and had a little room to breathe.

In the summer between my second and third years, my interest in research led me to join the university's Edge Intelligence Research Group. I spent the first week reading surveys and foundational papers, gradually building a basic understanding of large language models. Following my curiosity, I chose **KV cache optimization** as the direction I wanted to explore further.

Over the following month, I read more than sixty papers spanning eviction, merging, quantization, and budget allocation, covering key work in the field since 2024. I studied about ten of these in greater depth. During that month of building foundations, I read from six in the morning until ten at night, devoting almost all my time to learning.

> I may not be a student with an exceptional starting point, but I believe hard work can make up for what I lack, and that steady, honest effort will bear fruit. I hope that, one day, my persistence will help me find my own place in computer science.

## Research focus

> **What information should we keep when the cache budget is limited?**

`KV Cache compression` &nbsp; `Head-wise allocation` &nbsp; `Efficient inference`

I explore this question through paper reading, reproduction of representative methods, and experimental analysis. Work on allocation strategies and cache reuse is ongoing.

## Selected projects

<table>
<tr>
<td width="50%" valign="top">
<h3>01 / KV Cache Research</h3>
<p><b>Long-context inference · Cache allocation</b></p>
<p>Learning, reproduction, and experimental exploration based on LU-KV / kvpress, with a focus on allocating cache resources across attention heads.</p>
<p><code>LLM inference</code> <code>KV Cache</code></p>
<p><a href="https://github.com/qiansen0809-droid/CausalDuel-KV">Explore the repository ↗</a> &nbsp; <sub>Research fork · Ongoing</sub></p>
</td>
<td width="50%" valign="top">
<h3>02 / BEV Drone Project</h3>
<p><b>Drone simulation · Bird's-eye-view maps</b></p>
<p>RGB and depth capture in AirSim, geometric projection into BEV maps, and exploratory CLIP image/text encoding and semantic matching.</p>
<p><code>AirSim</code> <code>OpenCV</code> <code>CLIP</code></p>
<p><a href="https://github.com/qiansen0809-droid/BEV_Drone_Project">Explore the project ↗</a> &nbsp; <sub>Research prototype</sub></p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>03 / StudentBehavior</h3>
<p><b>Campus data · Employment-risk prediction</b></p>
<p>A multi-source pipeline for feature engineering, model comparison, and ensemble learning, with K-Means clustering for behavior profiles.</p>
<p><code>scikit-learn</code> <code>Ensemble learning</code></p>
<p><a href="https://github.com/qiansen0809-droid/StudentBehavior">Explore the project ↗</a> &nbsp; <sub>Applied machine learning</sub></p>
</td>
<td width="50%" valign="top">
<h3>04 / EAR Recognition</h3>
<p><b>Acoustic representations · Identity recognition</b></p>
<p>Adapting an existing x-vector pipeline to EAR audio, using MFCCs, a TDNN, statistical pooling, and a PLDA scoring backend.</p>
<p><code>PyTorch</code> <code>x-vector</code> <code>PLDA</code></p>
<p><a href="https://github.com/qiansen0809-droid/EAR-Recognition-x-vectors">Explore the project ↗</a> &nbsp; <sub>Adaptation of existing work</sub></p>
</td>
</tr>
</table>

<sub>These are research activities and projects I participate in. Reproduction, adaptation, and original contributions are distinguished in the respective repositories.</sub>

## Toolbox

| Languages | Models & data | Simulation & development |
| :--- | :--- | :--- |
| Python · C++ · Rust | PyTorch · scikit-learn | AirSim · OpenCV · Git |

## Contact

**GitHub** · [@qiansen0809-droid](https://github.com/qiansen0809-droid)  
**Email** · [seanchian@foxmail.com](mailto:seanchian@foxmail.com)

---

<p align="center"><sub>Stay curious. Keep building.</sub></p>
