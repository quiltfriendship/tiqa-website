(() => {
  "use strict";
  const photos = Array.isArray(window.event2026Photos) ? window.event2026Photos.filter(p => p && p.src) : [];
  const grid = document.getElementById("photos-grid");
  const empty = document.getElementById("photos-empty");
  const dialog = document.getElementById("photos-lightbox");
  const image = document.getElementById("photos-large");
  const caption = document.getElementById("photos-caption");
  let current = 0;
  let previousFocus = null;
  if (!photos.length) { empty.hidden = false; return; }
  const show = index => {
    current = (index + photos.length) % photos.length;
    image.src = photos[current].src;
    image.alt = photos[current].alt || "2026 曬被節活動照片";
    caption.textContent = photos[current].caption || "";
  };
  const open = index => {
    previousFocus = document.activeElement;
    show(index);
    dialog.hidden = false;
    document.body.classList.add("event2026-photos-modal-open");
    dialog.querySelector(".event2026-photos-close").focus();
  };
  const close = () => {
    dialog.hidden = true;
    document.body.classList.remove("event2026-photos-modal-open");
    image.removeAttribute("src");
    if (previousFocus) previousFocus.focus();
  };
  photos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "event2026-photos-item";
    button.setAttribute("aria-label", "放大照片：" + (photo.alt || `第 ${index + 1} 張`));
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || `2026 曬被節照片 ${index + 1}`;
    img.loading = "lazy";
    button.appendChild(img);
    if (photo.caption) {
      const span = document.createElement("span");
      span.textContent = photo.caption;
      button.appendChild(span);
    }
    button.addEventListener("click", () => open(index));
    grid.appendChild(button);
  });
  dialog.querySelector(".event2026-photos-close").addEventListener("click", close);
  dialog.querySelector(".event2026-photos-prev").addEventListener("click", () => show(current - 1));
  dialog.querySelector(".event2026-photos-next").addEventListener("click", () => show(current + 1));
  dialog.addEventListener("click", e => { if (e.target === dialog) close(); });
  document.addEventListener("keydown", e => {
    if (dialog.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
    if (e.key === "Tab") {
      const buttons = [...dialog.querySelectorAll("button")];
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
