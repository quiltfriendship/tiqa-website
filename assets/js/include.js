document.addEventListener(
    "DOMContentLoaded",
    async function () {

        await loadComponent(
            "site-header",
            "/components/header.html"
        );

        await loadComponent(
            "site-footer",
            "/components/footer.html"
        );


        /*
         * Header 載入完成之後，
         * 再初始化主選單。
         */
        initMainMenu();


        /*
         * 自動標示目前頁面。
         */
        setCurrentNavigation();

    }
);



/* =========================================================
   載入共用 HTML
========================================================= */

async function loadComponent(
    elementId,
    url
) {

    const element =
        document.getElementById(
            elementId
        );

    if (!element) {
        return;
    }


    try {

        const response =
            await fetch(
                url,
                {
                    cache: "no-cache"
                }
            );


        if (!response.ok) {

            throw new Error(
                "無法載入：" +
                url
            );

        }


        const html =
            await response.text();


        element.innerHTML =
            html;

    }
    catch (error) {

        console.error(
            "Component load error:",
            error
        );

    }

}



/* =========================================================
   主選單
========================================================= */

function initMainMenu() {

    const menuButton =
        document.querySelector(
            ".menu-button"
        );

    const mainNavigation =
        document.getElementById(
            "main-navigation"
        );


    if (
        menuButton &&
        mainNavigation
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                const opened =
                    mainNavigation.classList.toggle(
                        "is-open"
                    );


                menuButton.classList.toggle(
                    "is-open",
                    opened
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    opened
                        ? "true"
                        : "false"
                );

            }
        );

    }



    /* =====================================================
       手機子選單
    ===================================================== */

    const submenuButtons =
        document.querySelectorAll(
            ".submenu-button"
        );


    submenuButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    event.stopPropagation();


                    const parent =
                        button.closest(
                            ".has-submenu"
                        );


                    if (!parent) {
                        return;
                    }


                    const opened =
                        parent.classList.toggle(
                            "is-open"
                        );


                    button.setAttribute(
                        "aria-expanded",
                        opened
                            ? "true"
                            : "false"
                    );

                }
            );

        }
    );

}



/* =========================================================
   自動標示目前頁面
========================================================= */

function setCurrentNavigation() {

    const currentPath =
        normalizePath(
            window.location.pathname
        );


    const links =
        document.querySelectorAll(
            ".main-nav a"
        );


    links.forEach(
        function (link) {

            const linkPath =
                normalizePath(
                    new URL(
                        link.href,
                        window.location.origin
                    ).pathname
                );


            if (
                linkPath === currentPath
            ) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        }
    );

}



/* =========================================================
   統一路徑格式
========================================================= */

function normalizePath(path) {

    if (!path) {
        return "/";
    }


    /*
     * index.html 視為資料夾首頁
     */

    path =
        path.replace(
            /index\.html$/,
            ""
        );


    /*
     * 確保最後有 /
     */

    if (
        !path.endsWith("/")
    ) {

        path += "/";

    }


    return path;

}