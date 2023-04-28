var images = document.querySelectorAll('.slider-image');
var current = 0;
var interval = setInterval(nextSlide, 5000);

function nextSlide() {
  images[current].style.opacity = 0;
  current = (current + 1) % images.length;
  images[current].style.opacity = 1;
}