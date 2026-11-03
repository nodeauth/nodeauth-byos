<div align="center">
  <img src="frontend/dist/logo.svg" width="96" alt="NodeAuth Logo" />
  <h1>NodeAuth</h1>


中文 | [English](README.md)

支持 Cloudflare Serverless 与 Docker 私有化部署的高安全、轻量级二步验证 (2FA/TOTP) 管理工具。

**专为数字资产 (Crypto) 玩家打造，追求极致的绝对安全。**


[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat&logo=cloudflare)](https://workers.cloudflare.com/)
[![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?logo=docker&logoColor=white)](https://hub.docker.com/r/nodeauth/nodeauth-worker)
[![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-181717?style=flat&logo=github)](https://github.com/nodeauth/nodeauth-worker/actions)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-red.svg)](https://www.gnu.org/licenses/agpl-3.0)

</div>


---

## 📖 项目部署

- [部署文档](https://wiki.nodeauth.io)
- [购买授权码](https://license.nextmatrix.app/byos)
- [付费代部署 ($9.99)](https://t.me/NodeAuthBot)

---

## 📖 项目展示

- [在线演示](https://demo.nodeauth.io)

<img height="222" src="https://github.com/user-attachments/assets/20ca3791-841b-4a89-bfe4-ffacfcc7ee9a" />

<img height="222" src="https://github.com/user-attachments/assets/632f5711-d6af-4c34-812a-1728d701ce27" />

---

## 📱 移动端 App

<table>
  <tr>
    <th align="left">平台 / 渠道</th>
    <th align="left" width="200">下载安装</th>
    <th align="left">详细说明</th>
  </tr>
  <tr>
    <td><b>iOS / iPadOS</b></td>
    <td><a href="https://apps.apple.com/cn/app/nodeauth/id6820337516"><img src="https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white" alt="Download on the App Store"></a></td>
    <td>适配 iPhone 与 iPad</td>
  </tr>
  <tr>
    <td><b>Android (Google Play)</b></td>
    <td><a href="https://play.google.com/store/apps/details?id=com.nextmatrix.nodeauth"><img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" alt="Get it on Google Play"></a></td>
    <td>Google Play 官方商店发布</td>
  </tr>
  <tr>
    <td><b>Android (Direct APK)</b></td>
    <td><a href="https://github.com/nextmatrixllc/nodeauth/releases/latest/download/NodeAuth-universal.apk"><img src="https://img.shields.io/badge/Direct_APK-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Download APK"></a></td>
    <td>全架构 Android 设备通用安装包</td>
  </tr>
</table>

---

## 🧩 浏览器插件

<table>
  <tr>
    <th align="left">浏览器</th>
    <th align="left" width="200">安装扩展</th>
    <th align="left">兼容说明</th>
  </tr>
  <tr>
    <td><b>Chrome Web Store</b></td>
    <td><a href="https://chromewebstore.google.com/detail/nodeauth/ejknfokfdojopelcbidgchnopeapnjgd"><img src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Chrome Web Store"></a></td>
    <td>兼容 Google Chrome、Brave、Arc、Vivaldi、Opera 等</td>
  </tr>
  <tr>
    <td><b>Microsoft Edge</b></td>
    <td><a href="https://microsoftedge.microsoft.com/addons/detail/nodeauth/bclpbakllopgjhelikbhccpjkgbmfpgd"><img src="https://custom-icon-badges.demolab.com/badge/Edge_Add--ons-0078D7?style=for-the-badge&logo=edge-white&logoColor=white" alt="Edge Add-ons"></a></td>
    <td>微软 Edge 官方扩展中心</td>
  </tr>
  <tr>
    <td><b>Mozilla Firefox</b></td>
    <td><a href="https://addons.mozilla.org/zh-CN/firefox/addon/nodeauth"><img src="https://img.shields.io/badge/Firefox_Add--ons-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Firefox Add-ons"></a></td>
    <td>火狐 Firefox 官方附加组件</td>
  </tr>
</table>

---

## 🌟 项目优势

不管是白嫖 Cloudflare 的免费额度，还是部署在自家的 NAS 或小主机上，NodeAuth 都能为你提供**最安全**、最便捷的 2FA 密钥管理体验。

### 🕊️ 真正的“全方位”部署 (Dual-Mode)
*   **Serverless 云端托管**：一键部署到 Cloudflare Workers，零服务器成本、零维护、全球加速。
*   **私有云极客**：支持 Docker 部署，数据锁在自家硬盘里，局域网断网也能用。

### 📱 像原生 App 一样好用 (PWA)
*   **沉浸式体验**：支持安装到电脑桌面或手机主屏幕，没有浏览器边框的干扰。
*   **断网也不怕**：得益于先进的离线缓存技术，即便在地下室或飞机上（无网络），它依然能秒开并为你生成精准的验证码。

### 🛡️ “拉闸式”安全护卫 (Health Shield)
*   我们内置了智能安检逻辑。如果程序检测到关键密钥丢失或配置不当，它会立即“拉闸”阻断访问，防止你的数据因环境不安全而暴露。

### 📦 丢不了的“后悔药” (Multi-channel Backup)
*   支持 Email、WebDAV、S3 云存储或 Telegram 机器人自动备份。即使手机丢了、系统重装了，甚至 Cloudflare 账号没了，你也能通过备份瞬间找回所有账号。

---

## 🛡 深度安全审计 (Security Auditing)

[**点击查看由 GitHub Actions 自动生成的安全审计报告**](https://github.com/nodeauth/nodeauth-worker/blob/security/README.md)

---

## 项目交流
[Telegram 群组](https://t.me/NodeauthGroup)

---

## 📄 开源协议
本项目基于 [GNU AGPL v3](LICENSE) 协议开源。作为一款涉及 2FA 安全与网络服务的软件，我们坚持维护开源社区的公平性：如果您在服务器上运行本项目的修改版本并向公众提供服务，您必须向用户开放您的源代码。

