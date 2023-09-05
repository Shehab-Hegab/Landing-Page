// Scroll effect for smooth scrolling when clicking on navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  