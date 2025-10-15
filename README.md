# 🚀 CD Pipeline Project
<div align="center">

![Github-Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SSH](https://img.shields.io/badge/SSH-000000?style=for-the-badge&logo=ssh&logoColor=white)

Continuous Deployment Pipeline for Node.js Applications
</div>

## 🎯 Project Overview

This project implements a Continuous Deployment (CD) pipeline using GitHub Actions to automatically deploy Node.js applications to a remote server. Every push to the main branch triggers an automated deployment process.

## 🛠 Prerequisites

Before using this CD pipeline, ensure you have:

    Remote Server with:

        Node.js and npm installed

        Git installed

        SSH access configured

    GitHub Repository with:

        Write access to configure Actions

        SSH credentials stored in Secrets

## 🚀 Setup Instructions
1. Repository Setup

Clone your repository on the server:
```bash
cd /srv
git clone your-repo-url testSSH
cd testSSH
npm install
```
2. GitHub Secrets Configuration

Go to your GitHub repository → Settings → Secrets and variables → Actions and add these secrets:
| Secret Name     |	Description	                       | Example
| :--- | :--- | :--- |
| SSH_HOST        |	Your server IP address or hostname | 192.168.1.100
| SSH_PORT        |	SSH port (usually 22)              | 22
| SSH_USERNAME    |	SSH username                       | deploy
| SSH_PRIVATE_KEY |	Private SSH key for authentication | -----BEGIN RSA PRIVATE KEY-----...

3. Initial Server Setup

Ensure your server has:
```bash
# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```