---
title: 使用 Netlify 10 分鐘上線 Gatsby 靜態網站
date: "2019-08-22T02:42:25.271Z"
template: "post"
draft: false
slug: "/posts/how-to-setup-gatsby-site-with-netlify-very-fast/"
category: "Development"
tags:
  - "netlify"
  - "gatsby"
  - "static site generator"
description: "使用 GitHub 配合 Netlify 快速上線個人網站。"
---

網頁基本上是 HTML，CSS，JavaScript 三種檔案從伺服器傳給瀏覽器顯示。在一個網站中，通常會有一些頁面有類似的頁面佈局，差別只在於頁面的資訊，例如文章、商品介紹頁之類，為了不要重複製作相同的網頁，工程師做了一套系統，事先做好頁面的範本，需要的時候再去資料庫取得使用者要求的資訊，跟範本結合後產生網頁，傳給瀏覽器。這種方法叫「動態頁面預處理器」，PHP 是其中一個代表。

這個方法的缺點是每次來自瀏覽器的請求伺服器都要即時的產生頁面，如果是經常變動的資料也就罷了，像是論壇這類，有些資料比如部落格文章或是線上文件，發佈之後很少在變，每次都要重新產生相同的頁面未免太浪費伺服器資源，同時也延長了使用者的等待時間。

「靜態網站產生器」就是回歸早期的方式，事先將網頁內容製作成 HTML, CSS, JavaScript 直接餵給瀏覽器，除了減少使用者等待時間，因為不會存取資料庫，減少駭客趁機攻擊伺服器的機會。再加上只是簡單的 HTML 和 CSS 檔案不依賴特定的程式語言環境，所以任何的網頁伺服器都可以存取，也就是說站長可以選擇任何最有利的雲端主機服務，不必受限。只要是沒有大量跟資料庫互動的網站都可以用這種方式建立，比如部落格、線上文件、landing page 等等。

二者的差別在「產生網頁的時間點」，「靜態網站產生器」把這個時間提前到「網站上線」的時刻。工程師以其他程式語言先建立一個發文系統，製作一些頁面範本，文章通常以 Markdown 的格式撰寫，在上傳到網站空間前要有一個 build 手續，這時才會產生瀏覽器看得懂的 HTML, CSS, JavaScript 檔案。

這種開發模式也是目前主流的網站前端開發模式，只是熱門的前端框架比起靜態網站產生器更加的複雜且強大，而這些框架也有對應的靜態網站產生器，讓開發者可以用習慣的程式語言寫網頁。這次我選擇的 [Gatsby](https://www.gatsbyjs.org) 是基於 [React](https://reactjs.org) 的靜態網站產生器。

雖然說靜態網站產生器能幫我們產生網頁，但是每次有新的頁面還是需要先 build，再發佈到網站空間，只靠手動也是很煩。而 [Netlify](https://www.netlify.com/?utm_source=podcast&utm_medium=partner&utm_campaign=syntax) 就是個讓佈署過程更加舒適的服務，只要連結網站的 GitHub repo，每當有新的 commit 時，Netlify 就會自動執行 build 指令，並且發佈到網站空間，減少工程師手動的步驟。

首先要先建立一個 [Netlify](https://www.netlify.com/?utm_source=podcast&utm_medium=partner&utm_campaign=syntax) 帳戶[^1]，因為接下來要跟 GitHub 連結，所以我直接用 GitHub 來建立帳戶。

![建立帳戶](/media/2019-08-22/01.jpg)

帳戶開好了先不要管它，我們先來挑一個喜歡的網站外觀。

Gatsby 的佈景主題叫做 starters，可以到[這裡](https://www.gatsbyjs.org/starters/?v=2)挑選你喜歡的主題。

我挑選的是一個極簡的部落格主題 [Lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/)，因為我還沒決定網站的設計，先選一個簡單的來熟悉 Gatsby。

Gatsby 的 starters 設計成一般的 Node.js packages，所以能透過 npm 下載安裝，不過 Netlify 還提供了更簡單的安裝方法。

如果在 Gatsby 的 starter 介紹頁看到 "Try this starter Netlify" 字樣，或是在 starter 的 GitHub 說明頁看到 "Deploy to Netlify" 按鈕，就對著有顏色的地方用力的按下去！

![Try Netlify](/media/2019-08-22/02.jpg)

![Deploy to Netlify](/media/2019-08-22/03.jpg)

如果你還沒登入 Netlify 帳戶的話會要求你先登入，然後取得 GitHub 授權，Netlify 將會建立一個新的 repo，你可以為這個 repo 取個名字，或是之後再更改也可以。

![建立repo](/media/2019-08-22/04.jpg)

接著按下 "Save & Deploy" 按鈕後就可以坐著休息，一切交給 Netlify 處理！

![Netlify 工作中](/media/2019-08-22/05.jpg)

最多二分鐘，網站就會佈署完成，接下來可以按照畫面指示設定自訂的網域名稱和 HTTPS，或者到 "Site Settings" 和 "Domain Settings" 裡修改網站和網域設定。Netlify 的設定介面我覺得設計得簡單又明瞭很好操作，在視覺上也相當美觀。對於不明白的設定項目，底下也有連結開啟相關的說明文件，相當貼心。

![Netlify 工作完成](/media/2019-08-22/06.jpg)

我覺得最神奇的地方在查看 deploy 記錄時，deploy log 的時間是以我們所在的時區顯示，這就讓操作 Netlify 像在操作一台本地端主機一樣方便。

![Deploy summery](/media/2019-08-22/07.jpg)

Deploy 的工作做好了，接著來建立開發環境。

Clone 新建立的 repo 到本地端，假設本地端已經有了 Node.js 和 npm ，我們只要安裝 Gatsby CLI 就足夠。

`$ npm install -g gatsby-cli`

接著進入你的網站目錄，啟動本地端的開發環境。

`$ gatsby develop`

然後用瀏覽器開啟 `localhost:8000` 就可以開始玩 Gatsby 了！

[^1] 本網頁的 Netlify 連結有包含 [Syntax](https://syntax.fm/) 的推薦資訊。Syntax 是一個我覺得很棒的前端開發 podcast，由美國人 [Scott Tolinski](https://twitter.com/stolinski) 及加拿大人 [Wes Bos](https://twitter.com/wesbos) 主持。他們二位是我很喜歡且景仰的開發者，主持的風格也相當有趣。為了支持他們所以提供他們的贊助連結，我本人沒有獲得任何回饋。