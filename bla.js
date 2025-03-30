document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.add('active');
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.remove('active');
  });
  setTimeout(function() {
    document.getElementById('logo-animation').style.display = 'none';
  }, 4000); // 4 segundos