tiqa-website/
│
├─ index.html
│
├─ README.md
├─ site.webmanifest
│
├─ components/
│  ├─ header.html
│  └─ footer.html
│ 
├─ assets/
│  ├─ css/
│  │  ├─ style.css       ← 全站共用
│  │  ├─ about.css       ← 關於我們相關頁面共用
│  │  ├─ classroom.css
│  │  ├─ membership.css
│  │  ├─ publications.css
│  │  ├─ events.css
│  │  └─ event-gallery.css
│  │ 
│  ├─ js/
│  │  ├─ head-common.js    ← favicon / manifest  管 <head>
│  │  ├─ include.js        管 <body> 裡的 Header / Footer
│  │  ├─ breadcrumb.js
│  │  └─ main.js
│  │
│  └─ images/             全站共用圖
│     ├─ logo.png
│     ├─ hero.jpg
│     ├─ favicon.ico
│     ├─ favicon-16.png
│     ├─ favicon-32.png
│     ├─ favicon-48.png
│     ├─ favicon-64.png
│     ├─ favicon-96.png
│     ├─ favicon-192.png
│     ├─ favicon-256.png
│     ├─ favicon-512.png
│     └─ apple-touch-icon.png
│ 
├─ about/
│  ├─ index.html                 ← 第一層「關於我們」入口頁
│  │
│  ├─ profile/
│  │  └─ index.html              ← 第二層「協會簡介」
│  │
│  ├─ directors/
│  │  ├─ index.html              ← 第二層「理監事會」
│  │  ├─ directors-data.js
│  │  ├─ directors.js
│  │  ├─ 理監事圖片1
│  │  ├─ ...
│  │  └─ 理監事圖片n
│  │
│  └─ contact/                   ← 第二層「聯絡我們」
│     ├─ index.html
│     └─ contact.js
│
├─ classroom/
│  ├─ index.html
│  ├─ classroom-data.js
│  ├─ classroom.js
│  ├─ classroom-hero.jpg
│  ├─ default.jpg
│  ├─ classroom-01.jpg
│  ├─ ...
│  └─ classroom-nn.jpg

├─ news/
│  ├─ index.html
│  ├─ news.js
│  ├─ news-data.js
│  ├─ 新聞圖片1
│  ├─ ...
│  └─ 新聞圖片n
│
├─ charity/
│  └─ index.html
│
├─ events/
│  ├─ event-gallery.js
│  ├─ index.html
│  ├─ 2016.jpg          ← 歷年活動首頁的 2016 代表圖
│  ├─ 2017.jpg          ← 歷年活動首頁的 2017 代表圖
│  ├─ 2018.jpg
│  ├─ 2019.jpg
│  ├─ 2021.jpg
│  ├─ 2023.jpg
│  ├─ 2025.jpg
│  ├─ .....jpg
│  ├─ XXXX.jpg
│  │  
│  ├─ 2016/
│  │  ├─ index.html
│  │  ├─ gallery-data.js
│  │  ├─ work-01.jpg
│  │  ├─ ...
│  │  └─ work-nn.jpg
│  │  
│  ├─ 2017/
│  │  ├─ index.html
│  │  ├─ gallery-data.js
│  │  ├─ work-01.jpg
│  │  ├─ ...
│  │  └─ work-nn.jpg
│  │  
│  ├─ 2018/
│  │  ├─ index.html
│  │  ├─ gallery-data.js
│  │  ├─ work-01.jpg
│  │  ├─ ...
│  │  └─ work-nn.jpg
│  │  

│  ├─ 2019/
│  │  └─ index.html
│  ├─ 2021/
│  │  └─ index.html
│  ├─ 2023/
│     ├─ index.html
│     ├─ event-data.js
│     ├─ 2023.jpg
│     ├─ exhibition.jpg
│     └─ exhibition/
│        ├─ index.html
│        ├─ gallery-data.js
│        ├─ work-01.jpg
│        ├─ ...
│        └─ work-nn.jpg
│  └─ 2025/
│     └─ index.html
│
├─ publications/
│  ├─ index.html
│  ├─ publications-data.js   ← 只放出版品資料
│  ├─ publications.js        ← 只放產生卡片、翻頁功能
│  ├─ book1/
│  │  ├─ cover.jpg
│  │  ├─ page-01.jpg
│  │  ├─ ...
│  │  └─ page-nn.jpg
│  │
│  ├─ book2/
│  │  ├─ cover.jpg
│  │  ├─ page-01.jpg
│  │  ├─ ...
│  │  └─ page-nn.jpg
│
├─ membership/
│  └─ index.html
│

