const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const bodyElement = document.body;

toggleDarkModeButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode');
});
