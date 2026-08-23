(function () {
    "use strict";

    var data = window.ticket2021Data || {};

    var outletContainer =
        document.getElementById("ticket2021-outlets");

    if (
        outletContainer &&
        Array.isArray(data.outlets)
    ) {

        data.outlets.forEach(function (group) {

            var section =
                document.createElement("section");

            section.className =
                "ticket2021-outlet-group";


            var title =
                document.createElement("h3");

            title.textContent =
                group.region || "";


            var ul =
                document.createElement("ul");


            (group.items || []).forEach(function (text) {

                var li =
                    document.createElement("li");

                var parts =
                    text.split("｜");

                parts.forEach(function (part, index) {

                    var span =
                        document.createElement("span");

                    span.textContent =
                        part;

                    span.className =
                        index === 0
                            ? "ticket2021-outlet-name"
                            : "ticket2021-outlet-detail";

                    li.appendChild(span);

                });

                ul.appendChild(li);

            });


            section.appendChild(title);
            section.appendChild(ul);

            outletContainer.appendChild(section);

        });

    }


    var noticeContainer =
        document.getElementById("ticket2021-notices");

    if (
        noticeContainer &&
        Array.isArray(data.notices)
    ) {

        data.notices.forEach(function (text) {

            var li =
                document.createElement("li");

            li.textContent =
                text;

            noticeContainer.appendChild(li);

        });

    }


    var faqContainer =
        document.getElementById("ticket2021-faq");

    if (
        faqContainer &&
        Array.isArray(data.faq)
    ) {

        data.faq.forEach(function (text) {

            var item =
                document.createElement("div");

            item.className =
                "ticket2021-faq-item";

            var p =
                document.createElement("p");

            p.textContent =
                text;

            item.appendChild(p);
            faqContainer.appendChild(item);

        });

    }

})();
