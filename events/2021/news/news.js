(function () {
    "use strict";

    var items = window.news2021Data || [];
    var list = document.getElementById("news2021-list");

    if (!list || !Array.isArray(items) || !items.length) {
        return;
    }

    function appendLinks(container, links, className, external) {
        if (!Array.isArray(links) || !links.length) return;

        var group = document.createElement("div");
        group.className = className;

        links.forEach(function (item) {
            var a = document.createElement("a");
            a.href = item.url || "#";
            a.textContent = item.label || "查看連結";

            if (external) {
                a.target = "_blank";
                a.rel = "noopener";
            }

            group.appendChild(a);
        });

        container.appendChild(group);
    }

    function appendImages(container, images, title) {
        if (!Array.isArray(images) || !images.length) return;

        var gallery = document.createElement("div");
        gallery.className = images.length > 1
            ? "news2021-image-grid"
            : "news2021-image-single";

        images.forEach(function (src, imageIndex) {
            var img = document.createElement("img");
            img.src = src;
            img.alt = (title || "2021 最新消息") +
                (images.length > 1 ? "－照片 " + (imageIndex + 1) : "");
            img.loading = "lazy";
            gallery.appendChild(img);
        });

        container.appendChild(gallery);
    }

    items.forEach(function (item, index) {

        var article = document.createElement("article");
        article.className = "news2021-item";

        var meta = document.createElement("div");
        meta.className = "news2021-item-meta";

        var date = document.createElement("time");
        date.textContent = item.date || "";
        date.setAttribute(
            "datetime",
            (item.date || "").replace(/\//g, "-")
        );

        var category = document.createElement("span");
        category.textContent = item.category || "";

        meta.appendChild(date);
        meta.appendChild(category);

        var title = document.createElement("h3");
        title.textContent = item.title || "";

        var button = document.createElement("button");
        button.type = "button";
        button.className = "news2021-toggle";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "news2021-body-" + index);
        button.textContent = "閱讀全文 ＋";

        var body = document.createElement("div");
        body.className = "news2021-item-body";
        body.id = "news2021-body-" + index;
        body.hidden = true;

        appendImages(body, item.images, item.title);

        if (Array.isArray(item.paragraphs)) {
            item.paragraphs.forEach(function (text) {
                var p = document.createElement("p");
                p.textContent = text;
                body.appendChild(p);
            });
        }

        appendLinks(
            body,
            item.links,
            "news2021-related-links",
            false
        );

        appendLinks(
            body,
            item.externalLinks,
            "news2021-external-links",
            true
        );

        if (Array.isArray(item.hashtags) && item.hashtags.length) {
            var tags = document.createElement("p");
            tags.className = "news2021-hashtags";
            tags.textContent = item.hashtags.join("　");
            body.appendChild(tags);
        }

        if (item.note) {
            var note = document.createElement("p");
            note.className = "news2021-note";
            note.textContent = item.note;
            body.appendChild(note);
        }

        button.addEventListener("click", function () {
            var expanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

            body.hidden = expanded;

            button.textContent =
                expanded
                    ? "閱讀全文 ＋"
                    : "收合內容 −";
        });

        article.appendChild(meta);
        article.appendChild(title);
        article.appendChild(button);
        article.appendChild(body);

        list.appendChild(article);
    });

})();
