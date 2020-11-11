const carousels = document.querySelectorAll("li");

const fadeInTimeline = gsap.timeline();

// fade in header on page load
fadeInTimeline
  // fadeout tags
  .set(carousels, { opacity: 0 })
  .to(carousels, { opacity: 1, delay: 1, duration: 1 });

carousels.forEach((carousel) => {
  // get span tag height
  const spanTag = carousel.querySelectorAll("span");
  const spanHeight = spanTag.clientHeight;

  // generate multiple span tags
  for (let i = 0; i < 50; i = i + 1) {
    carousel.appendChild(spanTag.cloneNode(true));
  }

  const movementTimeline = gsap.timeline({
    repeat: -1,
  });
  // making header text move
  movementTimeline
    .set(carousel, { y: 0 })
    .to(carousel, { y: spanHeight * -1, duration: 6, ease: "linear" });
});
