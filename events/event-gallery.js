document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           確認 DATA
        ===================================================== */

        if (
            typeof eventGalleryData === "undefined" ||
            !eventGalleryData ||
            !Array.isArray(eventGalleryData.works)
        ) {

            console.error(
                "eventGalleryData 資料不存在或格式錯誤"
            );

            return;
        }



        /* =====================================================
           DOM
        ===================================================== */

        const title =
            document.getElementById(
                "event-gallery-title"
            );


        const subtitle =
            document.getElementById(
                "event-gallery-subtitle"
            );


        const description =
            document.getElementById(
                "event-gallery-description"
            );


        const gallery =
            document.getElementById(
                "event-gallery-list"
            );


        const lightbox =
            document.getElementById(
                "gallery-lightbox"
            );


        const lightboxImage =
            document.getElementById(
                "gallery-lightbox-image"
            );


        const lightboxTitle =
            document.getElementById(
                "gallery-lightbox-title"
            );


        const lightboxArtist =
            document.getElementById(
                "gallery-lightbox-artist"
            );


        const lightboxCount =
            document.getElementById(
                "gallery-lightbox-count"
            );


        const closeButton =
            document.getElementById(
                "gallery-lightbox-close"
            );


        const prevButton =
            document.getElementById(
                "gallery-lightbox-prev"
            );


        const nextButton =
            document.getElementById(
                "gallery-lightbox-next"
            );



        if (
            !gallery ||
            !lightbox ||
            !lightboxImage
        ) {

            console.error(
                "作品展頁面必要 DOM 不存在"
            );

            return;
        }



        /* =====================================================
           狀態
        ===================================================== */

        let currentIndex = 0;



        /* =====================================================
           頁面基本資料
        ===================================================== */

        if (title) {

            title.textContent =
                eventGalleryData.title ||
                eventGalleryData.year +
                " 作品展";

        }


        if (subtitle) {

            subtitle.textContent =
                eventGalleryData.subtitle ||
                "Exhibition " +
                eventGalleryData.year;

        }


        if (description) {

            description.textContent =
                eventGalleryData.description ||
                "";

        }



        /* =====================================================
           產生作品 Gallery
        ===================================================== */

        function renderGallery() {

            gallery.innerHTML = "";


            eventGalleryData.works.forEach(
                function (work, index) {


                    const article =
                        document.createElement(
                            "article"
                        );


                    article.className =
                        "event-gallery-card";



                    /* =================================================
                       Button
                    ================================================= */

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.type =
                        "button";


                    button.className =
                        "event-gallery-card-button";


                    button.setAttribute(
                        "aria-label",
                        getWorkAriaLabel(
                            work,
                            index
                        )
                    );



                    /* =================================================
                       Image
                    ================================================= */

                    const imageWrap =
                        document.createElement(
                            "div"
                        );


                    imageWrap.className =
                        "event-gallery-card-image";


                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        work.image;


                    image.alt =
                        getWorkAlt(
                            work,
                            index
                        );


                    image.loading =
                        "lazy";


                    imageWrap.appendChild(
                        image
                    );


                    button.appendChild(
                        imageWrap
                    );



                    /* =================================================
                       Info
                    ================================================= */

                    if (
                        work.title ||
                        work.artist
                    ) {

                        const info =
                            document.createElement(
                                "div"
                            );


                        info.className =
                            "event-gallery-card-info";


                        if (work.title) {

                            const workTitle =
                                document.createElement(
                                    "h3"
                                );


                            workTitle.textContent =
                                work.title;


                            info.appendChild(
                                workTitle
                            );

                        }


                        if (work.artist) {

                            const artist =
                                document.createElement(
                                    "p"
                                );


                            artist.textContent =
                                "作者：" +
                                work.artist;


                            info.appendChild(
                                artist
                            );

                        }


                        button.appendChild(
                            info
                        );

                    }



                    /* =================================================
                       Click
                    ================================================= */

                    button.addEventListener(
                        "click",
                        function () {

                            openLightbox(
                                index
                            );

                        }
                    );



                    article.appendChild(
                        button
                    );


                    gallery.appendChild(
                        article
                    );

                }
            );

        }



        /* =====================================================
           Alt
        ===================================================== */

        function getWorkAlt(
            work,
            index
        ) {

            if (
                work.title &&
                work.artist
            ) {

                return (
                    work.title +
                    "，作者 " +
                    work.artist
                );

            }


            if (work.title) {

                return work.title;

            }


            if (work.artist) {

                return (
                    eventGalleryData.year +
                    " 作品展，作者 " +
                    work.artist
                );

            }


            return (
                eventGalleryData.year +
                " 作品展第 " +
                (index + 1) +
                " 件作品"
            );

        }



        /* =====================================================
           Button aria-label
        ===================================================== */

        function getWorkAriaLabel(
            work,
            index
        ) {

            return (
                "放大瀏覽：" +
                getWorkAlt(
                    work,
                    index
                )
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
                "gallery-lightbox-open"
            );


            closeButton.focus();

        }



        /* =====================================================
           關閉 Lightbox
        ===================================================== */

        function closeLightbox() {

            lightbox.hidden =
                true;


            lightbox.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "gallery-lightbox-open"
            );

        }



        /* =====================================================
           更新 Lightbox
        ===================================================== */

        function updateLightbox() {

            const work =
                eventGalleryData.works[
                    currentIndex
                ];


            if (!work) {
                return;
            }



            /* Image */

            lightboxImage.src =
                work.image;


            lightboxImage.alt =
                getWorkAlt(
                    work,
                    currentIndex
                );



            /* Title */

            if (lightboxTitle) {

                if (work.title) {

                    lightboxTitle.textContent =
                        work.title;

                }
                else {

                    lightboxTitle.textContent =
                        eventGalleryData.year +
                        " 作品展";

                }

            }



            /* Artist */

            if (lightboxArtist) {

                if (work.artist) {

                    lightboxArtist.textContent =
                        "作者：" +
                        work.artist;


                    lightboxArtist.hidden =
                        false;

                }
                else {

                    lightboxArtist.textContent =
                        "";


                    lightboxArtist.hidden =
                        true;

                }

            }



            /* Count */

            if (lightboxCount) {

                lightboxCount.textContent =
                    (currentIndex + 1) +
                    " / " +
                    eventGalleryData.works.length;

            }



            /* Button 狀態 */

            if (prevButton) {

                prevButton.disabled =
                    currentIndex === 0;

            }


            if (nextButton) {

                nextButton.disabled =
                    currentIndex ===
                    eventGalleryData.works.length - 1;

            }

        }



        /* =====================================================
           上一件
        ===================================================== */

        function previousWork() {

            if (
                currentIndex <= 0
            ) {
                return;
            }


            currentIndex--;


            updateLightbox();

        }



        /* =====================================================
           下一件
        ===================================================== */

        function nextWork() {

            if (
                currentIndex >=
                eventGalleryData.works.length - 1
            ) {
                return;
            }


            currentIndex++;


            updateLightbox();

        }



        /* =====================================================
           Events
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
                previousWork
            );

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextWork
            );

        }



        /*
         * 點背景關閉
         */

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

                    previousWork();

                }


                if (
                    event.key === "ArrowRight"
                ) {

                    nextWork();

                }

            }
        );



        /* =====================================================
           初始化
        ===================================================== */

        renderGallery();


    }
);