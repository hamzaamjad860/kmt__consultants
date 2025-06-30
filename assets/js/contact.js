const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('🎉 Thank you! Your message has been sent.');
      form.reset();
    });