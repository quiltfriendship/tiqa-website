document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".menu-button");

    const mainNav =
        document.querySelector(".main-nav");


    /*
     * 手機主選單
     */
    if (menuButton && mainNav) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("is-open");

            menuButton.classList.toggle(
                "is-open",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "關閉主選單"
                    : "開啟主選單"
            );

        });

    }


    /*
     * 手機子選單
     */
    const submenuButtons =
        document.querySelectorAll(
            ".submenu-button"
        );

    submenuButtons.forEach(function (button) {

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

                const isOpen =
                    parent.classList.toggle(
                        "submenu-open"
                    );

                button.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );

                button.textContent =
                    isOpen
                        ? "−"
                        : "+";

            }
        );

    });


    /*
     * 瀏覽器由手機切換回桌機時
     * 清除手機選單狀態
     */
    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                if (mainNav) {
                    mainNav.classList.remove(
                        "is-open"
                    );
                }

                if (menuButton) {

                    menuButton.classList.remove(
                        "is-open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

                document
                    .querySelectorAll(
                        ".has-submenu.submenu-open"
                    )
                    .forEach(
                        function (item) {

                            item.classList.remove(
                                "submenu-open"
                            );

                        }
                    );

                submenuButtons.forEach(
                    function (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        button.textContent =
                            "+";

                    }
                );

            }

        }
    );

});