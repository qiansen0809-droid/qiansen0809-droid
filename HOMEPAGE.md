# Qian Sen · Academic Homepage

This repository contains both the GitHub profile README and a separate bilingual academic website.
The website is in `docs/`. Existing profile READMEs and `assets/header.svg` remain unchanged.

## Enable GitHub Pages once

1. Open https://github.com/qiansen0809-droid/qiansen0809-droid/settings/pages while signed in as the repository owner.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to **main** and the folder to **/docs**, then click **Save**.
4. Wait for the Pages build to finish. Use **Visit site** on the settings page to confirm publication.

The website URL after enabling Pages is:

https://qiansen0809-droid.github.io/qiansen0809-droid/

The default language is English. Use the top-right button for Chinese. A direct Chinese link is:

https://qiansen0809-droid.github.io/qiansen0809-droid/?lang=zh

Uploading source files alone does not enable Pages. The website is not considered live until Pages is enabled and its deployment succeeds.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `docs/index.html`: English and Chinese biography, research, four projects, personal journey, education, and contact information.
- `docs/assets/style.css`: responsive sidebar layout, typography, mobile and print styles.
- `docs/assets/site.js`: language toggle, page metadata, navigation highlight, and footer year.
- `docs/assets/portrait.avif`: the owner-provided photograph, proportionally resized to 480 x 640 and compressed for the web. No face retouching or scene generation was performed. Original camera metadata is not retained.
- `docs/assets/favicon.svg`: small Q favicon.
- `docs/.nojekyll`: serves the static website without a Jekyll build.

## Editing and preview

Edit the corresponding English and Chinese `data-lang` blocks in `docs/index.html`. No framework, package installation, external fonts, or build step is required.

For a local preview, open `docs/index.html`, or run `python -m http.server 8000 --directory docs` and visit http://localhost:8000.

The layout and language toggle were checked with an offline Chromium DOM render at widths 360, 390, 700, 768, 1024, and 1440 pixels. No horizontal overflow or JavaScript errors were found in those checks. These checks are not a live Pages deployment test.

This is an independently written static site using an academic sidebar layout as visual inspiration. It does not include other researchers' biographies, publications, or photographs. Project claims and the personal journey are based on the owner's existing bilingual profile.

## 中文说明

网站源码位于 `docs/`，原有 GitHub 资料页没有删除。只需在本仓库 Settings → Pages 中选择 Deploy from a branch、main、/docs 并保存，即可启动发布。

网站默认英文，点击右上角“中文”可切换。个人照片已等比例缩放与压缩，没有修饰人脸。主页保留了四个项目、个人经历、GitHub 与邮箱链接，不添加未经确认的论文成果。
