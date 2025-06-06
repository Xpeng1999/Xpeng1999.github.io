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

<div style="margin-bottom: 40px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3 style="text-decoration: none; color: rgb(102, 8, 116);">
      Physical Embedding-Enhanced Conditional Diffusion Model for Aberration Correction in Microscopic Imaging
    </h3>
    <p>Boyuan Peng, Jiaju Chen, et al.</p>
    <p><em>In progress</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.8; text-align: justify;">
      Microscopic imaging quality is significantly affected by optical aberrations, leading to blurred cell boundaries and loss of internal structures, which hinders downstream tasks such as cell segmentation. Traditional hardware-based aberration correction is costly and requires specialized equipment, while CNN-based software solutions struggle to recover images affected by complex aberrations due to their reliance on local feature extraction. In this study, we propose a <strong>Physical Embedding-Enhanced Conditional Diffusion Model (PE-CDM)</strong>, which incorporates the point spread function (PSF) as an optical prior to guide the image restoration process. Unlike GANs, which suffer from instability and artifacts, the proposed method leverages a stepwise denoising process that effectively reconstructs clear images while preserving global structures and fine details. Experimental results demonstrate that PE-CDM outperforms Diffusion, GANs, and DFCAN in terms of PSNR and SSIM, particularly under high-aberration conditions. The integration of PSF as a physical constraint improves restoration accuracy, enhances model interpretability, and reduces dependence on large training datasets. This study highlights the potential of diffusion models for aberration correction in microscopic imaging, providing a cost-effective and adaptive solution for diverse experimental conditions.
    </p>
  </div>

  <!-- Single Image Display: Aberration Correction Process -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/conditional_diffusion_process.jpg" alt="Conditional Diffusion Model Aberration Correction Process" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Workflow of Conditional Diffusion Model (PE-CDM) for Aberration Correction
      </div>
    </div>
  </div>

  <!-- Single Image Display: Model Comparison Results -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
      <img src="https://Xpeng1999.github.io/images/bt474_comparison.png" alt="Aberration Correction Results Comparison for BT474 Cells" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Comparison of Aberration Correction Results for BT474 Cells Using Different Models
      </div>
    </div>
  </div>
</div>


<div style="margin-bottom: 40px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3 style="text-decoration: none; color: rgb(102, 8, 116);">
      Dual-Modality Computational Ophthalmic Imaging with Deep Learning and Coaxial Optical Design
    </h3>
    <p><strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Jiaju Chen*, Yiwei Zhang*, Cuiyi Peng et al.</p>
    <p><em>In progress</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.8; text-align: justify;">
      The growing burden of myopia and retinal diseases necessitates more accessible and efficient eye screening solutions. This study presents a compact, dual-function optical device that integrates fundus photography and refractive error detection into a unified platform. The system features a coaxial optical design using dichroic mirrors to separate wavelength-dependent imaging paths, enabling simultaneous alignment of fundus and refraction modules. A Dense-U-Net-based algorithm with customized loss functions is employed for accurate pupil segmentation, facilitating automated alignment and focusing. Experimental evaluations demonstrate the system's capability to achieve high-precision pupil localization (EDE = 2.8 px, mIoU = 0.931) and reliable refractive estimation with a mean absolute error below 5%. Despite limitations due to commercial lens components, the proposed framework offers a promising solution for rapid, intelligent, and scalable ophthalmic screening, particularly suitable for community health settings.
    </p>
      <div style="display: flex; gap: 12px; margin-top: 20px;">
        <a href="https://arxiv.org/pdf/2504.18549" style="text-decoration: none; padding: 8px 16px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
  </div>

  <!-- 单张图片展示 -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper2_figure1a.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Construction of fundus imaging
      </div>
    </div>
      <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper2_figure1b.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Construction of Refraction optical paths
      </div>
    </div>
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
      <img src="https://Xpeng1999.github.io/images/funds_image.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Funds image captured by two-in-one optical system
      </div>
    </div>
  </div>

  <!-- 两张图片并排展示 -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="display: flex; justify-content: center; gap: 20px;">
      <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
        <img src="https://Xpeng1999.github.io/images/paper2_image2.png" alt="Ocular Imaging System Setup" style="width: 100%; max-width: 300px; height: auto;">
      </div>
      <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
        <img src="https://Xpeng1999.github.io/images/paper2_image3.png" alt="Experimental Results of Fundus Imaging" style="width: 100%; max-width: 300px; height: auto;">
      </div>
    </div>
    <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
      Device picture of optical system
    </div>
  </div>
</div>

<div style="margin-bottom: 40px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="files/Convolutional neural networks for rapid diagnosis and lesion detection of pediatric mycoplasma pneumoniae pneumonia using chest X-rays.pdf" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
      Diagnosis of Pediatric Pneumonia Using Explainable Convolutional Neural Networks (CNN)
    </a></h3>
    <p>Jiaming Deng*, Jiagi Yang*, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng*</span></strong>, Dongmei Yu*, et al.</p>
    <p><em>Preprint (2024)</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.8; text-align: justify;">
      Mycoplasma pneumoniae pneumonia (MPP) presents significant diagnostic challenges in pediatric healthcare, particularly in regions like China that with large population density. To ease the burden on radiologists, we utilized convolutional neural networks (CNN), structured as state-of-the-art computational efficient architecture, for faster MPP detection and pediatric pneumonia diagnosis. Our model, trained on 3,345 chest X-ray (CXR) images, including 833 MPP cases, distinguishes MPP from viral, bacterial, and normal cases. The model achieved an accuracy of 88.20% and an AUROC of 0.9218 across all classes, with a specific accuracy of 97.64% for MPP. We also integrated explainability techniques to help radiologists localize lesions in CXR images, with extra consideration on the deployment targeted for mobile devices.
    </p>
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <a href="files/Convolutional neural networks for rapid diagnosis and lesion detection of pediatric mycoplasma pneumoniae pneumonia using chest X-rays.pdf" style="text-decoration: none; padding: 8px 16px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
    </div>
  </div>

  <!-- 图片展示 -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper3_image1.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        The feature visualization results
      </div>
    </div>

    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px; margin-bottom: 20px;">
      <img src="https://Xpeng1999.github.io/images/paper3_image2.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Comparison of Score-CAM results and radiologists' annotations. The first and third rows show the CXR annotations for MPP lesions, while the second and fourth rows display the corresponding Score-CAM results.
      </div>
    </div>

    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
      <img src="https://Xpeng1999.github.io/images/toc2.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        PneumoniaApp demo user interface example
      </div>
    </div>
  </div>
</div>

<div style="margin-bottom: 40px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
  <div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
    <h3><a href="https://doi.org/10.1007/s10812-021-01220-5" target="_blank" style="text-decoration: none; color: rgb(102, 8, 116);">
      Intelligent proximate analysis of coal based on near-infrared spectroscopy
    </a></h3>
    <p>Weinan Liu, <strong><span style="color: rgb(102, 8, 116);">Boyuan Peng</span></strong>, Xiaoyu Liu, et al.</p>
    <p><em>Journal of Applied Spectroscopy (2021)</em></p>
    <p style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.8; text-align: justify;">
      The proximate analysis of coal, which aims to estimate the moisture, volatile matter, and caloric value, is of great importance for coal processing and evaluation. However, traditional methods for proximate analysis in the laboratory are not only time-consuming and labor-intensive but also expensive. The near-infrared spectroscopy (NIRS) technique provides a rapid and nondestructive method for coal proximate analysis. We exploit two regression methods, random forest (RF) and extreme learning machine (ELM), to model the relationships among spectral data and proximate analysis parameters. In addition, given the poor stability and robustness caused by the random selection of parameters in ELM, we employ the particle swarm optimization algorithm (PSO) to optimize the structure of ELM (PSO–ELM). A total of 384 coal samples from Inner Mongolia are collected for model training and validation. The experimental results show that the proposed PSO–ELM algorithm achieves the best performance in terms of accuracy and efficiency, which indicates that NIRS combined with PSO–ELM has significant potential for accurate and rapid proximate analysis.
    </p>
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <a href="https://Xpeng1999.github.io/files/paper2.pdf" style="text-decoration: none; padding: 8px 16px; background-color: rgb(102, 8, 116); color: white; border-radius: 4px;">PDF</a>
    </div>
  </div>

  <!-- 图片展示 -->
  <div style="margin-top: 20px; text-align: center;">
    <div style="background: #f9f9f9; border-radius: 8px; padding: 10px;">
      <img src="https://Xpeng1999.github.io/images/paper4_image1.png" alt="Publication Image" style="width: 100%; max-width: 500px; height: auto;">
      <div style="margin-top: 12px; font-family: 'Times New Roman', Times, serif; font-size: 14px; color: #555;">
        Dataset perspective: a: spectrum of coal samples (features); b: ranking parameters (labels)
      </div>
    </div>
  </div>
</div>
