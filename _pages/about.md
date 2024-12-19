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
<div style="margin-bottom: 40px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://doi.org/10.1016/j.csbj.2024.09.002" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
      Practical guidelines for cell segmentation models under optical aberrations in microscopy
    </a></h3>
    <p><strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Jiaju Chen*, P. Bilha Githinji*, Ijaz Gul, et al.</p>
    <p><em>Computational and Structural Biotechnology Journal (2024)</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.8; text-align: justify;">
      Cell segmentation is essential in biomedical research for analyzing cellular morphology and behavior. Deep learning methods, particularly convolutional neural networks (CNNs), have revolutionized cell segmentation by extracting intricate features from images. However, the robustness of these methods under microscope optical aberrations remains a critical challenge. This study evaluates cell image segmentation models under optical aberrations from fluorescence and bright field microscopy. By simulating different types of aberrations, including astigmatism, coma, spherical aberration, trefoil, and mixed aberrations, we conduct a thorough evaluation of various cell instance segmentation models using the DynamicNuclearNet (DNN) and LIVECell datasets, representing fluorescence and bright field microscopy cell datasets, respectively. We train and test several segmentation models, including the Otsu threshold method and Mask R-CNN with different network heads (FPN, C3) and backbones (ResNet, VGG, Swin Transformer), under aberrated conditions. Additionally, we provide usage recommendations for the Cellpose 2.0 Toolbox on complex cell degradation images. The results indicate that the combination of FPN and SwinS demonstrates superior robustness in handling simple cell images affected by minor aberrations. In contrast, Cellpose 2.0 proves effective for complex cell images under similar conditions. Furthermore, we innovatively propose the Point Spread Function Image Label Classification Model (PLCM). This model can quickly and accurately identify aberration types and amplitudes from PSF images, assisting researchers without optical training. Through PLCM, researchers can better apply our proposed cell segmentation guidelines. This study aims to provide guidance for the effective utilization of cell segmentation models in the presence of minor optical aberrations and pave the way for future research directions.
    </p>
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <a href="https://Xpeng1999.github.io/files/paper1.pdf" style="text-decoration: none; padding: 8px 16px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
      <a href="https://github.com/Xpeng1999/Cell-Segmentation-Robustness" style="text-decoration: none; padding: 8px 16px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">Code</a>
    </div>
  </div>

  <!-- 图片展示 -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper1_image1.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        The process diagram for generating an aberrated cell image dataset by inputting microscopic parameters and Zernike polynomials information.
      </div>
    </div>

    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper1_image2.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Cellpose2.0 toolbox robustness evaluation of mixed aberrations, taking 4-8 orders aberration as an example.
      </div>
    </div>

    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
      <img src="https://Xpeng1999.github.io/images/paper1_image3.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        The architecture of PLCM.
      </div>
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
   <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5;">
   This project addresses the inefficiency of using separate devices for fundus imaging and refractive measurements. By redesigning the optical system with components like dichroic mirrors, we integrated these two functions into a single device. The shared optical path enables simultaneous retinal imaging and refractive index measurement, streamlining the examination process. Additionally, the system includes an automatic focusing mechanism that adjusts based on refractive data, enhancing ease of use. This integrated approach simplifies the workflow and reduces equipment requirements, making it more practical for clinical applications.</em></p>
    </div>

<!-- 插入静音视频 -->
<div style="text-align: center; margin-bottom: 40px;">
  <video width="600" controls muted style="margin-top: 20px;">
    <source src="https://Xpeng1999.github.io/images/paper2_video1.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div style="margin-top: 10px; font-family: 'Times New Roman', Times, serif; font-size: 14px;">
    Demonstration video: Using two-in-one optical system to measure diopter (Muted)
  </div>
</div>

<div style="text-align: center; margin-bottom: 40px;">
  <img src="https://Xpeng1999.github.io/images/paper2_image1.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
  <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
    Structure of retina fundus imaging and ocular refractive index two-in-one optical system
  </div>
</div>
<div style="text-align: center; margin-bottom: 40px;">
  <img src="https://Xpeng1999.github.io/images/funds_image.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
  <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
    Funds image captured by two-in-one optical system
  </div>
</div>

<!-- 两张图片并排显示，共用一个文字说明 -->
<div style="text-align: center; margin-bottom: 40px;">
  <!-- 图片容器 -->
  <div style="display: flex; justify-content: center; gap: 20px;">
    <!-- 第一张图片 -->
    <img src="https://Xpeng1999.github.io/images/paper2_image2.png" alt="Ocular Imaging System Setup" style="width: 300px; height: auto;">

    <!-- 第二张图片 -->
    <img src="https://Xpeng1999.github.io/images/paper2_image3.png" alt="Experimental Results of Fundus Imaging" style="width: 300px; height: auto;">
  </div>
  <!-- 文字说明 -->
  <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
    Ocular imaging system setup and experimental results of fundus imaging
  </div>
</div>

<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="files/Convolutional neural networks for rapid diagnosis and lesion detection of pediatric mycoplasma pneumoniae pneumonia using chest X-rays.pdf" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
    Diagnosis of Pediatric Pneumonia Using Explainable Convolutional Neural Networks (CNN)
    </a></h3>
    <p>Jiaming Deng*, Jiagi Yang*, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Dongmei Yu*, et al.</p>
    <p><em>Preprint (2024)</em></p>
   <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5;">
   Mycoplasma pneumoniae pneumonia (MPP) presents significant diagnostic challenges in pediatric healthcare, particularly in regions like China that with large population density. To ease the burden on radiologists, we utilized convolutional neural networks (CNN), structured as state-of-the-art computational efficient architecture, for faster MPP detection and pediatric pneumonia diagnosis. Our model, trained on 3,345 chest X-ray (CXR) images, including 833 MPP cases, distinguishes MPP from viral, bacterial, and normal cases. The model achieved an accuracy of 88.20% and an AUROC of 0.9218 across all classes, with a specific accuracy of 97.64% for MPP. We also integrated explainability techniques to help radiologists localize lesions in CXR images, with extra consideration on the deployment targeted for mobile devices.</p>
    <div style="display: flex; gap: 10px;">
      <a href="files/Convolutional neural networks for rapid diagnosis and lesion detection of pediatric mycoplasma pneumoniae pneumonia using chest X-rays.pdf" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
    </div>
<div style="margin-bottom: 40px; text-align: center;">
  <div style="display: inline-block; text-align: center;">
    <img src="https://Xpeng1999.github.io/images/paper3_image1.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
    <div style="margin-top: 14px; font-family: 'Times New Roman', Times, serif;">
      The feature visualization results
    </div>
  </div>

  <div style="display: inline-block; text-align: center; margin-top: 40px;">
    <img src="https://Xpeng1999.github.io/images/paper3_image2.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
    <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
      Comparison of Score-CAM results and radiologists' annotations. The first and third rows show the CXR annotations for MPP lesions, while the second and fourth rows display the corresponding Score-CAM results.
    </div>
  </div>

  <div style="display: inline-block; text-align: center; margin-top: 40px;">
    <img src="https://Xpeng1999.github.io/images/toc2.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
    <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
      PneumoniaApp demo user interface example
    </div>
  </div>
</div>

<div style="margin-bottom: 40px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://doi.org/10.1007/s10812-021-01220-5" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
    Intelligent proximate analysis of coal based on near-infrared spectroscopy
    </a></h3>
    <p>Weinan Liu, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng</span></strong>, Xiaoyu Liu, et al.</p>
    <p><em>Journal of Applied Spectroscopy (2021)</em></p>
   <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5;">
   The proximate analysis of coal, which aims to estimate the moisture, volatile matter, and caloric value, is of great importance for coal processing and evaluation. However, traditional methods for proximate analysis in the laboratory are not only time-consuming and labor-intensive but also expensive. The near-infrared spectroscopy (NIRS) technique provides a rapid and nondestructive method for coal proximate analysis. We exploit two regression methods, random forest (RF) and extreme learning machine (ELM), to model the relationships among spectral data and proximate analysis parameters. In addition, given the poor stability and robustness caused by the random selection of parameters in ELM, we employ the particle swarm optimization algorithm (PSO) to optimize the structure of ELM (PSO–ELM). A total of 384 coal samples from Inner Mongolia are collected for model training and validation. The experimental results show that the proposed PSO–ELM algorithm achieves the best performance in terms of accuracy and efﬁciency, which indicates that NIRS combined with PSO–ELM has signiﬁcant potential for accurate and rapid proximate analysis.</p>
    <div style="display: flex; gap: 10px;">
      <a href="https://Xpeng1999.github.io/files/paper2.pdf" style="text-decoration: none; padding: 6px 12px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
    </div>
  <div style="display: inline-block; text-align: center; margin-top: 40px;">
    <img src="https://Xpeng1999.github.io/images/paper4_image1.png" alt="Publication Image" style="width: 500px; margin-top: 20px; height: auto;">
    <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif;">
      Dataset perspective: a: spectrum of coal samples (features); b: ranking parameters (labels)
    </div>
  </div>