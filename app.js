let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('carousel-active');
    } else {
      item.classList.remove('carousel-active');
    }
  });

  const itemWidth = items[0].offsetWidth; // Get the width of one carousel item
  const transformValue = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${transformValue}px)`; // Adjust the transform property to move the carousel
}

// Initially call updateCarousel to set the initial active item
updateCarousel();
