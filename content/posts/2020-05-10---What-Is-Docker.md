---
title: "What is Docker"
date: "2020-05-10T22:40:32.169Z"
template: "post"
draft: true
slug: "/posts/what-is-docker/"
category: "Tutorial"
tags:
  - "Docker"
description: "解釋什麼是Docker"
---
# Docker 是什麼？

Docker的基本執行環境是一個container

一個container裡面可以運行一個或多個應用程式

Container之間各自獨立互不影響

透過 network port 連接

Docker image

以做菜比喻，image是食譜，container是按照食譜做出來的菜

我們在一個文檔 Dockerfile 裡撰寫 comand line 來構建環境

包括 image 的資料結構、引用的 image 檔案，以及要運行的命令

接著我們讓Docker根據 Dockerfile 打包出唯讀的 Docker Image 檔案

之後Docker就能執行image建立container

如同一道食譜可以做出許多一樣的菜

一個image可以建立許多個一模一樣的containers

Docker image打包好後就不能更改

有修改的話

需要從新的Dockerfile重新打包

# 重要觀念
Container

Docker的基本執行環境是一個container

一個container裡面可以運行一個或多個應用程式

Container之間各自獨立互不影響

透過 network port 連接

Docker image

以做菜比喻，image是食譜，container是按照食譜做出來的菜

我們在一個文檔 Dockerfile 裡撰寫 comand line 來構建環境

包括 image 的資料結構、引用的 image 檔案，以及要運行的命令

接著我們讓Docker根據 Dockerfile 打包出唯讀的 Docker Image 檔案

之後Docker就能執行image建立container

如同一道食譜可以做出許多一樣的菜

一個image可以建立許多個一模一樣的containers

Docker image打包好後就不能更改

有修改的話

需要從新的Dockerfile重新打包

Docker hub

Docker Hub可以看成是Docker image 的APP Store

當Docker在local找不到要執行的image，就會自動到Docker Hub去找

一些熱門的images如node.js, ubantu在Docker Hub裡已經有現成可以拿來用

你也可以製作自己的image上傳到Docker Hub給其他人下載

Docker Compose

`docker-compose.yml` 

一個Web app通常需要多個應用程式的組合

例如一台node.js主機加一個mysql資料庫

二者各自運行在自己的Docker container

使用Docker Compose，就可以只用一個yml檔案來設定所有的containers

下一道命令就能自動完成佈署

非常方便

## 安裝過程
這裡示範在 local 安裝 Docker 的開發環境

Install Docker Desktop
首先到[官網](https://www.docker.com/products/docker-desktop)下載 Docker Desktop
有 Mac 版和 Windows 版
雖然Docker可以完全透過 command line 操作
但是 Docker Desktop 提供了GUI介面讓初次接觸的人能直接查看及管理 Docker apps 和 containers
還有視覺化的選單讓我們設定分配給 Docker 的硬體資源
macOS 及 Windows版本的 Docker Desktop 同時包含 Docker Engine 及 Docker Compose
Linux 則要先裝 Docker Engine 後，再裝 Docker Compose

## 用 Docker 打包一個 Node.js web app
[Docker Compose reference](https://docs.docker.com/compose/compose-file/)
在local端建立一個 Node.js 應用程式，然後用Docker打包成 Docker image
應用程式使用Express框架

要佈署到網際網路的話
許多雲端平台服務（如 Heroku）都有支援Docker image
佈署的方式請參考他們的說明文件



### 建立 Node.js app
首先建立專案目錄`docker-node-demo`

在目錄下新增 `package.json`

```json
{
  "name": "docker-node-demo",
  "version": "1.0.0",
  "description": "A Node.js app runs on Docker",
  "main": "index.js",
  "scripts": {
    "start": "node ."
  },
  "author": "John Doe <johndoe@aaa.com>",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

以下二項需要注意：
`"main"`：App 的 entrypoint 檔案 `index.js`，等一下要建立。
`"dependencies"`：App 依賴的套件，我們使用 Express 4.17.1 以上的版本。

接著安裝應用程式依賴的套件
```bash
npm install
```
npm version 5 以上，同時會產生一個`package-lock.json`檔案，也是要拷貝到 Docker image

在根目錄新增 `index.js`檔案，這是應用程式的主要內容

```javascript
const express = require('express');

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get('/', async (request, response) => {
    response.send('Hello World');
});

app.listen(PORT || HOST);
console.log(`Running on http://${HOST}:${PORT}`);
```

這時在專案根目錄執行`node .`，會啟動 Node server，用瀏覽器到`localhost:8080`會看到 Hello World 的回傳值。

恭喜你，你已經踏出成為全端工程師的第一步，但我們的腳步不會停下來，接下來我們用 Docker  將應用程式打包起來。

用`ctrl + c`結束 Node server