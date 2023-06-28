const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = document.querySelector('.container-fluid.slider').clientWidth;
const numSlides = slides.children.length;
let currentPosition = 0;

function moveSlides(position) {
  slides.style.transform = `translateX(-${position}px)`;
}

function prevSlide() {
  if (currentPosition > 0) {
    currentPosition -= slideWidth;
  } else {
    currentPosition = (numSlides - 1) * slideWidth;
  }
  moveSlides(currentPosition);
}

function nextSlide() {
  if (currentPosition < (numSlides - 1) * slideWidth) {
    currentPosition += slideWidth;
  } else {
    currentPosition = 0;
  }
  moveSlides(currentPosition);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


// JavaScript code to handle form submission
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission
  
  // get form values
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;
  
  // perform form validation
  if (name.trim() === '' || message.trim() === '') {
    alert('Please fill in all required fields.');
    return;
  }
  
  // perform form submission (this is where you would send the form data to your server-side script or API)
  alert('Form submitted successfully!');
  
  // reset form fields
  form.reset();
});