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
## Docker 是什麼？
Docker 是虛擬化技術的一種。

一般人熟悉的虛擬化技術應該是虛擬機器，虛擬機器是透過軟體虛擬出一個和硬體一樣的環境，可以看成在大型電腦內切割出許多小型電腦。

這樣的好處是，透過虛擬機器，我們可以在一台大型主機上執行許多個作業系統，只要主機的資源能夠負荷，不僅節省採購多種硬體的成本，也能減少主機管理員的工作。

個人使用上像是 Parallels Desktop, VM Ware，VirtualBox 這些套裝軟體，都是用了虛擬機器的技術。

虛擬機器的缺點在於如果主機硬體資源不夠強大，同時要跑二個以上的作業系統會讓應用程式執行速度變慢，這是因為完整的作業系統需要資源來執行一些底層功能。

Docker 的誕生就是為了解決這個問題。

Docker 提出了 container 的虛擬化技術，如同虛擬機器，container 之間也是各自獨立的封閉單元，互相用網路線路連線。 

不過 container 裡是精簡化的作業系統，只包含能執行應用程式最基本的功能。

因此 container 可以在數秒之內啟動，而且不會對主機的硬體資源帶來額外的負擔。


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

## Install Docker Desktop
在 local 安裝 Docker 的開發環境相當簡單
只要到[官網](https://www.docker.com/products/docker-desktop)下載並安裝 Docker Desktop 就可以了
有 Mac 版和 Windows 版
安裝程式會一併裝好 command line tools

雖然Docker可以完全透過 command line 操作
但是 Docker Desktop 提供了GUI介面讓初次接觸的人能直接查看及管理 Docker apps 和 containers
還有視覺化的選單讓我們設定分配給 Docker 的硬體資源
macOS 及 Windows版本的 Docker Desktop 同時包含 Docker Engine 及 Docker Compose
Linux 則要先裝 Docker Engine 後，再裝 Docker Compose

啟動Docker app後，會在工具列看到 Docker 的吉祥物小鯨魚。

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
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "author": "John Doe <johndoe@aaa.com>",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

以下二項需要注意：
`"main"`：App 的 entrypoint 檔案 `app.js`，等一下要建立。
`"dependencies"`：App 依賴的套件，我們使用 Express 4.17.1 以上的版本。

接著安裝應用程式依賴的套件
```bash
npm install
```
npm version 5 以上，同時會產生一個`package-lock.json`檔案，也是要拷貝到 Docker image

在根目錄新增 `app.js`檔案，這是應用程式的主要邏輯

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

這時在專案根目錄執行`node .`，會啟動 Node server，用瀏覽器到`localhost:8080`會看到 “Hello World” 的回傳值。

恭喜你，你已經踏出成為全端工程師的第一步，但我們的腳步不會停下來，接下來我們用 Docker  將應用程式打包起來，然後在 Docker container 裡跑應用程式。

用`ctrl + c`結束 Node server

### Write the Dockerfile
在專案根目錄新增`Dockerfile`檔案，注意這個檔案沒有副檔名，而且D要大寫。

用編輯器打開`Dockerfile`，首先我們要引用既有的 image，在 [Docker Hub](https://hub.docker.com/_/node) 查到目前最新的Node LTS 版本號是12
```
FROM node:12
```

然後我們設定應用程式的工作目錄，在這之後的指令都會以此目錄為主。


```
WORKDIR /usr/src/app
```

如果 `WROKDIR` 沒有設的話，Docker 會自動幫你創建。

接下來為應用程式安裝依賴套件，把`package.json`檔案複製到工作目錄，然後執行`npm install`，注意如果NPM是版本5以上，`package-lock.json`也要同時複製

```
COPY package*.json ./

RUN npm install
```

再來把我們寫的應用程式原始碼複製到 image 裡。

```
COPY . .
```

接著開放 container 的8080 port 對外介接
```
EXPOSE 8080
```

最後下命令啟動應用程式
```
CMD ["node", "app.js"]
```

### Build Docker image
在`Dockerfile`的所在目錄也就是專案的根目錄執行下面的命令來打包 Docker image。`-t` 後面的參數是你為這個image自訂的名稱，在用`docker image`命令檢查的時候會比較方便。不然Docker會自動幫你取名。

```bash
docker build -t docker-node-demo .
```

用`docker images`檢查存在的 image
(attach an image)

### Run the image

`docker run` 能依照指定的 image 建立一個 container。
`-p`用來指定主機和 container port 的對應關係，這裡我們把主機的 8000 port 對應到前面開放的 8080 port。
`-d` 讓這個 container 以 detach mode 在背景執行，如此一來在終端機就不會顯示任何訊息。
最後指定使用的 image 名稱。

```bash
docker run -p 8000:8080 -d docker-node-demo
```

到`localhost:8000`就能看到我們的 Node.js app 運作成功！

用`docker ps`檢查正在運行的 container 
(attach an image)
