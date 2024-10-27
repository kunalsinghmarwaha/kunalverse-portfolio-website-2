const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling with reduced delay
window.addEventListener('wheel', function (event) {
  let scrollAmount = 150; // Reduced scroll increment for smoother behavior
  if (event.deltaY < 0) {
      window.scrollBy({ top: -scrollAmount, left: 0, behavior: 'smooth' }); // Scroll up
  } else {
      window.scrollBy({ top: scrollAmount, left: 0, behavior: 'smooth' }); // Scroll down
  }
});


// Form submission message
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
});

window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  container.classList.add('fade-in');
});
