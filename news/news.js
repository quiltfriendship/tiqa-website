document.addEventListener(
    "DOMContentLoaded",
    function () {

        const container =
            document.getElementById(
                "news-list"
            );

        if (!container) {
            return;
        }

        if (
            typeof newsData === "undefined" ||
            !Array.isArray(newsData)
        ) {
            console.error(
                "newsData 資料不存在"
            );
            return;
        }

        newsData.forEach(
            function (item) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "news-card";

                /* =========================
                   Facebook 嵌入類型
                ========================= */
                if (item.embedType === "facebook" && item.iframeSrc) {

                    const iframeWrap =
                        document.createElement(
                            "div"
                        );

                    iframeWrap.className =
                        "news-iframe-wrap";

                    const iframe =
                        document.createElement(
                            "iframe"
                        );

                    iframe.src =
                        item.iframeSrc;

                    iframe.width =
                        "100%";

                    iframe.height =
                        item.iframeHeight || 600;

                    iframe.style.border =
                        "none";

                    iframe.style.overflow =
                        "hidden";

                    iframe.scrolling =
                        "no";

                    iframe.frameBorder =
                        "0";

                    iframe.allowFullscreen =
                        true;

                    iframe.allow =
                        "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";

                    iframeWrap.appendChild(
                        iframe
                    );

                    card.appendChild(
                        iframeWrap
                    );

                }
                /* =========================
                   一般圖文卡片類型
                ========================= */
                else {

                    if (item.image) {

                        const imageWrap =
                            document.createElement(
                                "div"
                            );

                        imageWrap.className =
                            "news-image";

                        const image =
                            document.createElement(
                                "img"
                            );

                        image.src =
                            item.image;

                        image.alt =
                            item.title || "最新消息圖片";

                        image.loading =
                            "lazy";

                        imageWrap.appendChild(
                            image
                        );

                        card.appendChild(
                            imageWrap
                        );

                    }

                    const body =
                        document.createElement(
                            "div"
                        );

                    body.className =
                        "news-body";

                    const title =
                        document.createElement(
                            "h2"
                        );

                    if (item.url) {

                        const link =
                            document.createElement(
                                "a"
                            );

                        link.href =
                            item.url;

                        link.textContent =
                            item.title;

                        link.target =
                            "_blank";

                        link.rel =
                            "noopener noreferrer";

                        title.appendChild(
                            link
                        );

                    } else {

                        title.textContent =
                            item.title;

                    }

                    body.appendChild(
                        title
                    );

                    if (item.description) {

                        const desc =
                            document.createElement(
                                "p"
                            );

                        desc.className =
                            "news-description";

                        desc.textContent =
                            item.description;

                        body.appendChild(
                            desc
                        );

                    }

                    card.appendChild(
                        body
                    );

                }

                container.appendChild(
                    card
                );

            }
        );

    }
);