/* =========================================================
   2023 友好拼布手作節
   Exhibitors Renderer
========================================================= */

(function () {

    "use strict";


    if (
        typeof exhibitorsData === "undefined" ||
        !exhibitorsData
    ) {

        console.error(
            "exhibitorsData 資料不存在"
        );

        return;

    }


    /* =====================================================
       HTML Encode
    ===================================================== */

    function escapeHtml(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       建立單一參展單位
    ===================================================== */

    function createExhibitorCard(
        item,
        index,
        categoryLabel
    ) {

        const article =
            document.createElement(
                "article"
            );


        article.className =
            "exhibitor-card" +
            (
                index % 2 === 1
                    ? " reverse"
                    : ""
            );


        /* Media */

        const media =
            document.createElement(
                "div"
            );

        media.className =
            "exhibitor-media";


        const img =
            document.createElement(
                "img"
            );

        img.src =
            item.image || "";

        img.alt =
            item.name || "參展單位";

        img.loading =
            "lazy";


        media.appendChild(
            img
        );


        /* Content */

        const content =
            document.createElement(
                "div"
            );

        content.className =
            "exhibitor-content";


        const category =
            document.createElement(
                "p"
            );

        category.className =
            "exhibitor-category";

        category.textContent =
            categoryLabel;


        const title =
            document.createElement(
                "h3"
            );

        title.textContent =
            item.name || "";


        const description =
            document.createElement(
                "p"
            );

        description.className =
            "exhibitor-description";

        description.textContent =
            item.description || "";


        content.appendChild(
            category
        );

        content.appendChild(
            title
        );

        content.appendChild(
            description
        );


        /* Meta */

        if (
            Array.isArray(item.meta) &&
            item.meta.length
        ) {

            const metaList =
                document.createElement(
                    "ul"
                );

            metaList.className =
                "exhibitor-meta";


            item.meta.forEach(
                function (meta) {

                    const li =
                        document.createElement(
                            "li"
                        );


                    const strong =
                        document.createElement(
                            "strong"
                        );

                    strong.textContent =
                        (meta.label || "") +
                        "：";


                    const span =
                        document.createElement(
                            "span"
                        );

                    span.textContent =
                        meta.value || "";


                    li.appendChild(
                        strong
                    );

                    li.appendChild(
                        span
                    );

                    metaList.appendChild(
                        li
                    );

                }
            );


            content.appendChild(
                metaList
            );

        }


        article.appendChild(
            media
        );

        article.appendChild(
            content
        );


        return article;

    }


    /* =====================================================
       建立列表
    ===================================================== */

    function renderList(
        containerId,
        items,
        categoryLabel
    ) {

        const container =
            document.getElementById(
                containerId
            );


        if (!container) {

            return;

        }


        container.innerHTML =
            "";


        if (
            !Array.isArray(items) ||
            !items.length
        ) {

            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "exhibitors-empty";

            empty.textContent =
                "此分類資料整理中。";


            container.appendChild(
                empty
            );

            return;

        }


        items.forEach(
            function (item, index) {

                container.appendChild(
                    createExhibitorCard(
                        item,
                        index,
                        categoryLabel
                    )
                );

            }
        );

    }


    /* =====================================================
       Init
    ===================================================== */

    renderList(
        "studio-list",
        exhibitorsData.studios,
        "Studio / Creator"
    );


    renderList(
        "brand-list",
        exhibitorsData.brands,
        "Brand / Vendor"
    );


})();
