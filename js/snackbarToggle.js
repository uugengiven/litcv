const snackbarIcon = document.querySelector('.snackbar-icon');
const snackbarContainer = document.querySelector('#snackbar-container');

snackbarIcon.addEventListener('click', function () {
  snackbarContainer.classList.remove('snackbar_show');
  snackbarContainer.classList.add('snackbar_hidden');
});
