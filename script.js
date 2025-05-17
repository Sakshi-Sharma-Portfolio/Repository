// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("Sakshi Sharma's Portfolio Loaded!");

  // Example: Smooth scroll for navigation links (if you add them later)
  // This is just a placeholder to show where JS interactions would go.
  // You would need to add actual navigation links with hrefs like "#about", "#work"
  /*
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  */

  // Add a class to portfolio items for staggered animation if desired via JS
  // (CSS is handling basic stagger with delays for now, but JS can do more complex)
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach((item, index) => {
    // You could, for example, add a delay style directly if not using CSS animation delays
    // item.style.animationDelay = `${index * 0.1 + 1.5}s`; // Ensure this matches your overall animation flow
    // For now, CSS handles this fine. This is just for demonstration.
  });

  // Example: Interactive effect for resume button (e.g., console log on click)
  const resumeButton = document.querySelector('.resume-button');
  if (resumeButton) {
    resumeButton.addEventListener('click', () => {
      console.log('Resume download initiated or link clicked!');
      // Note: The actual download is handled by the `download` attribute in HTML
    });
  }

});
