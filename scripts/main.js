// Copy email to clipboard
function copyEmail(btn) {
  navigator.clipboard.writeText('cole_davis@brown.edu').then(function () {
    btn.classList.add('copied');
    setTimeout(function () {
      btn.classList.remove('copied');
    }, 2000);
  });
}

// Mobile nav toggle
function toggleNav() {
  var nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('#main-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.getElementById('main-nav').classList.remove('open');
    });
  });
});
