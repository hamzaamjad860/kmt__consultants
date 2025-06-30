let currentIndex = 0;
const slides = document.querySelectorAll("#slider img");
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentIndex = index;
//   const slider = document.getElementById("slider");
//   slider.style.transform = `translateX(-${index * 100}%)`;
const slideWidth = slides[0].clientWidth;
slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex + 1);
}

function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);