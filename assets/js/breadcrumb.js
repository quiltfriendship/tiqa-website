/* =========================================================
   TIQA 共用麵包屑
   /assets/js/breadcrumb.js

   使用方式：

   window.breadcrumbData = [
       {
           title: "首頁",
           url: "/"
       },
       {
           title: "歷年活動",
           url: "/events/"
       },
       {
           title: "2016 作品展"
       }
   ];

   最後一層不設定 url，代表目前所在頁面。
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       取得 Breadcrumb 容器
    ===================================================== */

    const container =
        document.getElementById(
            "breadcrumb"
        );


    /*
     * 頁面沒有 Breadcrumb
     * 就不執行
     */

    if (!container) {

        console.warn(
            "找不到 #breadcrumb"
        );

        return;

    }



    /* =====================================================
       確認 breadcrumbData
    ===================================================== */

    if (
        typeof window.breadcrumbData === "undefined" ||
        !Array.isArray(window.breadcrumbData) ||
        window.breadcrumbData.length === 0
    ) {

        console.warn(
            "breadcrumbData 未設定"
        );

        return;

    }



    /* =====================================================
       建立 <ol>
    ===================================================== */

    const list =
        document.createElement(
            "ol"
        );


    list.className =
        "breadcrumb-list";



    /* =====================================================
       建立每一層
    ===================================================== */

    window.breadcrumbData.forEach(
        function (item, index) {


            const listItem =
                document.createElement(
                    "li"
                );


            listItem.className =
                "breadcrumb-item";


            const isLast =
                index ===
                window.breadcrumbData.length - 1;



            /* =================================================
               非最後一層
            ================================================= */

            if (
                !isLast &&
                item.url
            ) {

                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    item.url;


                link.textContent =
                    item.title;


                listItem.appendChild(
                    link
                );

            }



            /* =================================================
               最後一層 / 沒有 URL
            ================================================= */

            else {

                const current =
                    document.createElement(
                        "span"
                    );


                current.textContent =
                    item.title;


                if (isLast) {

                    current.setAttribute(
                        "aria-current",
                        "page"
                    );

                }


                listItem.appendChild(
                    current
                );

            }



            /* =================================================
               加入清單
            ================================================= */

            list.appendChild(
                listItem
            );

        }
    );



    /* =====================================================
       放入 Breadcrumb
    ===================================================== */

    container.innerHTML = "";


    container.appendChild(
        list
    );


})();