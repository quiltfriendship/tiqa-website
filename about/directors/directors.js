document.addEventListener(
    "DOMContentLoaded",
    function () {

        const container =
            document.getElementById(
                "directors-list"
            );

        if (!container) {
            return;
        }

        if (
            typeof directorsData === "undefined" ||
            !Array.isArray(directorsData)
        ) {
            console.error(
                "directorsData 資料不存在或格式錯誤。"
            );

            return;
        }

        /*
         * 分組顯示順序
         */
        const groupOrder = [
            "主要幹部",
            "理事",
            "監事",
            "行政"
        ];


        groupOrder.forEach(
            function (groupName) {

                const members =
                    directorsData.filter(
                        function (item) {

                            return item.group === groupName;

                        }
                    );


                if (members.length === 0) {
                    return;
                }


                /*
                 * 分組區塊
                 */
                const group =
                    document.createElement(
                        "section"
                    );

                group.className =
                    "directors-group";


                /*
                 * 分組標題
                 */
                const groupTitle =
                    document.createElement(
                        "h3"
                    );

                groupTitle.className =
                    "directors-group-title";

                groupTitle.textContent =
                    groupName;


                group.appendChild(
                    groupTitle
                );


                /*
                 * Grid
                 */
                const grid =
                    document.createElement(
                        "div"
                    );

                grid.className =
                    "directors-grid";


                members.forEach(
                    function (item) {

                        grid.appendChild(
                            createDirectorCard(item)
                        );

                    }
                );


                group.appendChild(
                    grid
                );


                container.appendChild(
                    group
                );

            }
        );

    }
);



/* =========================================================
   建立人物卡片
========================================================= */

function createDirectorCard(item) {

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "director-card";


    /* =====================================================
       Photo
    ===================================================== */

    const photo =
        document.createElement(
            "div"
        );

    photo.className =
        "director-photo";


    const image =
        document.createElement(
            "img"
        );

    image.src =
        item.image ||
        "./default.jpg";

    image.alt =
        item.name || "理監事會成員";

    image.loading =
        "lazy";


    /*
     * 找不到圖片時顯示預設圖
     */
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


    photo.appendChild(
        image
    );


    /* =====================================================
       Info
    ===================================================== */

    const info =
        document.createElement(
            "div"
        );

    info.className =
        "director-info";


    /*
     * 職稱
     */
    const position =
        document.createElement(
            "p"
        );

    position.className =
        "director-position";

    position.textContent =
        item.position || "";


    /*
     * 姓名
     */
    const name =
        document.createElement(
            "h3"
        );

    name.textContent =
        item.name || "";


    info.appendChild(
        position
    );

    info.appendChild(
        name
    );


    /* =====================================================
       Facebook
    ===================================================== */

    if (
        item.facebook &&
        item.facebook.trim() !== ""
    ) {

        const social =
            document.createElement(
                "div"
            );

        social.className =
            "director-social";


        const facebook =
            document.createElement(
                "a"
            );

        facebook.href =
            item.facebook;

        facebook.target =
            "_blank";

        facebook.rel =
            "noopener noreferrer";

        facebook.className =
            "director-facebook";

        facebook.textContent =
            "f";

        facebook.setAttribute(
            "aria-label",
            (item.name || "") +
            "的 Facebook（另開新視窗）"
        );

        facebook.title =
            "Facebook";


        social.appendChild(
            facebook
        );


        info.appendChild(
            social
        );

    }


    /* =====================================================
       組合
    ===================================================== */

    card.appendChild(
        photo
    );

    card.appendChild(
        info
    );


    return card;

}
