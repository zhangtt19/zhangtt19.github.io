# 张天舒个人主页

中英双语静态个人网站，针对 GitHub Pages 制作，无需安装 Node.js、框架或数据库。

## 本地查看

直接用浏览器打开 `index.html` 即可。页面默认英文，右上角可切换中文。

## 发布到 GitHub Pages

1. 登录 `zhangtt19`，打开 https://github.com/new。
2. 新建仓库，名称必须为 `zhangtt19.github.io`，选择 **Public**，勾选 **Add a README file**。
3. 在仓库页面选择 **Add file → Upload files**，上传本文件夹里的文件。确保 `index.html` 直接在仓库根目录，不能多套一层文件夹。
4. 点击 **Commit changes**，保存到 `main` 分支。
5. 打开仓库的 **Settings → Pages**。
6. 在 **Build and deployment** 下，将 **Source** 设为 **Deploy from a branch**；选择 `main` 和 `/(root)`，点击 **Save**。
7. 等待 GitHub 的部署完成，再访问 https://zhangtt19.github.io/ 。在部署完成前，该网址可能返回 404。
8. 可在账号主页的 **Edit profile → Website** 中填入网站地址。

如果仓库已存在，请先查看原有文件，避免覆盖需要保留的内容。

## 文件说明

- `index.html`：全部页面内容，中英文分别用 `lang="en"` 和 `lang="zh-CN"` 标识。
- `style.css`：桌面、平板、手机及打印样式。
- `script.js`：语言切换和本机语言偏好保存。
- 当前使用姓名缩写 TZ，不包含个人照片。
- `favicon.svg`：浏览器标签图标。
- `.nojekyll`：关闭 Jekyll 处理；若网页上传未显示此隐藏文件，可在仓库中创建同名空文件。此网站本身不依赖 Jekyll 特性。

## 日后更新

打开 GitHub 仓库中的 `index.html`，点击编辑按钮，修改对应中英文段落并提交。GitHub Pages 会自动重新发布。更新项目时，请保留结果对应的条件，区分实际工程与课程模拟。

## 技术与隐私

页面没有外部脚本、统计追踪、表单或第三方字体。仅使用本机 localStorage 保存语言偏好；禁用存储或 JavaScript 时，英文正文仍可正常阅读。公开联系方式为简历中的学校邮箱和 GitHub 账号，未提供电话号码、微信、籍贯或完整原始简历下载。

## 参考文档

- GitHub Pages 快速入门：https://docs.github.com/en/pages/quickstart
- 配置发布来源：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
