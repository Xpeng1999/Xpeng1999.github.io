# Homepage template source

This homepage directly adapts [w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template) at commit `3e688b9cdb8928aa90ce2469b932cd4661723f97`.

- Upstream `index.html` is the basis of `_pages/about.html`. The original table structure, 800px desktop width, typography, publication cards, filters, author expansion and rotating project cloud are retained.
- Upstream `stylesheet.css` is retained with its warm accent colors replaced by the existing personal-site purple, `#660874`.
- Custom cursor rules and cursor images are removed; standard browser cursors are used.
- `assets/homepage/custom.css` adds Pets, empty project-image slots, animation controls and small-screen adaptations.
- `assets/homepage/custom.js` controls the sampled MundiSense demo animation and respects reduced-motion preferences.

Template sample names, papers and projects are replaced with Boyuan Peng's material. The template's demonstration script that overwrites authors and links is removed. The Keep Exploring footer is replaced by Pets and an attribution footer.

Experience is renamed Education, with official university emblems. Both degrees are in Electronic and Information Engineering, following the owner’s correction to the supplied CV. Project keywords reflect supported methods: multimodal LLMs/LoRA, diffusion models, robustness, explainable AI and scientific ML.

The page uses Jekyll front matter with `layout: null` and `permalink: /`. It replaces `_pages/about.md`; do not add a competing root `index.html` to the deployed repository. The local preview's `site/index.html` contains the same page without front matter.

MundiSense is added to the five existing projects. Its animation directly samples the project’s recorded demonstration; provenance is documented in `assets/homepage/MEDIA-SOURCES.md`. The remaining five representative images are intentionally empty pending final artwork. Unconfirmed cat details remain blank. Original source documents are not published.

Validation: browser checks at 1440px, 390px and 320px; category filtering, animation controls and reduced-motion preferences; no broken page images or JavaScript errors. A complete Jekyll site build still needs to run in the repository's build environment.
