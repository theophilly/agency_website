const body = document.body;
const toggle = document.getElementById('nav-icon');

toggle.addEventListener('click', () => {
  body.classList.toggle('active');
});
