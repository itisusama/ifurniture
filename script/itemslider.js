const nslider = document.getElementById('nslider');
  const itemPrevBtn = document.getElementById('itemPrev');
  const itemNextBtn = document.getElementById('itemNext');

  let currentIndex = 0;

  itemNextBtn.addEventListener('click', () => {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updatenSlider();
  });

  itemPrevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = 2;
    }
    updatenSlider();
  });

  function updatenSlider() {
    const translateValue = -currentIndex * 100 + '%';
    nslider.style.transform = 'translateX(' + translateValue + ')';
  }