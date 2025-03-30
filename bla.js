document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.add('active');
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('mobile-overlay').classList.remove('active');
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos
    const logoContainer = document.getElementById('logo-container');
    const linkHeader = document.getElementById('link-header');
    const logoImg = document.getElementById('logo-img');
  
    // Estiliza o contêiner (equivalente ao .logo-container no CSS)
    logoContainer.style.backgroundColor = 'white'; // Fundo branco
    logoContainer.style.width = '100px'; // Tamanho do quadrado
    logoContainer.style.height = '100px'; // Quadrado perfeito
    logoContainer.style.display = 'flex'; // Flexbox para centralizar
    logoContainer.style.justifyContent = 'flex-end'; // Alinha à direita
    logoContainer.style.alignItems = 'center'; // Centraliza verticalmente
    logoContainer.style.borderRadius = '8px'; // Bordas arredondadas
    logoContainer.style.overflow = 'hidden'; // Evita que a logo "vaze"
    logoContainer.style.position = 'relative'; // Para posicionamento relativo
  
    // Estiliza a logo (equivalente ao .logo-img no CSS)
    logoImg.style.width = '80px'; // Tamanho ajustado da logo para caber no contêiner
    logoImg.style.height = 'auto'; // Mantém a proporção
    logoImg.style.display = 'block'; // Remove espaçamento indesejado
    logoImg.style.position = 'relative'; // Permite ajustes de posição
    logoImg.style.right = '-50px'; // Desloca 50px para a direita (simula padding-right: -50px)
  
    // Estiliza o link (equivalente ao .link-header, se necessário)
    linkHeader.style.textDecoration = 'none'; // Remove sublinhado do link
  });