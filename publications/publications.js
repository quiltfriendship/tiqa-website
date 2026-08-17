document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           確認 DATA
        ===================================================== */

        if (
            typeof publicationsData === "undefined" ||
            !Array.isArray(publicationsData)
        ) {

            console.error(
                "publicationsData 資料不存在或格式錯誤"
            );

            return;
        }



        /* =====================================================
           DOM
        ===================================================== */

        const publicationList =
            document.getElementById(
                "publication-list"
            );


        const previewSection =
            document.getElementById(
                "book-preview"
            );


        const viewerTitle =
            document.getElementById(
                "book-viewer-title"
            );


        const viewerSubtitle =
            document.getElementById(
                "book-viewer-subtitle"
            );


        const viewerDescription =
            document.getElementById(
                "book-viewer-description"
            );


        const image =
            document.getElementById(
                "book-page-image"
            );


        const prevTop =
            document.getElementById(
                "book-prev-top"
            );


        const nextTop =
            document.getElementById(
                "book-next-top"
            );


        const prevBottom =
            document.getElementById(
                "book-prev-bottom"
            );


        const nextBottom =
            document.getElementById(
                "book-next-bottom"
            );


        const currentTop =
            document.getElementById(
                "book-current-page-top"
            );


        const currentBottom =
            document.getElementById(
                "book-current-page-bottom"
            );


        const totalTop =
            document.getElementById(
                "book-total-pages-top"
            );


        const totalBottom =
            document.getElementById(
                "book-total-pages-bottom"
            );


        const closeButton =
            document.getElementById(
                "book-close"
            );



        /* =====================================================
           狀態
        ===================================================== */

        let activeBook = null;

        let currentPage = 1;



        /* =====================================================
           產生出版品列表
        ===================================================== */

        function renderPublications() {

            if (!publicationList) {
                return;
            }


            publicationList.innerHTML = "";


            publicationsData.forEach(
                function (book) {


                    const article =
                        document.createElement(
                            "article"
                        );


                    article.className =
                        "publication-card";


                    /* =================================================
                       Cover
                    ================================================= */

                    const cover =
                        document.createElement(
                            "div"
                        );

                    cover.className =
                        "publication-card-cover";


                    const coverImage =
                        document.createElement(
                            "img"
                        );


                    coverImage.src =
                        book.cover;


                    coverImage.alt =
                        book.title +
                        "作品集封面";


                    coverImage.loading =
                        "lazy";


                    cover.appendChild(
                        coverImage
                    );



                    /* =================================================
                       Content
                    ================================================= */

                    const content =
                        document.createElement(
                            "div"
                        );

                    content.className =
                        "publication-card-content";


                    /* 年份 */

                    const year =
                        document.createElement(
                            "p"
                        );

                    year.className =
                        "publication-card-year";

                    year.textContent =
                        book.year || "";


                    /* 書名 */

                    const title =
                        document.createElement(
                            "h3"
                        );

                    title.textContent =
                        book.title || "";


                    /* 副標 */

                    const subtitle =
                        document.createElement(
                            "p"
                        );

                    subtitle.className =
                        "publication-card-subtitle";

                    subtitle.textContent =
                        book.subtitle || "";


                    /* 說明 */

                    const description =
                        document.createElement(
                            "p"
                        );

                    description.className =
                        "publication-card-description";

                    description.textContent =
                        book.description || "";


                    /* Footer */

                    const footer =
                        document.createElement(
                            "div"
                        );

                    footer.className =
                        "publication-card-footer";


                    /* 售價 */

                    const price =
                        document.createElement(
                            "span"
                        );

                    price.className =
                        "publication-card-price";

                    price.textContent =
                        book.price || "";


                    /* 線上瀏覽 */

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.type =
                        "button";

                    button.className =
                        "publication-preview-button";

                    button.dataset.bookId =
                        book.id;

                    button.textContent =
                        "線上瀏覽";


                    button.addEventListener(
                        "click",
                        function () {

                            openBook(
                                book.id
                            );

                        }
                    );


                    footer.appendChild(
                        price
                    );


                    footer.appendChild(
                        button
                    );


                    content.appendChild(
                        year
                    );


                    content.appendChild(
                        title
                    );


                    content.appendChild(
                        subtitle
                    );


                    content.appendChild(
                        description
                    );


                    content.appendChild(
                        footer
                    );


                    article.appendChild(
                        cover
                    );


                    article.appendChild(
                        content
                    );


                    publicationList.appendChild(
                        article
                    );

                }
            );

        }



        /* =====================================================
           開啟出版品
        ===================================================== */

        function openBook(bookId) {

            const book =
                publicationsData.find(
                    function (item) {

                        return item.id === bookId;

                    }
                );


            if (!book) {

                console.error(
                    "找不到出版品：",
                    bookId
                );

                return;
            }


            activeBook =
                book;


            currentPage =
                1;


            if (viewerTitle) {

                viewerTitle.textContent =
                    "《" +
                    book.title +
                    "》線上瀏覽";

            }


            if (viewerSubtitle) {

                viewerSubtitle.textContent =
                    book.subtitle || "";

            }


            if (viewerDescription) {

                viewerDescription.textContent =
                    book.description || "";

            }


            if (previewSection) {

                previewSection.hidden =
                    false;

            }


            updateBook();


            if (previewSection) {

                previewSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }



        /* =====================================================
           關閉
        ===================================================== */

        function closeBook() {

            if (previewSection) {

                previewSection.hidden =
                    true;

            }


            activeBook =
                null;


            currentPage =
                1;


            const listSection =
                document.querySelector(
                    ".publication-list-section"
                );


            if (listSection) {

                listSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }



        /* =====================================================
           頁碼補零
           
           1  → 01
           9  → 09
           10 → 10
        ===================================================== */

        function formatPageNumber(
            pageNumber
        ) {

            return String(
                pageNumber
            ).padStart(
                2,
                "0"
            );

        }



        /* =====================================================
           更新書籍頁面
        ===================================================== */

        function updateBook() {

            if (
                !activeBook ||
                !image
            ) {
                return;
            }


            const fileNumber =
                formatPageNumber(
                    currentPage
                );


            image.src =
                activeBook.imagePath +
                "page-" +
                fileNumber +
                ".jpg";


            image.alt =
                activeBook.title +
                "作品集第 " +
                currentPage +
                " 頁";


            /* =================================================
               頁碼
            ================================================= */

            if (currentTop) {

                currentTop.textContent =
                    currentPage;

            }


            if (currentBottom) {

                currentBottom.textContent =
                    currentPage;

            }


            if (totalTop) {

                totalTop.textContent =
                    activeBook.totalPages;

            }


            if (totalBottom) {

                totalBottom.textContent =
                    activeBook.totalPages;

            }



            /* =================================================
               按鈕狀態
            ================================================= */

            const isFirstPage =
                currentPage <= 1;


            const isLastPage =
                currentPage >=
                activeBook.totalPages;


            if (prevTop) {

                prevTop.disabled =
                    isFirstPage;

            }


            if (prevBottom) {

                prevBottom.disabled =
                    isFirstPage;

            }


            if (nextTop) {

                nextTop.disabled =
                    isLastPage;

            }


            if (nextBottom) {

                nextBottom.disabled =
                    isLastPage;

            }

        }



        /* =====================================================
           上一頁
        ===================================================== */

        function previousPage() {

            if (!activeBook) {
                return;
            }


            if (
                currentPage <= 1
            ) {
                return;
            }


            currentPage--;


            updateBook();

        }



        /* =====================================================
           下一頁
        ===================================================== */

        function nextPage() {

            if (!activeBook) {
                return;
            }


            if (
                currentPage >=
                activeBook.totalPages
            ) {
                return;
            }


            currentPage++;


            updateBook();

        }



        /* =====================================================
           Button Events
        ===================================================== */

        if (prevTop) {

            prevTop.addEventListener(
                "click",
                previousPage
            );

        }


        if (prevBottom) {

            prevBottom.addEventListener(
                "click",
                previousPage
            );

        }


        if (nextTop) {

            nextTop.addEventListener(
                "click",
                nextPage
            );

        }


        if (nextBottom) {

            nextBottom.addEventListener(
                "click",
                nextPage
            );

        }


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeBook
            );

        }



        /* =====================================================
           鍵盤控制
           
           ← 上一頁
           → 下一頁
           Esc 關閉
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {


                if (!activeBook) {
                    return;
                }


                const activeElement =
                    document.activeElement;


                const tagName =
                    activeElement
                        ? activeElement.tagName
                        : "";


                if (
                    tagName === "INPUT" ||
                    tagName === "TEXTAREA" ||
                    tagName === "SELECT"
                ) {
                    return;
                }


                if (
                    event.key === "ArrowLeft"
                ) {

                    previousPage();

                }


                if (
                    event.key === "ArrowRight"
                ) {

                    nextPage();

                }


                if (
                    event.key === "Escape"
                ) {

                    closeBook();

                }

            }
        );



        /* =====================================================
           圖片錯誤
        ===================================================== */

        if (image) {

            image.addEventListener(
                "error",
                function () {

                    if (!activeBook) {
                        return;
                    }


                    console.error(
                        "出版品頁面圖片不存在：",
                        image.src
                    );

                }
            );

        }



        /* =====================================================
           初始化
        ===================================================== */

        renderPublications();


    }
);