(function () {
  "use strict";

  var items = window.marketGalleryData || [];
  var gallery = document.getElementById("market-gallery");
  var mainImage = document.getElementById("market-main-image");
  var caption = document.getElementById("market-gallery-caption");
  var thumbs = document.getElementById("market-gallery-thumbs");
  var prevButton = document.querySelector(".market-gallery-prev");
  var nextButton = document.querySelector(".market-gallery-next");

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

    if (caption) {
      caption.textContent = item.caption || "";
      caption.hidden = !item.caption;
    }

    thumbButtons.forEach(function (button, i) {
      var active = i === currentIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });

    if (scrollThumb && thumbButtons[currentIndex]) {
      thumbButtons[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }

  items.forEach(function (item, index) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "market-gallery-thumb";
    button.setAttribute("aria-label", "查看市集回顧照片 " + (index + 1));

    var image = document.createElement("img");
    image.src = item.src;
    image.alt = "";
    image.loading = "lazy";

    button.appendChild(image);
    button.addEventListener("click", function () {
      showImage(index, false);
    });

    thumbs.appendChild(button);
    thumbButtons.push(button);
  });

  if (prevButton) prevButton.addEventListener("click", function () {
    showImage(currentIndex - 1, true);
  });

  if (nextButton) nextButton.addEventListener("click", function () {
    showImage(currentIndex + 1, true);
  });

  document.addEventListener("keydown", function (event) {
    if (!gallery.matches(":hover") && !gallery.contains(document.activeElement)) return;
    if (event.key === "ArrowLeft") showImage(currentIndex - 1, true);
    if (event.key === "ArrowRight") showImage(currentIndex + 1, true);
  });

  showImage(0, false);
})();
