document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.add('active');
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.remove('active');
  });
  document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-img');
    const container = document.querySelector('.logo-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;
  
    // Posiciona a logo no ponto (0,0), que é o centro do quadrado
    logo.style.left = `${containerWidth / 2 - logoWidth / 2}px`;
    logo.style.top = `${containerHeight / 2 - logoHeight / 2}px`;
  });