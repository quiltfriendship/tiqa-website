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


    /*
     * 首頁主視覺輪播
     */
    const heroCarousel = document.querySelector(".hero-carousel");

    if (heroCarousel) {
        const slides = Array.from(heroCarousel.querySelectorAll("[data-hero-slide]"));
        const dots = Array.from(heroCarousel.querySelectorAll("[data-hero-dot]"));
        const prevButton = heroCarousel.querySelector(".hero-carousel-prev");
        const nextButton = heroCarousel.querySelector(".hero-carousel-next");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let currentIndex = 0;
        let timer = null;

        function showSlide(index) {
            if (!slides.length) return;
            currentIndex = (index + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                const active = i === currentIndex;
                slide.classList.toggle("is-active", active);
                slide.setAttribute("aria-hidden", active ? "false" : "true");
            });
            dots.forEach(function (dot, i) {
                const active = i === currentIndex;
                dot.classList.toggle("is-active", active);
                if (active) dot.setAttribute("aria-current", "true");
                else dot.removeAttribute("aria-current");
            });
        }

        function stopAutoPlay() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        function startAutoPlay() {
            stopAutoPlay();
            if (!reduceMotion && slides.length > 1) {
                timer = window.setInterval(function () {
                    showSlide(currentIndex + 1);
                }, 5000);
            }
        }

        if (prevButton) prevButton.addEventListener("click", function () {
            showSlide(currentIndex - 1);
            startAutoPlay();
        });

        if (nextButton) nextButton.addEventListener("click", function () {
            showSlide(currentIndex + 1);
            startAutoPlay();
        });

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                showSlide(Number(dot.dataset.heroDot));
                startAutoPlay();
            });
        });

        heroCarousel.addEventListener("mouseenter", stopAutoPlay);
        heroCarousel.addEventListener("mouseleave", startAutoPlay);
        heroCarousel.addEventListener("focusin", stopAutoPlay);
        heroCarousel.addEventListener("focusout", startAutoPlay);

        showSlide(0);
        startAutoPlay();
    }

});