/* =========================================================
   2023 友好拼布手作節
   參展攤位 Renderer
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
       工作室 / 個人
    ===================================================== */

    function createStudioCard(item) {

        const article =
            document.createElement(
                "article"
            );

        article.className =
            "studio-card";


        /* Header */

        const header =
            document.createElement(
                "div"
            );

        header.className =
            "studio-card-header";


        const title =
            document.createElement(
                "h3"
            );

        title.className =
            "studio-card-title";

        title.textContent =
            item.name || "";


        header.appendChild(
            title
        );


        if (
            Array.isArray(item.links) &&
            item.links.length
        ) {

            const links =
                document.createElement(
                    "div"
                );

            links.className =
                "studio-links";


            item.links.forEach(
                function (linkItem) {

                    if (
                        !linkItem ||
                        !linkItem.label ||
                        !linkItem.url
                    ) {
                        return;
                    }


                    const link =
                        document.createElement(
                            "a"
                        );

                    link.textContent =
                        linkItem.label;

                    link.href =
                        linkItem.url;


                    if (
                        /^https?:\/\//i.test(
                            linkItem.url
                        )
                    ) {

                        link.target =
                            "_blank";

                        link.rel =
                            "noopener";

                    }


                    links.appendChild(
                        link
                    );

                }
            );


            header.appendChild(
                links
            );

        }


        article.appendChild(
            header
        );


        /* Body */

        const body =
            document.createElement(
                "div"
            );

        body.className =
            "studio-card-body";


        /* Gallery */

        const gallery =
            document.createElement(
                "div"
            );

        gallery.className =
            "studio-gallery";


        const mainWrap =
            document.createElement(
                "div"
            );

        mainWrap.className =
            "studio-gallery-main";


        const mainImage =
            document.createElement(
                "img"
            );

        mainImage.alt =
            item.name || "參展單位";

        mainImage.loading =
            "lazy";


        const images =
            Array.isArray(item.images)
                ? item.images.filter(Boolean)
                : [];


        if (images.length) {

            mainImage.src =
                images[0];

        }


        mainWrap.appendChild(
            mainImage
        );

        gallery.appendChild(
            mainWrap
        );


        if (images.length > 1) {

            const thumbnailWrap =
                document.createElement(
                    "div"
                );

            thumbnailWrap.className =
                "studio-thumbnails";


            images.forEach(
                function (src, index) {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "studio-thumbnail" +
                        (
                            index === 0
                                ? " is-active"
                                : ""
                        );

                    button.setAttribute(
                        "aria-label",
                        "查看 " +
                        (item.name || "參展單位") +
                        " 圖片 " +
                        (index + 1)
                    );


                    const thumb =
                        document.createElement(
                            "img"
                        );

                    thumb.src =
                        src;

                    thumb.alt =
                        "";

                    thumb.loading =
                        "lazy";


                    button.appendChild(
                        thumb
                    );


                    button.addEventListener(
                        "click",
                        function () {

                            mainImage.src =
                                src;


                            thumbnailWrap
                                .querySelectorAll(
                                    ".studio-thumbnail"
                                )
                                .forEach(
                                    function (btn) {

                                        btn.classList.remove(
                                            "is-active"
                                        );

                                    }
                                );


                            button.classList.add(
                                "is-active"
                            );

                        }
                    );


                    thumbnailWrap.appendChild(
                        button
                    );

                }
            );


            gallery.appendChild(
                thumbnailWrap
            );

        }


        body.appendChild(
            gallery
        );


        /* Description */

        const description =
            document.createElement(
                "div"
            );

        description.className =
            "studio-description";


        const paragraphs =
            Array.isArray(item.description)
                ? item.description
                : [item.description];


        paragraphs
            .filter(Boolean)
            .forEach(
                function (text) {

                    const p =
                        document.createElement(
                            "p"
                        );

                    p.textContent =
                        text;


                    description.appendChild(
                        p
                    );

                }
            );


        body.appendChild(
            description
        );


        article.appendChild(
            body
        );


        return article;

    }


    function renderStudios() {

        const container =
            document.getElementById(
                "studio-list"
            );


        if (!container) {
            return;
        }


        container.innerHTML =
            "";


        if (
            !Array.isArray(
                exhibitorsData.studios
            ) ||
            !exhibitorsData.studios.length
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


        exhibitorsData.studios.forEach(
            function (item) {

                container.appendChild(
                    createStudioCard(item)
                );

            }
        );

    }


    /* =====================================================
       品牌 / 廠商
    ===================================================== */

    function createBrandCard(
        item,
        index
    ) {

        const article =
            document.createElement(
                "article"
            );


        article.className =
            "brand-card" +
            (
                index % 2 === 1
                    ? " reverse"
                    : ""
            );


        const media =
            document.createElement(
                "div"
            );

        media.className =
            "brand-media";


        const img =
            document.createElement(
                "img"
            );

        img.src =
            item.image || "";

        img.alt =
            item.name || "參展品牌";

        img.loading =
            "lazy";


        media.appendChild(
            img
        );


        const content =
            document.createElement(
                "div"
            );

        content.className =
            "brand-content";


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
            "brand-description";

        description.textContent =
            item.description || "";


        content.appendChild(
            title
        );

        content.appendChild(
            description
        );


        if (
            Array.isArray(item.meta) &&
            item.meta.length
        ) {

            const metaList =
                document.createElement(
                    "ul"
                );

            metaList.className =
                "brand-meta";


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


    function renderBrands() {

        const container =
            document.getElementById(
                "brand-list"
            );


        if (!container) {
            return;
        }


        container.innerHTML =
            "";


        if (
            !Array.isArray(
                exhibitorsData.brands
            ) ||
            !exhibitorsData.brands.length
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


        exhibitorsData.brands.forEach(
            function (item, index) {

                container.appendChild(
                    createBrandCard(
                        item,
                        index
                    )
                );

            }
        );

    }


    /* =====================================================
       Init
    ===================================================== */

    renderStudios();

    renderBrands();


})();
