 document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', () => {
        const description = button.previousElementSibling;
        description.classList.toggle('expanded');
        button.textContent = description.classList.contains('expanded') ? 'Read Less' : 'Read More';
      });
    });