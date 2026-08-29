(function () {
    "use strict";

    var data = window.exhibitors2021Data || {};

    function renderCards(containerId, items, type) {
        var container = document.getElementById(containerId);

        if (!container || !Array.isArray(items)) {
            return;
        }

        items.forEach(function (item) {
            var article = document.createElement("article");
            article.className = "exhibitors2021-card " + (
                type === "brand"
                    ? "exhibitors2021-card-brand"
                    : "exhibitors2021-card-studio"
            );

            var imageLink = document.createElement("a");
            imageLink.className = "exhibitors2021-image";
            imageLink.href = "./" + item.image;
            imageLink.target = "_blank";
            imageLink.rel = "noopener";

            var image = document.createElement("img");
            image.src = "./" + item.image;
            image.alt = item.name || "";
            image.loading = "lazy";

            imageLink.appendChild(image);

            var body = document.createElement("div");
            body.className = "exhibitors2021-card-body";

            var title = document.createElement("h3");
            title.textContent = item.name || "";

            var description = document.createElement("p");
            description.textContent = item.description || "";

            body.appendChild(title);
            body.appendChild(description);

            article.appendChild(imageLink);
            article.appendChild(body);

            container.appendChild(article);
        });
    }

    renderCards("exhibitors2021-brands", data.brands, "brand");
    renderCards("exhibitors2021-studios", data.studios, "studio");
})();
