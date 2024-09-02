// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentIndex - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentIndex + 1));

// Automatic slide change every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Replace with actual payment gateway logic
    alert('Form has been submitted. Thank you!');
});
