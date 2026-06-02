document.addEventListener('DOMContentLoaded', () => {

  /* ============================================
     TYPEWRITER EFFECT
     ============================================ */
  const typewriter = {
    elements: [],
    speed: 60,
    audio: null,
    started: false,

    init() {
      if (this.started) return;
      this.started = true;

      const el = document.querySelector('[data-typewriter]');
      if (!el) return;

      const text = el.textContent;
      el.textContent = '';
      el.style.visibility = 'visible';

      this.audio = new Audio('src/audios/sound-maquina-de-escribir.mp3');
      this.audio.volume = 0.15;

      const cursor = document.querySelector('[data-cursor]');
      this.type(el, text, 0, cursor, () => this.typeSubtitle());
    },

    type(el, text, index, cursor, onComplete) {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        this.playTick();
        index++;
        const delay = text.charAt(index - 1) === ' ' ? this.speed * 2 : this.speed;
        setTimeout(() => this.type(el, text, index, cursor, onComplete), delay);
      } else {
        if (cursor) {
          cursor.style.animation = 'blink 1s step-end infinite';
        }
        if (onComplete) onComplete();
      }
    },

    playTick() {
      if (this.audio) {
        this.audio.currentTime = 0;
        this.audio.play().catch(() => {});
      }
    },

    typeSubtitle() {
      const el = document.querySelector('[data-typewriter-sub]');
      if (!el) return;
      const text = el.dataset.text || el.textContent;
      el.textContent = '';
      el.style.visibility = 'visible';

      this.type(el, text, 0);
    }
  };

  /* ============================================
     MOBILE NAV
     ============================================ */
  const nav = {
    init() {
      this.toggle = document.querySelector('.nav__toggle');
      this.menu = document.querySelector('.nav__group');
      this.overlay = document.querySelector('.nav__overlay');

      if (!this.toggle || !this.menu) return;

      this.toggle.addEventListener('click', () => this.toggleMenu());
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.closeMenu());
      }

      document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeMenu();
      });
    },

    toggleMenu() {
      this.toggle.classList.toggle('active');
      this.menu.classList.toggle('active');
      if (this.overlay) this.overlay.classList.toggle('active');
      document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
    },

    closeMenu() {
      this.toggle.classList.remove('active');
      this.menu.classList.remove('active');
      if (this.overlay) this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  /* ============================================
     SCROLL ANIMATIONS
     ============================================ */
  const scrollAnim = {
    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('stagger')) {
              entry.target.classList.add('visible');
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      document.querySelectorAll('.fade-in, .fade-in--left, .fade-in--right, .stagger')
        .forEach(el => observer.observe(el));
    }
  };

  /* ============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============================================
     INIT
     ============================================ */
  nav.init();
  scrollAnim.init();

  // Start typewriter on first user interaction (required for audio autoplay)
  const start = () => {
    typewriter.init();
    document.removeEventListener('click', start);
    document.removeEventListener('touchstart', start);
    document.removeEventListener('keydown', start);
  };
  document.addEventListener('click', start);
  document.addEventListener('touchstart', start);
  document.addEventListener('keydown', start);

  // Try starting immediately — browsers that allow autoplay will work
  setTimeout(start, 800);

  // Add current year to footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
