// Lu's Y2K site tiny script: active nav + sparkles + footer year
(() => {
  const path = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    if (href === path) a.setAttribute("aria-current", "page");
  });

  const y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());

  // Sparkles on click/tap (very subtle, but cute ✨)
  const spawn = (x, y) => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = x + "px";
    s.style.top = y + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 700);
  };

  window.addEventListener("pointerdown", (e) => {
    // don't spam on drag
    if (e.pointerType === "mouse" || e.pointerType === "touch" || e.pointerType === "pen") {
      spawn(e.clientX, e.clientY);
    }
  }, { passive: true });
})();
