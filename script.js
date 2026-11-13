// Preloader
window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('preloaded');
  }, 1000);
});

// Style Switcher (demo only)
const switcherBtn = document.getElementById('showSwitcher');
const hideSwitcherBtn = document.getElementById('hideSwitcher');
const switcher = document.getElementById('switcher');
if (switcherBtn) {
  switcherBtn.addEventListener('click', function() {
    switcher.classList.add('open');
    switcherBtn.style.display = 'none';
  });
}
if (hideSwitcherBtn) {
  hideSwitcherBtn.addEventListener('click', function() {
    switcher.classList.remove('open');
    switcherBtn.style.display = 'block';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;
  const target = document.querySelector(href);
  if (target) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile menu
      const cb = document.querySelector('#menuToggle input');
      if (cb) cb.checked = false;
    });
  }
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('#main-content > section');
  const navLinks = document.querySelectorAll('.header ul.icon-menu li.icon-box, #menu li');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(li => {
    li.classList.remove('active');
    const link = li.querySelector('a');
    if (link && link.getAttribute('href') === '#' + current) {
      li.classList.add('active');
    }
  });
});

// Portfolio lightbox
document.addEventListener('DOMContentLoaded', function() {
  const portfolioItems = document.querySelectorAll('.portfolio .grid li');
  const slides = document.querySelectorAll('.slideshow ul > li');
  const navPrev = document.querySelector('.nav-prev');
  const navNext = document.querySelector('.nav-next');
  const navClose = document.querySelector('.nav-close');
  let currentSlide = 0;

  portfolioItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      currentSlide = index;
      document.body.classList.add('slideshow-open');
      slides.forEach((slide, i) => {
        slide.classList.toggle('show', i === currentSlide);
        slide.classList.toggle('current', i === currentSlide);
      });
    });
  });

  if (navClose) {
    navClose.addEventListener('click', function() {
      document.body.classList.remove('slideshow-open');
    });
  }
  if (navNext) {
    navNext.addEventListener('click', function() {
      slides[currentSlide].classList.remove('show', 'current');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('show', 'current');
    });
  }
  if (navPrev) {
    navPrev.addEventListener('click', function() {
      slides[currentSlide].classList.remove('show', 'current');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('show', 'current');
    });
  }
});

function setActiveStyleSheet(title) { /* demo only */ }
