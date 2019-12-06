---
title: 使用 Netlify 10 分鐘上線 Gatsby 靜態網站
date: "2019-12-06"
template: "post"
draft: false
slug: "/posts/frontend-development-setup-on-macos/"
category: "Development"
tags:
  - "macOS"
description: "在 macOS 建立前端開發環境。"
---
## 為什麼要重裝？
這一段是對 macOS Catalina 的抱怨，要看安裝過程請直接跳到下一段。

我的 MacBook Pro 是 2018 年底生產的機器，出廠時搭配的是 High Sierra，幾個月後升級成 Mojave，持續到 2019 年都沒有問題。

2019 年發佈 macOS Catalina，作業系統架構變動甚大，還破紀錄在短時間內發佈數個更新檔，可是作業系統仍然問題頻傳。

我在第一時間嘗鮮就從 Mojave 直接升級到 Catalina，但不幸中了幾個非常嚴重的問題，電腦在使用過程中有時會突然風扇狂轉，就算關掉所有應用程式還停不下來。

電腦進入睡眠模式喚醒後，就卡在登入畫面，游標變成旋轉的彩球，風扇也突然的快速轉了起來，除了強制關機沒有解決方法。

這二個問題讓我非常困擾，是以前沒有遇到的經驗，過往蘋果的軟體品質讓我很放心，這次可能為了要和iOS及iPadOS整合而更改系統架構，所以和舊的程式不相容，與其等待蘋果發佈更新，不如重新安裝作業系統來得快，幸好平時已經使用一些雲端服務在儲存重要的資料，也就沒有做 Time Machine 備份的必要，所以決定來個 clean install。

因為重新安裝這個動作並非常常做，於是把每個軟體為什麼要安裝，以及軟體設定的內容記下來，以免之後再安裝或者改設定時想不起來。