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

# 安裝過程
Install Docker Desktop

# 操作方式
Download images from Docker Hub
Apps
Run containers from command line and dashboard
Manage containers and images
Create image from yml file