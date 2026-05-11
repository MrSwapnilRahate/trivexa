/* ============================================
   TRIVEXA — Main App Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Loading screen
  const loader = document.querySelector('.loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 800);
  }

  // Initialize systems
  new NavigationController();
  new AnimationController();
  new CustomCursor();

  // Initialize particles on hero
  const particleCanvas = document.getElementById('hero-particles');
  if (particleCanvas) {
    new ParticleSystem('hero-particles');
  }

  // Hero chart SVG animation
  const chartSvg = document.querySelector('.dashboard-chart svg');
  if (chartSvg) {
    chartSvg.style.opacity = '1';
  }
});
