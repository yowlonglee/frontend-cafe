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

Docker是輕量的虛擬機器

大部分人認識的虛擬機器不外是Paralles Desktop, VM Ware，VirtualBox， 以及 BootCamp，讓macos可以跑Windows

虛擬機器是透過軟體虛擬出一個和硬體的環境，可以看成在你的電腦內變出另一台電腦

但是有時我們開發時並不需要guest OS全部的功能，我們只是需要在guest OS上跑個應用程式或伺服器，卻一定要分配硬體資源執行我們不需要的guest OS底層功能
在Docker只會虛擬需要執行應用程式的最小資源，叫做container

裡面不是整套作業系統，所以Docker的檔案很小，適合透過網路分享

Container之間也是各自獨立互不影響

Docker架構讓container裡的應用程式可以直接存取主機的硬體資源如網路、IO

比起虛擬機器裡的應用程式要透過guest OS以及虛擬機器來得有效

所以Docker使用起來非常快速
# 重要觀念
Docker image
Container
Docker hub
Docker Compose
`docker-compose.yml`  (Docker configuration file)


# 安裝過程
Install Docker Desktop

# 操作方式
Download images from Docker Hub
Apps
Run containers from command line and dashboard
Manage containers and images
Create image from yml file