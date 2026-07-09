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
     RENDER PROJECT CARDS
     ============================================ */
  const projectsList = document.getElementById('projects-list');
  if (projectsList) {
    projectsList.innerHTML = PROJECTS.map(p => `
      <article class="project-item fade-in" data-project="${p.id}" tabindex="0" role="button" aria-label="Ver detalle de ${p.title}">
        <div class="project-item__link">
          <img class="project-item__image" src="${p.image}" alt="${p.title}" loading="lazy">
          <div>
            <h2 class="project-item__title">${p.title}</h2>
            <p class="project-item__description">${p.description}</p>
          </div>
        </div>
      </article>
    `).join('');
  }

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

  /* ============================================
     PROJECT MODAL
     ============================================ */
  const modal = {
    init() {
      this.overlay = document.querySelector('.modal-overlay');
      this.el = document.querySelector('.modal');
      if (!this.overlay || !this.el) return;

      this.image = this.el.querySelector('.modal__image');
      this.title = this.el.querySelector('.modal__title');
      this.sections = this.el.querySelector('.modal__sections');
      this.actions = this.el.querySelector('.modal__actions');
      this.closeBtn = this.el.querySelector('.modal__close');

      this.el.addEventListener('click', (e) => {
        if (e.target === this.el) this.close();
      });
      this.closeBtn.addEventListener('click', () => this.close());
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.el.classList.contains('active')) this.close();
      });

      this.sections.addEventListener('click', (e) => {
        const header = e.target.closest('.modal__section-header');
        if (header) this.toggleSection(header);
      });

      this.sections.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.modal__section-header')) {
          e.preventDefault();
          this.toggleSection(e.target.closest('.modal__section-header'));
        }
      });
    },

    toggleSection(header) {
      const content = header.nextElementSibling;
      if (!content) return;
      header.classList.toggle('is-open');
      content.classList.toggle('is-open');
    },

    open(projectId) {
      const project = PROJECTS.find(p => p.id === projectId);
      if (!project) return;

      this.image.src = project.image;
      this.image.alt = `Vista previa de ${project.title}`;
      this.title.textContent = project.title;

      this.sections.innerHTML = project.sections.map(s => {
        let html = '';
        if (s.type === 'text') {
          html = `<p>${s.content}</p>`;
        } else if (s.type === 'list') {
          html = `<ul class="modal__tech-list">${s.content.map(i => `<li>${i}</li>`).join('')}</ul>`;
        } else if (s.type === 'links') {
          const links = [];
          if (s.content.demo) links.push(`<a href="${s.content.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">Demo</a>`);
          if (s.content.github) links.push(`<a href="${s.content.github}" class="btn btn--outline btn--sm" target="_blank" rel="noopener">GitHub</a>`);
          html = `<div class="modal__links">${links.join('')}</div>`;
        }
        return `<div class="modal__section"><div class="modal__section-header" role="button" tabindex="0"><span>${s.title}</span></div><div class="modal__section-content">${html}</div></div>`;
      }).join('');

      this.actions.innerHTML = project.url
        ? `<a href="${project.url}" class="btn btn--primary" target="_blank" rel="noopener">Visitar proyecto &#8594;</a>`
        : '';

      this.overlay.classList.add('active');
      this.overlay.setAttribute('aria-hidden', 'false');
      this.el.classList.add('active');
      this.el.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    },

    close() {
      this.overlay.classList.remove('active');
      this.overlay.setAttribute('aria-hidden', 'true');
      this.el.classList.remove('active');
      this.el.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  /* ============================================
     PROJECT CARD CLICKS
     ============================================ */
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project]');
    if (!card) return;
    e.preventDefault();
    modal.open(card.dataset.project);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-project]');
      if (!card || document.querySelector('.modal.active')) return;
      e.preventDefault();
      modal.open(card.dataset.project);
    }
  });

  modal.init();
});
