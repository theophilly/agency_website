const body = document.body;
var docWidth = document.documentElement.offsetWidth;
const toggle = document.getElementById('nav-icon');

toggle.addEventListener('click', () => {
  body.classList.toggle('active');
});

[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
