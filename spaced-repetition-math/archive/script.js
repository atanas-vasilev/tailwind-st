const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
