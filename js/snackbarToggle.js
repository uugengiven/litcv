const snackbarIcon = document.querySelector('.snackbar-icon');
const snackbarContainer = document.querySelector('#snackbar-container');
function closeSnackbar() {
  snackbarContainer.classList.contains('snackbar_show')
    ? snackbarContainer.classList.remove('snackbar_show') &
      snackbarContainer.classList.add('snackbar_hidden')
    : null;
}
