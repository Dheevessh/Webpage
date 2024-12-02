let currentIndex = 0;  // Track the current slide
const slides = document.querySelectorAll('.slide');  // Get all slide elements

function showNextSlide() {
    // Remove the 'active' class from the current slide
    slides[currentIndex].classList.remove('active');

    // Update the index to the next slide, wrapping around to 0 if at the end
    currentIndex = (currentIndex + 1) % slides.length;

    // Add the 'active' class to the next slide
    slides[currentIndex].classList.add('active');
}

// Change slides every 3 seconds
setInterval(showNextSlide, 3000);
