document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("news-list");

    if (!container) {
        return;
    }

    if (typeof newsData === "undefined" || !Array.isArray(newsData)) {
        console.error("newsData 資料不存在或格式不正確");
        return;
    }

    newsData.forEach(function (item) {
        // 建立 Card 文章容器
        const card = document.createElement("article");
        card.className = "news-card";

        /* =========================
           圖片與分類標籤
        ========================= */
        const imageWrap = document.createElement("div");
        imageWrap.className = "news-image";

        const image = document.createElement("img");
        image.src = item.image || "/assets/images/news/default.jpg";
        image.alt = item.title || "最新消息";
        image.loading = "lazy";

        // 圖片載入失敗備援
        image.addEventListener("error", function () {
            if (image.dataset.fallback) return;
            image.dataset.fallback = "true";
            image.src = "/assets/images/news/default.jpg";
        });

        imageWrap.appendChild(image);

        if (item.category) {
            const badge = document.createElement("span");
            badge.className = "news-category-badge";
            badge.textContent = item.category;
            imageWrap.appendChild(badge);
        }

        /* =========================
           內容區塊 (Body)
        ========================= */
        const body = document.createElement("div");
        body.className = "news-body";

        // 發布日期
        if (item.date) {
            const date = document.createElement("div");
            date.className = "news-date";
            date.textContent = item.date;
            body.appendChild(date);
        }

        // 標題
        const title = document.createElement("h2");
        title.className = "news-title";
        title.textContent = item.title || "";
        body.appendChild(title);

        // 簡介說明
        const description = document.createElement("p");
        description.className = "news-description";
        description.textContent = item.description || "";
        body.appendChild(description);

        // 連結按鈕 (如果有的話)
        if (item.links && item.links.length > 0) {
            const footer = document.createElement("div");
            footer.className = "news-footer-link";

            item.links.forEach(function (linkItem) {
                const link = document.createElement("a");
                link.href = linkItem.url || "#";
                link.textContent = linkItem.label || "閱讀更多";
                footer.appendChild(link);
            });

            body.appendChild(footer);
        }

        // 組裝 Card
        card.appendChild(imageWrap);
        card.appendChild(body);

        container.appendChild(card);
    });
});