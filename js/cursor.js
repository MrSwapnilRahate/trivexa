/* ============================================
   TRIVEXA — Custom Cursor
   Premium magnetic cursor effect
   ============================================ */

class CustomCursor {
  constructor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.cursor = document.createElement('div');
    this.cursor.classList.add('custom-cursor');
    this.cursor.style.opacity = '0';
    document.body.appendChild(this.cursor);

    this.pos = { x: -100, y: -100 };
    this.target = { x: -100, y: -100 };
    this.isHover = false;
    this.hasMoused = false;

    document.addEventListener('mousemove', (e) => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      if (!this.hasMoused) {
        this.hasMoused = true;
        this.pos.x = e.clientX;
        this.pos.y = e.clientY;
        this.cursor.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      this.cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (this.hasMoused) {
        this.cursor.style.opacity = '1';
      }
    });

    // Hover targets
    const hoverElements = 'a, button, .service-card, .project-card, .tech-item, .glass-card, .feature-card, .testimonial-card, .process-step, input, textarea';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverElements)) {
        this.cursor.classList.add('custom-cursor--hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverElements)) {
        this.cursor.classList.remove('custom-cursor--hover');
      }
    });

    this.animate();
  }

  animate() {
    // Smooth lerp
    this.pos.x += (this.target.x - this.pos.x) * 0.12;
    this.pos.y += (this.target.y - this.pos.y) * 0.12;

    this.cursor.style.left = this.pos.x + 'px';
    this.cursor.style.top = this.pos.y + 'px';

    requestAnimationFrame(() => this.animate());
  }
}

window.CustomCursor = CustomCursor;

