/* =========================================================
   TIQA 2023 志工照片 Gallery
   /events/2023/volunteer/volunteer.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       確認 DATA
    ===================================================== */

    if (
        typeof volunteerPhotos === "undefined" ||
        !Array.isArray(volunteerPhotos)
    ) {

        console.error(
            "volunteerPhotos 資料不存在或格式錯誤"
        );

        return;

    }



    /* =====================================================
       DOM
    ===================================================== */

    const gallery =
        document.getElementById(
            "volunteer-gallery"
        );


    const lightbox =
        document.getElementById(
            "volunteer-lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "volunteer-lightbox-image"
        );


    const lightboxCount =
        document.getElementById(
            "volunteer-lightbox-count"
        );


    const closeButton =
        document.getElementById(
            "volunteer-lightbox-close"
        );


    const prevButton =
        document.getElementById(
            "volunteer-lightbox-prev"
        );


    const nextButton =
        document.getElementById(
            "volunteer-lightbox-next"
        );


    if (
        !gallery ||
        !lightbox ||
        !lightboxImage
    ) {

        console.error(
            "志工照片 Gallery 必要 DOM 不存在"
        );

        return;

    }



    /* =====================================================
       狀態
    ===================================================== */

    let currentIndex = 0;



    /* =====================================================
       產生 Gallery
    ===================================================== */

    function renderGallery() {

        gallery.innerHTML = "";


        volunteerPhotos.forEach(
            function (photo, index) {


                const figure =
                    document.createElement(
                        "figure"
                    );


                figure.className =
                    "volunteer-gallery-item";


                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "volunteer-gallery-button";


                button.setAttribute(
                    "aria-label",
                    "放大瀏覽：" +
                    photo.alt
                );


                const imageWrap =
                    document.createElement(
                        "div"
                    );


                imageWrap.className =
                    "volunteer-gallery-image";


                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    photo.image;


                image.alt =
                    photo.alt;


                image.loading =
                    "lazy";


                imageWrap.appendChild(
                    image
                );


                button.appendChild(
                    imageWrap
                );


                button.addEventListener(
                    "click",
                    function () {

                        openLightbox(
                            index
                        );

                    }
                );


                figure.appendChild(
                    button
                );


                gallery.appendChild(
                    figure
                );

            }
        );

    }



    /* =====================================================
       開啟 Lightbox
    ===================================================== */

    function openLightbox(index) {

        currentIndex =
            index;


        updateLightbox();


        lightbox.hidden =
            false;


        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "volunteer-lightbox-open"
        );


        if (closeButton) {

            closeButton.focus();

        }

    }



    /* =====================================================
       關閉
    ===================================================== */

    function closeLightbox() {

        lightbox.hidden =
            true;


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "volunteer-lightbox-open"
        );

    }



    /* =====================================================
       更新 Lightbox
    ===================================================== */

    function updateLightbox() {

        const photo =
            volunteerPhotos[
                currentIndex
            ];


        if (!photo) {
            return;
        }


        lightboxImage.src =
            photo.image;


        lightboxImage.alt =
            photo.alt;


        if (lightboxCount) {

            lightboxCount.textContent =
                (currentIndex + 1) +
                " / " +
                volunteerPhotos.length;

        }


        if (prevButton) {

            prevButton.disabled =
                currentIndex === 0;

        }


        if (nextButton) {

            nextButton.disabled =
                currentIndex ===
                volunteerPhotos.length - 1;

        }

    }



    /* =====================================================
       上一張
    ===================================================== */

    function previousPhoto() {

        if (
            currentIndex <= 0
        ) {

            return;

        }


        currentIndex--;


        updateLightbox();

    }



    /* =====================================================
       下一張
    ===================================================== */

    function nextPhoto() {

        if (
            currentIndex >=
            volunteerPhotos.length - 1
        ) {

            return;

        }


        currentIndex++;


        updateLightbox();

    }



    /* =====================================================
       Button Events
    ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousPhoto
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextPhoto
        );

    }



    /* =====================================================
       點背景關閉
    ===================================================== */

    const backdrop =
        lightbox.querySelector(
            "[data-lightbox-close]"
        );


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeLightbox
        );

    }



    /* =====================================================
       Keyboard
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (lightbox.hidden) {
                return;
            }


            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                previousPhoto();

            }


            if (
                event.key === "ArrowRight"
            ) {

                nextPhoto();

            }

        }
    );



    /* =====================================================
       初始化
    ===================================================== */

    renderGallery();


})();