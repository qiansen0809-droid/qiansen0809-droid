<p align="center">
  <img src="assets/header.svg" alt="Qiansen 钱森 · Computer Science at Hohai University" width="100%" />
</p>

<p align="center">
  <a href="README.md"><b>中文</b></a> · <a href="README.en.md">English</a>
  &nbsp;&nbsp;/&nbsp;&nbsp;
  <a href="#research-focus">Research</a> · <a href="#selected-projects">Projects</a> · <a href="#beyond-code">Beyond code</a>
</p>

## About me

你好，我是 **钱森（Qiansen）**，河海大学计算机科学与技术专业本科生。

目前关注 **大模型推理优化**，重点探索 KV Cache 压缩、注意力头预算分配与多任务缓存复用。也参与无人机环境感知、学生行为建模与音频身份识别项目，喜欢从具体问题出发，把想法落实到代码与实验中。

## Research focus

> **如何在有限的缓存预算下，保留真正重要的信息？**

`KV Cache compression` &nbsp; `Head-wise allocation` &nbsp; `Efficient inference`

围绕这一问题，开展相关文献阅读、代表性方法复现与实验分析，探索预算分配和缓存复用的改进思路。研究持续进行中。

## Selected projects

<table>
<tr>
<td width="50%" valign="top">
<h3>01 / KV Cache Research</h3>
<p><b>长上下文推理 · 缓存预算分配</b></p>
<p>基于 LU-KV / kvpress 等已有工作开展方法学习、复现与实验探索，关注注意力头间的缓存资源分配。</p>
<p><code>LLM inference</code> <code>KV Cache</code></p>
<p><a href="https://github.com/qiansen0809-droid/CausalDuel-KV">查看研究仓库 ↗</a> &nbsp; <sub>Research fork · 研究中</sub></p>
</td>
<td width="50%" valign="top">
<h3>02 / BEV Drone Project</h3>
<p><b>无人机仿真 · 鸟瞰环境表示</b></p>
<p>基于 AirSim 采集 RGB 与深度信息，通过几何投影生成 BEV 地图，并探索 CLIP 图文编码与语义匹配。</p>
<p><code>AirSim</code> <code>OpenCV</code> <code>CLIP</code></p>
<p><a href="https://github.com/qiansen0809-droid/BEV_Drone_Project">查看项目 ↗</a> &nbsp; <sub>Prototype · 原型探索</sub></p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<h3>03 / StudentBehavior</h3>
<p><b>多源校园数据 · 就业风险预测</b></p>
<p>整合多源行为数据，构建特征工程、模型比较与集成学习流程，结合 K-Means 聚类分析学生行为画像。</p>
<p><code>scikit-learn</code> <code>Ensemble learning</code></p>
<p><a href="https://github.com/qiansen0809-droid/StudentBehavior">查看项目 ↗</a> &nbsp; <sub>Applied machine learning</sub></p>
</td>
<td width="50%" valign="top">
<h3>04 / EAR Recognition</h3>
<p><b>深度声学表征 · 音频身份识别</b></p>
<p>适配 EAR 音频数据，沿用 MFCC、TDNN 与统计池化提取 x-vector，结合 PLDA 探索身份匹配与评分。</p>
<p><code>PyTorch</code> <code>x-vector</code> <code>PLDA</code></p>
<p><a href="https://github.com/qiansen0809-droid/EAR-Recognition-x-vectors">查看项目 ↗</a> &nbsp; <sub>Adaptation of existing work</sub></p>
</td>
</tr>
</table>

<sub>这里展示的是我的研究实践与参与项目；复现、适配和原创贡献分别说明，具体实现范围以各仓库文档为准。</sub>

## Toolbox

| 编程 | 模型与数据 | 仿真与开发 |
| :--- | :--- | :--- |
| Python · C++ · Rust | PyTorch · scikit-learn | AirSim · OpenCV · Git |

## Beyond code

代码之外，也喜欢王家卫的电影、石黑一雄的文字，以及 IU 的音乐。

---

<p align="center"><sub>Stay curious. Keep building.</sub></p>
