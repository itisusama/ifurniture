const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');

let counter = 1;

function nextSlide() {
  if (counter < 3) {
    counter++;
  } else {
    counter = 1;
  }
  updateSlider();
}

function prevSlide() {
  if (counter > 1) {
    counter--;
  } else {
    counter = 3;
  }
  updateSlider();
}

function updateSlider() {
  if (counter === 1) {
    slider.style.transition = 'transform 0.5s ease-in-out';
  } else if (counter === 3) {
    // Adjust the transition for the last slide
    slider.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
  } else {
    slider.style.transition = 'none';
  }
  slider.style.transform = 'translateX(' + (-counter * 100) + '%)';
}

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);
