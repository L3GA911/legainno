// Hamburger menü ikonnal való interakció
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle 'active' osztály hozzáadása vagy eltávolítása
  navLinks.classList.toggle('active');
});

// Válaszd ki a header elemet
const header = document.querySelector('header');

// Görgetés esemény kezelése
window.addEventListener('scroll', () => {
    // Ha a scroll pozíció nagyobb, mint 0 (vagyis görgettek), hozzáadjuk a 'scrolled' osztályt
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    const icon = acc.querySelector('.plus-icon');

    header.addEventListener('click', () => {
      const isOpen = acc.classList.contains('open');

      // Először minden mást bezárunk
      accordions.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.plus-icon').textContent = '+';
      });

      // Ha nem volt nyitva, most nyitjuk ki és cseréljük a jelet
      if (!isOpen) {
        acc.classList.add('open');
        icon.textContent = '−';
      }
    });
  });

  const swiper = new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
