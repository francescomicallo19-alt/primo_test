// Attende il caricamento completo del DOM
document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll fluido per tutti i link interni (#)
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 2. Animazione di comparsa progressiva delle sezioni (Intersection Observer)
  const observerOptions = {
    threshold: 0.15
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.fade-in');
  hiddenElements.forEach(el => revealOnScroll.observe(el));

  // 3. Blocco del tasto destro per scoraggiare l'ispezione immediata
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // 4. Blocco scorciatoie devtools (F12, Ctrl+Shift+I, Ctrl+U)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || (e.shiftKey && (e.key === 'I' || e.key === 'J')))) {
      e.preventDefault();
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.getElementById('dropdownBtn');

  if (dropdown && dropdownBtn) {
    // Apre e chiude al click sul pulsante
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    // Chiude la tendina quando clicchi fuori o su una voce
    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  }
});