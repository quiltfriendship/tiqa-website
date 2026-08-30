document.addEventListener("DOMContentLoaded", function () {

  const currentContainer =
    document.getElementById("charity-current");

  const endedContainer =
    document.getElementById("charity-ended");

  const currentGroup =
    document.getElementById("charity-current-group");

  const endedGroup =
    document.getElementById("charity-ended-group");


  if (
    typeof charityData === "undefined" ||
    !Array.isArray(charityData)
  ) {
    console.error("charityData 資料不存在或格式不正確");
    return;
  }


  /*
  =========================================================
   只取已上架資料，並依 sort → date 排序
  =========================================================
  */

  const items = charityData
    .filter(function (item) {
      return item.published !== false;
    })
    .sort(function (a, b) {

      const sortA = Number(a.sort || 0);
      const sortB = Number(b.sort || 0);

      if (sortA !== sortB) {
        return sortB - sortA;
      }

      return String(b.date || "")
        .localeCompare(String(a.date || ""));
    });


  const currentItems =
    items.filter(function (item) {
      return item.status === "current";
    });

  const endedItems =
    items.filter(function (item) {
      return item.status !== "current";
    });


  renderList(currentItems, currentContainer);
  renderList(endedItems, endedContainer);


  /*
  =========================================================
   沒資料的分類不顯示
  =========================================================
  */

  if (currentItems.length === 0 && currentGroup) {
    currentGroup.hidden = true;
  }

  if (endedItems.length === 0 && endedGroup) {
    endedGroup.hidden = true;
  }


  /*
  =========================================================
   Render
  =========================================================
  */

  function renderList(data, container) {

    if (!container) {
      return;
    }

    data.forEach(function (item, index) {

      const card =
        document.createElement("article");

      card.className =
        "charity-card";


      /* Image */

      const imageWrap =
        document.createElement("div");

      imageWrap.className =
        "charity-card-image";


      const image =
        document.createElement("img");

      image.src =
        item.image || "./default.jpg";

      image.alt =
        item.imageAlt ||
        item.title ||
        "公益活動";

      image.loading =
        "lazy";


      image.addEventListener(
        "error",
        function () {

          if (image.dataset.fallback === "true") {
            return;
          }

          image.dataset.fallback = "true";
          image.src = "./default.jpg";

        }
      );


      imageWrap.appendChild(image);


      /* Status */

      const badge =
        document.createElement("span");

      badge.className =
        "charity-status " +
        (
          item.status === "current"
            ? "is-current"
            : "is-ended"
        );

      badge.textContent =
        item.status === "current"
          ? "進行中"
          : "已結束";

      imageWrap.appendChild(badge);


      /* Body */

      const body =
        document.createElement("div");

      body.className =
        "charity-card-body";


      if (item.dateText || item.date) {

        const date =
          document.createElement("div");

        date.className =
          "charity-date";

        date.textContent =
          item.dateText || item.date;

        body.appendChild(date);

      }


      const title =
        document.createElement("h3");

      title.className =
        "charity-title";

      title.textContent =
        item.title || "";

      body.appendChild(title);


      if (item.recipient) {

        const recipient =
          document.createElement("p");

        recipient.className =
          "charity-recipient";

        const strong =
          document.createElement("strong");

        strong.textContent =
          "受贈／合作單位｜";

        recipient.appendChild(strong);

        recipient.appendChild(
          document.createTextNode(item.recipient)
        );

        body.appendChild(recipient);

      }


      if (item.summary) {

        const summary =
          document.createElement("p");

        summary.className =
          "charity-summary";

        summary.textContent =
          item.summary;

        body.appendChild(summary);

      }


      /*
      =======================================================
       完整內容
      =======================================================
      */

      if (
        Array.isArray(item.content) &&
        item.content.length > 0
      ) {

        const detailId =
          "charity-detail-" +
          (item.id || index);


        const detailWrap =
          document.createElement("div");

        detailWrap.className =
          "charity-detail-wrap";


        const toggle =
          document.createElement("button");

        toggle.type =
          "button";

        toggle.className =
          "charity-toggle";

        toggle.textContent =
          "閱讀全文";

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );

        toggle.setAttribute(
          "aria-controls",
          detailId
        );


        const detail =
          document.createElement("div");

        detail.id =
          detailId;

        detail.className =
          "charity-detail";

        detail.hidden =
          true;


        item.content.forEach(
          function (paragraph) {

            if (!paragraph) {
              return;
            }

            const p =
              document.createElement("p");

            p.textContent =
              paragraph;

            detail.appendChild(p);

          }
        );


        toggle.addEventListener(
          "click",
          function () {

            const expanded =
              toggle.getAttribute(
                "aria-expanded"
              ) === "true";


            toggle.setAttribute(
              "aria-expanded",
              String(!expanded)
            );

            detail.hidden =
              expanded;

            toggle.textContent =
              expanded
                ? "閱讀全文"
                : "收合內容";

          }
        );


        detailWrap.appendChild(toggle);
        detailWrap.appendChild(detail);

        body.appendChild(detailWrap);

      }


      /*
      =======================================================
       Links
      =======================================================
      */

      if (
        Array.isArray(item.links) &&
        item.links.length > 0
      ) {

        const links =
          document.createElement("div");

        links.className =
          "charity-links";


        item.links.forEach(
          function (linkItem) {

            if (
              !linkItem.url ||
              linkItem.url === "#"
            ) {
              return;
            }


            const link =
              document.createElement("a");

            link.href =
              linkItem.url;

            link.textContent =
              linkItem.label ||
              "活動詳情";


            if (
              /^https?:\/\//i.test(
                linkItem.url
              )
            ) {

              link.target =
                "_blank";

              link.rel =
                "noopener noreferrer";

            }


            links.appendChild(link);

          }
        );


        if (links.children.length > 0) {
          body.appendChild(links);
        }

      }


      card.appendChild(imageWrap);
      card.appendChild(body);

      container.appendChild(card);

    });

  }

});
