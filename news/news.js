document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("news-list");

    if (!container) {
        return;
    }

    if (
        typeof newsData === "undefined" ||
        !Array.isArray(newsData)
    ) {
        console.error("newsData 資料不存在或格式不正確");
        return;
    }

    if (newsData.length === 0) {
        const empty = document.createElement("p");
        empty.className = "news-empty";
        empty.textContent = "目前尚無最新消息。";
        container.appendChild(empty);
        return;
    }

    newsData.forEach(function (item) {

        const card = document.createElement("article");
        card.className = "news-card";


        /* =====================================================
           Image
        ===================================================== */

        const imageWrap = document.createElement("div");
        imageWrap.className = "news-image";

        const image = document.createElement("img");
        image.src = item.image || "./default.jpg";
        image.alt = item.title || "最新消息";
        image.loading = "lazy";

        image.addEventListener("error", function () {

            if (image.dataset.fallback === "true") {
                return;
            }

            image.dataset.fallback = "true";
            image.src = "./default.jpg";

        });

        imageWrap.appendChild(image);


        /* =====================================================
           Category
        ===================================================== */

        if (item.category) {

            const badge = document.createElement("span");
            badge.className = "news-category-badge";
            badge.textContent = item.category;

            imageWrap.appendChild(badge);

        }


        /* =====================================================
           Body
        ===================================================== */

        const body = document.createElement("div");
        body.className = "news-body";


        if (item.date) {

            const date = document.createElement("time");
            date.className = "news-date";
            date.textContent = item.date;

            body.appendChild(date);

        }


        const title = document.createElement("h2");
        title.className = "news-title";
        title.textContent = item.title || "";

        body.appendChild(title);


        if (item.description) {

            const description = document.createElement("p");
            description.className = "news-description";
            description.textContent = item.description;

            body.appendChild(description);

        }


        /* =====================================================
           Links
        ===================================================== */

        if (
            Array.isArray(item.links) &&
            item.links.length > 0
        ) {

            const footer = document.createElement("div");
            footer.className = "news-footer-link";

            item.links.forEach(function (linkItem) {

                if (!linkItem.url || linkItem.url === "#") {
                    return;
                }

                const link = document.createElement("a");

                link.href = linkItem.url;
                link.textContent =
                    linkItem.label || "閱讀更多";

                if (
                    /^https?:\/\//i.test(linkItem.url)
                ) {
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                }

                footer.appendChild(link);

            });

            if (footer.children.length > 0) {
                body.appendChild(footer);
            }

        }


        card.appendChild(imageWrap);
        card.appendChild(body);

        container.appendChild(card);

    });

});
