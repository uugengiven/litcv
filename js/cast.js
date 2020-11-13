// Infinitely loop/scroll names
// Clone the all the divs inside div.scroll

const divScroll = document.querySelector("div.scroll");

const names = divScroll.querySelectorAll("div");

names.forEach((name) => {
  const namesHeight = name.clientHeight;
  const namesTotal = 12;
  divScroll.appendChild(name.cloneNode(true));

  const movementTimeline = gsap.timeline({
    repeat: -1,
  });

  movementTimeline.set(divScroll, { y: 0 }).to(divScroll, {
    y: namesHeight * namesTotal * -1,
    duration: 45,
    ease: "linear",
  });
  console.log(namesHeight);
});
