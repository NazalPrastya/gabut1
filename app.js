// Toggle nav
const navItem = document.querySelector('.nav-item');
const hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {
  navItem.classList.toggle('active');
};

// menghilangkan sidebar di luar hamburger
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navItem.contains(e.target)) {
    navItem.classList.remove('active');
  }
});
