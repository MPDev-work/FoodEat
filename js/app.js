const links = document.querySelectorAll(".footer-child a");
const indicator = document.querySelector(".footer-child .indicator");

let activeIndex = 0;

/* Move indicator to the real link position (responsive) */
function moveIndicator(index) {
  const link = links[index];
  const linkRect = link.getBoundingClientRect();
  const parentRect = link.parentElement.getBoundingClientRect();

  indicator.style.transform = `translateX(${
    linkRect.left - parentRect.left
  }px)`;

  links.forEach((l) => l.classList.remove("active"));
  links[index].classList.add("active");
}

/* Commit (click / tap) */
function setActive(index) {
  activeIndex = index;
  moveIndicator(index);
}

/* Initial state */
setActive(0);

/* Hover preview + click lock */
links.forEach((link, index) => {
  link.addEventListener("mouseenter", () => {
    moveIndicator(index);
  });

  link.addEventListener("mouseleave", () => {
    moveIndicator(activeIndex);
  });

  link.addEventListener("click", (e) => {
    e.preventDefault();
    setActive(index);
  });
});

/* Keep indicator aligned on resize / orientation change */
window.addEventListener("resize", () => {
  moveIndicator(activeIndex);
});
