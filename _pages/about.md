---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a master's student of Biomedical Engineering at Tsinghua University, advised by 
<a href="https://scholar.google.com/citations?user=yD3IOXkAAAAJ&hl=en&oi=ao" style="color: rgb(102, 8, 116);">Prof.Peiwu Qin</a>. 
Prior to that, I completed my bachelor’s in Electronic and Information Engineering at China University of Mining and Technology, where I worked with 
<a href="https://faculty.cumt.edu.cn/LM123456789101112/zh_CN/index/167772/list/" style="color: rgb(102, 8, 116);">Prof.Meng Lei</a>.

My long-term academic goal is capitalizing on combing optics and computing to develop advanced imaging technologies, such as adaptive optics, super-resolution microscopy, computational image reconstruction and machine learning-based denoising. They can not only mitigate noise of biological images, but also accelerate the processes of acquiring results; thus it can help researchers get high-resolution tissue or cell images without time-consuming processes.

## News

<ul style="list-style-type: none; padding-left: 0;">
  <li style="margin-bottom: 15px;">
    <strong>Sep 9, 2024</strong> 
    <span style="margin-left: 20px;">Our paper was published online 🥳</span>
  </li>
</ul>

## Projects
<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://doi.org/10.1016/j.csbj.2024.09.002" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
    Practical guidelines for cell segmentation models under optical aberrations in microscopy
    </a></h3>
    <p><strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Jiaju Chen*, P. Bilha Githinji*, Ijaz Gul, et al.</p>
    <p><em>Computational and Structural Biotechnology Journal (2024)</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 14px; line-height: 1.5;">
    Cell segmentation is essential in biomedical research for analyzing cellular morphology and behavior. Deep learning methods, particularly convolutional neural networks (CNNs), have revolutionized cell segmentation by extracting intricate features from images. However, the robustness of these methods under microscope optical aberrations remains a critical challenge. This study evaluates cell image segmentation models under optical aberrations from fluorescence and bright field microscopy. By simulating different types of aberrations, including astigmatism, coma, spherical aberration, trefoil, and mixed aberrations, we conduct a thorough evaluation of various cell instance segmentation models using the DynamicNuclearNet (DNN) and LIVECell datasets, representing fluorescence and bright field microscopy cell datasets, respectively. We train and test several segmentation models, including the Otsu threshold method and Mask R-CNN with different network heads (FPN, C3) and backbones (ResNet, VGG, Swin Transformer), under aberrated conditions. Additionally, we provide usage recommendations for the Cellpose 2.0 Toolbox on complex cell degradation images. The results indicate that the combination of FPN and SwinS demonstrates superior robustness in handling simple cell images affected by minor aberrations. In contrast, Cellpose 2.0 proves effective for complex cell images under similar conditions. Furthermore, we innovatively propose the Point Spread Function Image Label Classification Model (PLCM). This model can quickly and accurately identify aberration types and amplitudes from PSF images, assisting researchers without optical training. Through PLCM, researchers can better apply our proposed cell segmentation guidelines. This study aims to provide guidance for the effective utilization of cell segmentation models in the presence of minor optical aberrations and pave the way for future research directions.</p>
    <div style="display: flex; gap: 10px;">
      <a href="https://Xpeng1999.github.io/files/paper1.pdf" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
      <a href="https://github.com/Xpeng1999/Cell-Segmentation-Robustness" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Code</a>
    </div>
<div style="margin-bottom: 40px; text-align: center;">
  <div style="display: inline-block; text-align: center;">
    <img src="https://Xpeng1999.github.io/images/paper1_image1.png" alt="Publication Image" style="width: 700px; margin-top: 20px; height: auto;">
    <div style="margin-top: 10px; font-family: 'Times New Roman', Times, serif; font-size: 14px;">
      The process diagram for generating an aberrated cell image dataset by inputting microscopic parameters and Zernike polynomials information
    </div>
  </div>

  <div style="display: inline-block; text-align: center; margin-top: 40px;">
    <img src="https://Xpeng1999.github.io/images/paper1_image2.png" alt="Publication Image" style="width: 700px; margin-top: 20px; height: auto;">
    <div style="margin-top: 10px; font-family: 'Times New Roman', Times, serif; font-size: 14px;">
      Cellpose2.0 toolbox robustness evaluation of mixed aberrations, taking 4-8 orders aberration as an example.
    </div>
  </div>

  <div style="display: inline-block; text-align: center; margin-top: 40px;">
    <img src="https://Xpeng1999.github.io/images/paper1_image3.png" alt="Publication Image" style="width: 700px; margin-top: 20px; height: auto;">
    <div style="margin-top: 10px; font-family: 'Times New Roman', Times, serif; font-size: 14px;">
      The architecture of PLCM
    </div>
  </div>
</div>

<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3 style="text-decoration: none; color: rgb(102, 8, 116);">
      Multimodal Myopia Screening: An Integrated Device for Fundus Imaging and Refractive Error Detection
    </h3>
    <p>Jiaju Chen*, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Yiwei Zhang*, et al.</p>
    <p><em>In progress</em></p>
    <p><em>摘要：本项目正在开发一种集成设备，能够进行眼底成像和屈光不正检测，旨在为近视筛查提供更高效的解决方案。</em></p>
    <div style="display: flex; gap: 10px;">
      <a href="#" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
      <a href="#" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Code</a>
    </div>
  </div>
  <img src="https://Xpeng1999.github.io/images/toc4.png" alt="Project Image" style="width: 300px; margin-top: 20px; height: auto;">
</div>

<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://arxiv.org/abs/2404.00549" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
    Diagnosis of Pediatric Pneumonia Using Explainable Convolutional Neural Networks (CNN)
    </a></h3>
    <p>Jiaming Deng*, Jiagi Yang*, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Zhiwei Ye, et al.</p>
    <p><em>Arxiv preprint (2024)</em></p>
    <p><em>摘要：该研究利用可解释的卷积神经网络（CNN）诊断儿童肺炎，旨在提升诊断的准确性和可解释性。</em></p>
    <div style="display: flex; gap: 10px;">
      <a href="https://arxiv.org/abs/2404.00549" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Preprint</a>
      <a href="#" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Code</a>
    </div>
  </div>
  <img src="https://Xpeng1999.github.io/images/toc2.png" alt="Project Image" style="width: 300px; margin-top: 20px; height: auto;">
</div>

<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://link.springer.com/article/10.1007/s10812-021-01220-5" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
    Intelligent proximate analysis of coal based on near-infrared spectroscopy
    </a></h3>
    <p>Weinan Liu, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng</span></strong>, Xiaoyu Liu, et al.</p>
    <p><em>Journal of Applied Spectroscopy (2021)</em></p>
    <p><em>摘要：本研究基于近红外光谱技术对煤炭的智能近似分析，旨在提高煤炭质量评估的效率和准确性。</em></p>
    <div style="display: flex; gap: 10px;">
      <a href="https://link.springer.com/article/10.1007/s10812-021-01220-5" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Publication</a>
      <a href="#" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Code</a>
    </div>
  </div>
  <img src="https://Xpeng1999.github.io/images/toc3.png" alt="Project Image" style="width: 300px; margin-top: 20px; height: auto;">
</div>