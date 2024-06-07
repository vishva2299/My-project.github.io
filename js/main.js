// Accordion functional
function toggleAccordion(element) {
    element.classList.toggle('active');
    var content = element.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        element.parentElement.style.backgroundColor = ""; // Reset background color
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        element.parentElement.style.backgroundColor = "#baff66"; // Change to your desired color
    }
}


// Testimonial slider functional
const carouselSlide = document.querySelector('.testimonial-slide');
const testimonials = document.querySelectorAll('.testimonial-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 1;

function showSlide(index) {
    if (index >= testimonials.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = testimonials.length - 1;
    } else {
        currentIndex = index;
    }
    carouselSlide.style.transform = `translateX(${-currentIndex * 50}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

function currentSlide(index) {
    showSlide(index - 1);
}

showSlide(currentIndex);
