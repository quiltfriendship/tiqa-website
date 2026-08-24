(function () {
    "use strict";

    var data = window.ticket2021Data || {};

    var outletContainer = document.getElementById("ticket2021-outlets");

    if (outletContainer && Array.isArray(data.outlets)) {
        data.outlets.forEach(function (group) {
            var section = document.createElement("section");
            section.className = "ticket2021-outlet-group";

            var title = document.createElement("h3");
            title.textContent = group.region || "";

            var ul = document.createElement("ul");

            (group.items || []).forEach(function (text) {
                var li = document.createElement("li");
                var parts = text.split("｜");

                parts.forEach(function (part, index) {
                    var span = document.createElement("span");
                    span.textContent = part;
                    span.className = index === 0
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

    var noticeContainer = document.getElementById("ticket2021-notices");

    if (noticeContainer && Array.isArray(data.notices)) {
        data.notices.forEach(function (text) {
            var li = document.createElement("li");
            li.textContent = text;
            noticeContainer.appendChild(li);
        });
    }

    var faqContainer = document.getElementById("ticket2021-faq");

    if (faqContainer && Array.isArray(data.faq)) {
        data.faq.forEach(function (item, index) {
            var faqItem = document.createElement("article");
            faqItem.className = "ticket2021-faq-item";

            var button = document.createElement("button");
            button.type = "button";
            button.className = "ticket2021-faq-question";

            var answerId = "ticket2021-faq-answer-" + index;

            button.setAttribute("aria-expanded", index === 0 ? "true" : "false");
            button.setAttribute("aria-controls", answerId);

            var questionText = document.createElement("span");
            questionText.textContent = item.question || "";

            var icon = document.createElement("span");
            icon.className = "ticket2021-faq-icon";
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = index === 0 ? "−" : "+";

            button.appendChild(questionText);
            button.appendChild(icon);

            var answer = document.createElement("div");
            answer.className = "ticket2021-faq-answer";
            answer.id = answerId;
            answer.hidden = index !== 0;

            (item.answer || []).forEach(function (text) {
                var p = document.createElement("p");
                p.textContent = text;
                answer.appendChild(p);
            });

            if (item.email) {
                var contact = document.createElement("p");
                contact.className = "ticket2021-faq-contact";
                contact.appendChild(document.createTextNode("聯繫信箱："));

                var link = document.createElement("a");
                link.href = "mailto:" + item.email;
                link.textContent = item.email;

                contact.appendChild(link);
                answer.appendChild(contact);
            }

            if (item.note) {
                var note = document.createElement("p");
                note.className = "ticket2021-faq-note";
                note.textContent = item.note;
                answer.appendChild(note);
            }

            button.addEventListener("click", function () {
                var expanded = button.getAttribute("aria-expanded") === "true";
                button.setAttribute("aria-expanded", String(!expanded));
                answer.hidden = expanded;
                icon.textContent = expanded ? "+" : "−";
            });

            faqItem.appendChild(button);
            faqItem.appendChild(answer);
            faqContainer.appendChild(faqItem);
        });
    }
})();