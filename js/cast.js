const carousel = document.querySelector("div.scroll");

const fadeInTimeline = gsap.timeline();

// fade in header on page load
fadeInTimeline
  // fadeout tags
  .set(carousel, { opacity: 0 })
  .to(carousel, { opacity: 1, delay: 1, duration: 1 });

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
  .to(carousel, { y: textHeight * -1, duration: 6, ease: "linear" });
