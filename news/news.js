document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("news-list");


    if (!container) {
        return;
    }


    if (
        typeof newsData === "undefined" ||
        !Array.isArray(newsData)
    ) {

        console.error(
            "newsData 資料不存在或格式不正確"
        );

        return;
    }


    if (newsData.length === 0) {

        const empty =
            document.createElement("p");

        empty.className =
            "news-empty";

        empty.textContent =
            "目前尚無最新消息。";

        container.appendChild(
            empty
        );

        return;
    }


    newsData.forEach(
        function (item, index) {

            /* =================================================
               Card
            ================================================= */

            const card =
                document.createElement("article");

            card.className =
                "news-card";


            /* =================================================
               Image
            ================================================= */

            const imageWrap =
                document.createElement("div");

            imageWrap.className =
                "news-image";


            const image =
                document.createElement("img");

            image.src =
                item.image || "./default.jpg";

            image.alt =
                item.title || "最新消息";

            image.loading =
                "lazy";


            image.addEventListener(
                "error",
                function () {

                    if (
                        image.dataset.fallback === "true"
                    ) {
                        return;
                    }

                    image.dataset.fallback =
                        "true";

                    image.src =
                        "./default.jpg";

                }
            );


            imageWrap.appendChild(
                image
            );


            /* =================================================
               Category
            ================================================= */

            if (item.category) {

                const badge =
                    document.createElement("span");

                badge.className =
                    "news-category-badge";

                badge.textContent =
                    item.category;

                imageWrap.appendChild(
                    badge
                );

            }


            /* =================================================
               Body
            ================================================= */

            const body =
                document.createElement("div");

            body.className =
                "news-body";


            /* Date */

            if (item.date) {

                const date =
                    document.createElement("div");

                date.className =
                    "news-date";

                date.textContent =
                    item.date;

                body.appendChild(
                    date
                );

            }


            /* Title */

            const title =
                document.createElement("h2");

            title.className =
                "news-title";

            title.textContent =
                item.title || "";

            body.appendChild(
                title
            );


            /* Description */

            if (item.description) {

                const description =
                    document.createElement("p");

                description.className =
                    "news-description";

                description.textContent =
                    item.description;

                body.appendChild(
                    description
                );

            }


            /* =================================================
               Content
            ================================================= */

            if (
                item.content &&
                item.content.trim() !== ""
            ) {

                const detailId =
                    "news-content-" +
                    (item.id || index);

                const contentWrap =
                    document.createElement("div");

                contentWrap.className =
                    "news-content-wrap";


                const toggle =
                    document.createElement("button");

                toggle.type =
                    "button";

                toggle.className =
                    "news-content-toggle";

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggle.setAttribute(
                    "aria-controls",
                    detailId
                );

                toggle.textContent =
                    "閱讀全文";


                const content =
                    document.createElement("div");

                content.id =
                    detailId;

                content.className =
                    "news-content";

                content.hidden =
                    true;


                /*
                 * content 來源有兩種：
                 *
                 * 1. 純文字：
                 *    直接保留原換行
                 *
                 * 2. 原資料已有 HTML：
                 *    保留原本段落格式
                 */

                if (
                    /<\/?[a-z][\s\S]*>/i.test(
                        item.content
                    )
                ) {

                    content.innerHTML =
                        item.content.trim();

                } else {

                    content.textContent =
                        item.content.trim();

                }


                toggle.addEventListener(
                    "click",
                    function () {

                        const isExpanded =
                            toggle.getAttribute(
                                "aria-expanded"
                            ) === "true";


                        toggle.setAttribute(
                            "aria-expanded",
                            String(!isExpanded)
                        );


                        content.hidden =
                            isExpanded;


                        toggle.textContent =
                            isExpanded
                                ? "閱讀全文"
                                : "收合內容";

                    }
                );


                contentWrap.appendChild(
                    toggle
                );

                contentWrap.appendChild(
                    content
                );

                body.appendChild(
                    contentWrap
                );

            }


            /* =================================================
               Links
            ================================================= */

            if (
                Array.isArray(item.links) &&
                item.links.length > 0
            ) {

                const footer =
                    document.createElement("div");

                footer.className =
                    "news-footer-link";


                item.links.forEach(
                    function (linkItem) {

                        if (
                            !linkItem.url ||
                            linkItem.url === "#"
                        ) {
                            return;
                        }


                        const link =
                            document.createElement("a");


                        link.href =
                            linkItem.url;


                        link.textContent =
                            linkItem.label ||
                            "活動詳情";


                        if (
                            /^https?:\/\//i.test(
                                linkItem.url
                            )
                        ) {

                            link.target =
                                "_blank";

                            link.rel =
                                "noopener noreferrer";

                        }


                        footer.appendChild(
                            link
                        );

                    }
                );


                if (
                    footer.children.length > 0
                ) {

                    body.appendChild(
                        footer
                    );

                }

            }


            /* =================================================
               Assemble
            ================================================= */

            card.appendChild(
                imageWrap
            );

            card.appendChild(
                body
            );


            container.appendChild(
                card
            );

        }
    );

});
