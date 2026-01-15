const links = document.querySelectorAll(".footer-child a");
const indicator = document.querySelector(".footer-child .indicator");

let activeIndex = 0;

// Move indicator visually
function moveIndicator(index) {
  links.forEach((l) => l.classList.remove("active"));
  links[index].classList.add("active");
  const width = indicator.offsetWidth;
  indicator.style.transform = `translateX(${index * width}px)`;
}

// Commit (click / tap)
function setActive(index) {
  activeIndex = index;
  moveIndicator(index);

  links.forEach((l) => l.classList.remove("active"));
  links[index].classList.add("active");
}

// Initial state
setActive(0);
// Hover preview + click lock
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
