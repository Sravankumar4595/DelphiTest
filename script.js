 document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // toggle active class on buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        serviceCards.forEach(card => {
          const domain = card.getAttribute('data-domain');

          if (filter === 'all' || filter === domain) {
            card.style.display = '';  // show (default)
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Optionally, trigger “All” by default
    document.querySelector('.filter-btn[data-filter="apps"]').click();
  });