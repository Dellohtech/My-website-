// Toggle Mobile Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');  // This will toggle the 'active' class to show/hide the menu on mobile
});

// Smooth Scrolling for Internal Links
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - 50, // Offset the scroll by 50px to avoid covering content under fixed nav
      behavior: 'smooth'
    });
  });
});

// Accordion-style "How to Get Started" Section
const steps = document.querySelectorAll('.features h3');  // Targeting each step in the 'How to Get Started' section

steps.forEach(step => {
  step.addEventListener('click', () => {
    const content = step.nextElementSibling; // Content below the heading (each step content)
    
    // Toggle the display of the content with smooth transition
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    
    // Optional: Adjust style or class for active step if you want
    step.classList.toggle('active');
  });
});
