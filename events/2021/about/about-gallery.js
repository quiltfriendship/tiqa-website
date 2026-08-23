(function () {
    "use strict";

    var items = window.about2021GalleryData || [];
    var gallery = document.getElementById("about2021-gallery");
    var mainImage = document.getElementById("about2021-main-image");
    var thumbs = document.getElementById("about2021-gallery-thumbs");
    var prevButton = document.querySelector(".about2021-gallery-prev");
    var nextButton = document.querySelector(".about2021-gallery-next");

    if (!gallery || !mainImage || !thumbs || !items.length) {
        if (gallery) gallery.hidden = true;
        return;
    }

    var currentIndex = 0;
    var thumbButtons = [];

    function showImage(index, scrollThumb) {

        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;

        currentIndex = index;

        var item = items[currentIndex];

        mainImage.src = item.src;
        mainImage.alt = item.alt || "";

        thumbButtons.forEach(function (button, i) {
            var active = i === currentIndex;

            button.classList.toggle("is-active", active);
            button.setAttribute(
                "aria-current",
                active ? "true" : "false"
            );
        });

        if (
            scrollThumb &&
            thumbButtons[currentIndex]
        ) {
            thumbButtons[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    items.forEach(function (item, index) {

        var button =
            document.createElement("button");

        button.type = "button";
        button.className =
            "about2021-gallery-thumb";

        button.setAttribute(
            "aria-label",
            "查看 2019 活動回顧照片 " + (index + 1)
        );

        var image =
            document.createElement("img");

        image.src = item.src;
        image.alt = "";
        image.loading = "lazy";

        button.appendChild(image);

        button.addEventListener(
            "click",
            function () {
                showImage(index, false);
            }
        );

        thumbs.appendChild(button);
        thumbButtons.push(button);
    });

    if (prevButton) {
        prevButton.addEventListener(
            "click",
            function () {
                showImage(
                    currentIndex - 1,
                    true
                );
            }
        );
    }

    if (nextButton) {
        nextButton.addEventListener(
            "click",
            function () {
                showImage(
                    currentIndex + 1,
                    true
                );
            }
        );
    }

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !gallery.matches(":hover") &&
                !gallery.contains(document.activeElement)
            ) {
                return;
            }

            if (event.key === "ArrowLeft") {
                showImage(
                    currentIndex - 1,
                    true
                );
            }

            if (event.key === "ArrowRight") {
                showImage(
                    currentIndex + 1,
                    true
                );
            }
        }
    );

    showImage(0, false);

})();
