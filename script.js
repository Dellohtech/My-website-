// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop - 60, // Offset for the header
          behavior: 'smooth'
      });
  });
});

// Hamburger menu toggle for mobile devices
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Scroll animation on sections
const sections = document.querySelectorAll('.hero, .about, .service, .features');

const options = {
  threshold: 0.5 // The section will trigger when 50% of it is in view
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
      } else {
          entry.target.classList.remove('in-view');
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Add a class for smooth fade-in animations when the sections are in view
document.querySelectorAll('.hero, .about, .service, .features').forEach(section => {
  section.classList.add('fade');
});

// Scroll-to-top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '↑';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Show the scroll-to-top button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
  } else {
      scrollToTopButton.style.display = 'none';
  }
});

// Animation for buttons on hover
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease-in-out';
  });

  button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
  });
});

// Animating statistics (client numbers, transactions, etc.)
const statsCards = document.querySelectorAll('.stats-card p');

const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const statsValue = entry.target.innerText;
          let counter = 0;
          const increment = Math.floor(statsValue / 100);

          const interval = setInterval(() => {
              counter += increment;
              entry.target.innerText = counter;

              if (counter >= statsValue) {
                  clearInterval(interval);
                  entry.target.innerText = statsValue;
              }
          }, 50);
      }
  });
}, { threshold: 0.5 });

statsCards.forEach(card => {
  statsObserver.observe(card);
});

// Carousel functionality (if you want to add a carousel for testimonials, features, etc.)
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel .slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Automatic slide change every 3 seconds

document.querySelector('.carousel .next').addEventListener('click', nextSlide);
document.querySelector('.carousel .prev').addEventListener('click', prevSlide);

// Form validation for Link Account and Payment pages
const form = document.querySelector('.account-form');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');

form.addEventListener('submit', (e) => {
  let isValid = true;

  if (!emailInput.value || !emailInput.value.includes('@')) {
      isValid = false;
      alert('Please enter a valid email address');
  }

  if (passwordInput.value.length < 6) {
      isValid = false;
      alert('Password must be at least 6 characters');
  }

  if (!isValid) {
      e.preventDefault();
  }
});

// Dark/Light mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark mode CSS styles
const darkModeStyles = `
  body.dark-mode {
      background-color: #121212;
      color: #f4f4f4;
  }

  .header, .footer {
      background-color: #333;
  }

  nav a {
      color: #f4f4f4;
  }

  nav a:hover {
      color: #ff5733;
  }

  .service-card, .features-card {
      background-color: #222;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
