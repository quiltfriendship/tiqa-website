document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           確認 DATA
        ===================================================== */

        if (
            typeof eventsData === "undefined" ||
            !Array.isArray(eventsData)
        ) {

            console.error(
                "eventsData 資料不存在或格式錯誤"
            );

            return;
        }



        const container =
            document.getElementById(
                "events-list"
            );


        if (!container) {
            return;
        }



        /* =====================================================
           建立年度卡片
        ===================================================== */

        eventsData.forEach(
            function (event) {


                const article =
                    document.createElement(
                        "article"
                    );


                article.className =
                    "event-card";



                /* =================================================
                   圖片連結
                ================================================= */

                const imageLink =
                    document.createElement(
                        "a"
                    );

                imageLink.href =
                    event.url;

                imageLink.className =
                    "event-card-image";


                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    event.image;


                image.alt =
                    event.title;


                image.loading =
                    "lazy";


                imageLink.appendChild(
                    image
                );



                /* =================================================
                   內容
                ================================================= */

                const content =
                    document.createElement(
                        "div"
                    );


                content.className =
                    "event-card-content";



                const year =
                    document.createElement(
                        "p"
                    );


                year.className =
                    "event-card-year";


                year.textContent =
                    event.year;



                const title =
                    document.createElement(
                        "h3"
                    );


                const titleLink =
                    document.createElement(
                        "a"
                    );


                titleLink.href =
                    event.url;


                titleLink.textContent =
                    event.title;


                title.appendChild(
                    titleLink
                );



                const description =
                    document.createElement(
                        "p"
                    );


                description.className =
                    "event-card-description";


                description.textContent =
                    event.description;



                const more =
                    document.createElement(
                        "a"
                    );


                more.href =
                    event.url;


                more.className =
                    "event-card-more";


                more.textContent =
                    "查看活動 →";



                /* =================================================
                   組合
                ================================================= */

                content.appendChild(
                    year
                );


                content.appendChild(
                    title
                );


                content.appendChild(
                    description
                );


                content.appendChild(
                    more
                );


                article.appendChild(
                    imageLink
                );


                article.appendChild(
                    content
                );


                container.appendChild(
                    article
                );

            }
        );

    }
);