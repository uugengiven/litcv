// closes snackbar if open when nav menu toggled
const snackBar = document.getElementById('snackbar-container');
function toggleSnackbar() {
  snackBar.classList.contains('snackbar_show')
    ? snackBar.classList.remove('snackbar_show') &
      snackBar.classList.add('snackbar_hidden')
    : null;
}

// select the body tag in the HTML
const bodyTag = document.querySelector('body');
const menuToggle = document.querySelector('a.menu-toggle');

menuToggle.addEventListener('click', function () {
  bodyTag.classList.toggle('nav-open');
  // closes snackbar if open when nav menu toggled
  toggleSnackbar();

  if (bodyTag.classList.contains('nav-open')) {
    gsap.to('.menu-top', { rotation: 45, transformOrigin: '50% 50%', y: 6 });
    gsap.to('.menu-bottom', {
      rotation: -45,
      transformOrigin: '50% 50%',
      y: -6
    });

    const links = document.querySelectorAll('nav a');
    gsap.set(links, { opacity: 0 });

    gsap.to(links, {
      opacity: 1,
      delay: 0.3,
      stagger: 0.17,
      ease: 'sine.in'
    });
  } else {
    gsap.to('.menu-top', { rotation: 0, y: 0 });
    gsap.to('.menu-bottom', {
      rotation: 0,
      y: 0
    });
  }
});
