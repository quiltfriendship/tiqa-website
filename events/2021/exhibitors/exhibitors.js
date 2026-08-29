(function () {
    "use strict";

    var data = window.exhibitors2021Data || {};

    function addParagraphs(container, paragraphs) {
        if (!Array.isArray(paragraphs)) return;

        paragraphs.forEach(function (text) {
            var p = document.createElement("p");
            p.textContent = text;
            container.appendChild(p);
        });
    }

    function addContact(container, item) {
        var rows = [];

        if (item.address) rows.push(["地址", item.address]);
        if (item.phone) rows.push(["電話", item.phone]);
        if (item.line) rows.push(["LINE ID", item.line]);

        if (Array.isArray(item.contact)) {
            item.contact.forEach(function (text) {
                rows.push(["", text]);
            });
        }

        if (!rows.length) return;

        var box = document.createElement("div");
        box.className = "exhibitors2021-contact";

        rows.forEach(function (row) {
            var div = document.createElement("div");

            if (row[0]) {
                var strong = document.createElement("strong");
                strong.textContent = row[0];
                div.appendChild(strong);
            }

            var span = document.createElement("span");
            span.textContent = row[1];
            div.appendChild(span);

            box.appendChild(div);
        });

        container.appendChild(box);
    }

    function addSpecial(container, items) {
        if (!Array.isArray(items) || !items.length) return;

        var box = document.createElement("div");
        box.className = "exhibitors2021-special";

        var title = document.createElement("h4");
        title.textContent = "2021 友好拼布手作節－獨家活動";
        box.appendChild(title);

        var ul = document.createElement("ul");

        items.forEach(function (text) {
            var li = document.createElement("li");
            li.textContent = text;
            ul.appendChild(li);
        });

        box.appendChild(ul);
        container.appendChild(box);
    }

    function addLinks(container, links) {
        if (!Array.isArray(links) || !links.length) return;

        var wrap = document.createElement("div");
        wrap.className = "exhibitors2021-links";

        links.forEach(function (item) {
            var a = document.createElement("a");
            a.href = item.url;
            a.target = "_blank";
            a.rel = "noopener";
            a.textContent = item.label;
            wrap.appendChild(a);
        });

        container.appendChild(wrap);
    }

    function renderCards(containerId, items, type) {
        var container = document.getElementById(containerId);

        if (!container || !Array.isArray(items)) return;

        items.forEach(function (item) {
            var article = document.createElement("article");
            article.className =
                "exhibitors2021-card exhibitors2021-card-" + type;

            var media = document.createElement("div");
            media.className = "exhibitors2021-media";

            var img = document.createElement("img");
            img.src = "./" + item.image;
            img.alt = item.name || "";
            img.loading = "lazy";

            media.appendChild(img);

            var content = document.createElement("div");
            content.className = "exhibitors2021-content";

            var title = document.createElement("h3");
            title.textContent = item.name || "";
            content.appendChild(title);

            addContact(content, item);

            var description = document.createElement("div");
            description.className = "exhibitors2021-description";
            addParagraphs(description, item.description);
            content.appendChild(description);

            addSpecial(content, item.special);
            addLinks(content, item.links);

            article.appendChild(media);
            article.appendChild(content);

            container.appendChild(article);
        });
    }

    renderCards("exhibitors2021-brands", data.brands, "brand");
    renderCards("exhibitors2021-studios", data.studios, "studio");
})();
