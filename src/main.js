const cursor = document.getElementById("cursor");
let mx = -100,
  my = -100;
let cx = -100,
  cy = -100;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

document.addEventListener("mouseleave", () => (cursor.style.opacity = "0"));
document.addEventListener("mouseenter", () => (cursor.style.opacity = "1"));

function tickCursor() {
  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;
  cursor.style.left = cx + "px";
  cursor.style.top = cy + "px";
  requestAnimationFrame(tickCursor);
}
tickCursor();

const hoverTargets = "a, button, .project, .stack-word, [data-hover]";
document.querySelectorAll(hoverTargets).forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("grow"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
});

const revealEls = document.querySelectorAll(".reveal, .reveal-children");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px -60px 0px",
  },
);

revealEls.forEach((el) => observer.observe(el));
