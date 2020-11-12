const carousel = document.querySelector("div.scroll");

const text = carousel.querySelectorAll("div");
const textHeight = text.clientHeight;

for (let i = 0; i < 50; i = i + 1) {
  carousel.appendChild(text.cloneNode(true));
}

const movementTimeline = gsap.timeline({
  repeat: -1,
});

movementTimeline
  .set(carousel, { y: 0 })
  .to(carousel, { y: textHeight * -1, duration: 3, ease: "linear" });
