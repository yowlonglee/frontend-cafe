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
最近在為部落格安裝留言系統時接觸到 Docker，記錄一下學到的東西。

# Docker 是什麼？

Docker是虛擬化技術的一種

一般人熟悉的虛擬化技術應該是虛擬機器

不外是Paralles Desktop, VM Ware，VirtualBox， 以及 BootCamp，在macos可以跑Windows

虛擬機器是透過軟體虛擬出一個和硬體一樣的環境，在裡面安裝作業系統，可以看成在你的電腦內變出另一台電腦

但是有時我們開發時並不需要guest OS全部的功能，我們只是需要在guest OS上跑個應用程式或伺服器。

用虛擬機器一定要分配硬體資源執行我們不需要的guest OS底層功能

Docker也是在解決相同的問題
在Docker只會虛擬需要執行應用程式的最小資源，在一個獨立的container環境下運行

裡面不是整套作業系統，所以Docker的檔案很小，適合透過網路分享

Docker架構讓container裡的應用程式直接存取主機的硬體資源如網路、IO

比起虛擬機器裡的應用程式要透過guest OS來得有效

所以Docker使用起來非常快速

# 重要觀念
Container

Docker的基本執行環境是一個container

一個container裡面可以運行一個或多個應用程式

Container之間各自獨立互不影響

透過網路連接

Docker image

我們透過Docker image 建立container 

在image裡面構建了container的環境

以做菜比喻，image是食譜，container是按照食譜做出來的菜

一道食譜可以做出許多一樣的菜

所以一個image可以建立多個一模一樣的containers

Docker hub

Docker Hub可以看成是Docker image 的APP Store

當Docker在local找不到要執行的image，就會自動到Docker Hub去找

一些熱門的images如node.js, ubantu在Docker Hub裡已經有現成你可以拿來用

你也可以製作自己的image上傳到Docker Hub給其他人下載

Dockerfile

在Dockerfile裡我們用comand line一步步告訴Docker如何打包image檔案

包括image的資料結構、使用的image檔案，以及要運行的命令

Docker image打包好後就不能更改，需要從新的Dockerfile重新打包

Docker Compose

`docker-compose.yml` 

一個Web app通常需要多個應用程式的組合

例如一台node.js主機加一個mysql資料庫

二者各自運行在自己的Docker container

使用Docker Compose，就可以只用一個yml檔案來設定所有的containers

# 安裝過程
Install Docker Desktop

# 操作方式
Download images from Docker Hub
Apps
Run containers from command line and dashboard
Manage containers and images
Create image from yml file