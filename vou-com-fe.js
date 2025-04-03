// Adiciona estilos globais via JavaScript
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  body * {
    transition: all 0.3s ease;
  }
  #logo-img {
    transition: none !important;
  }
  .bubble {
    position: absolute;
    bottom: -100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: float 10s infinite;
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.5s ease;
  }
  .modal-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  .close-modal {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .modal.show {
    display: flex;
    opacity: 1;
  }
  .modal.show .modal-content {
    transform: scale(1);
  }
  @keyframes float {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
  @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
  @keyframes zoomIn { from { transform: scale(0.8); } to { transform: scale(1); } }
  @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-30px); } 60% { transform: translateY(-15px); } }
  @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
`;
document.head.appendChild(globalStyle);

// 1. Fundo com bolhas flutuantes
const bubblesContainer = document.createElement('div');
bubblesContainer.className = 'bubbles';
bubblesContainer.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: #2d1b4b;
  opacity: 0.8;
`;
document.body.insertBefore(bubblesContainer, document.body.firstChild);

for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  const size = Math.random() * 50 + 20 + 'px';
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.animationDuration = Math.random() * 5 + 5 + 's';
  bubble.style.animationDelay = Math.random() * 5 + 's';
  bubblesContainer.appendChild(bubble);
}

// 2. Modal para produtos
const modal = document.createElement('div');
modal.id = 'productModal';
modal.className = 'modal';
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
const closeModal = document.createElement('span');
closeModal.className = 'close-modal';
closeModal.textContent = '×';
const modalImage = document.createElement('img');
modalImage.id = 'modalImage';
modalImage.className = 'modal-image';
const modalTitle = document.createElement('h2');
modalTitle.id = 'modalTitle';
const modalDescription = document.createElement('p');
modalDescription.id = 'modalDescription';

modalContent.appendChild(closeModal);
modalContent.appendChild(modalImage);
modalContent.appendChild(modalTitle);
modalContent.appendChild(modalDescription);
modal.appendChild(modalContent);
document.body.appendChild(modal);

function openModal(imageSrc, title, description) {
  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.classList.add('show');
}

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 500);
});

closeModal.addEventListener('mouseenter', () => closeModal.style.transform = 'rotate(90deg)');
closeModal.addEventListener('mouseleave', () => closeModal.style.transform = 'rotate(0)');

document.querySelectorAll('.product-item').forEach(item => {
  item.addEventListener('click', () => {
    const imageSrc = item.querySelector('.product-info-img img').src;
    const title = item.querySelector('.title').textContent;
    const description = item.querySelector('.description').textContent;
    openModal(imageSrc, title, description);
  });
});

// 3. Animações (mais de 70)

// Header
const header = document.querySelector('header');
header.style.animation = 'slideInLeft 1s ease';
header.querySelector('h1').style.animation = 'fadeIn 1.5s ease';

// Menu Desktop
document.querySelectorAll('.desktop-nav a').forEach((link, i) => {
  link.style.animation = `zoomIn 0.5s ease ${i * 0.2}s`;
  link.addEventListener('mouseenter', () => link.style.transform = 'scale(1.1)');
  link.addEventListener('mouseleave', () => link.style.transform = 'scale(1)');
});

// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
menuToggle.style.animation = 'pulse 1s infinite';
menuToggle.addEventListener('mouseenter', () => menuToggle.style.transform = 'scale(1.1)');
menuToggle.addEventListener('mouseleave', () => menuToggle.style.transform = 'scale(1)');

const mobileOverlay = document.getElementById('mobile-overlay');
mobileOverlay.style.transition = 'left 0.3s ease';
menuToggle.addEventListener('click', () => mobileOverlay.style.left = '0');
document.querySelector('.close-btn').addEventListener('click', () => mobileOverlay.style.left = '-100%');

document.querySelectorAll('.mobile-nav a').forEach((link, i) => {
  link.style.animation = `slideInRight 0.5s ease ${i * 0.2}s`;
  link.addEventListener('mouseenter', () => link.style.transform = 'translateX(10px)');
  link.addEventListener('mouseleave', () => link.style.transform = 'translateX(0)');
});

// Carrossel
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach((item, i) => {
  item.style.animation = `fadeIn 1s ease ${i * 0.5}s`;
});
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(btn => {
  btn.style.animation = 'bounce 2s infinite';
  btn.addEventListener('mouseenter', () => btn.style.transform = btn.classList.contains('carousel-control-prev') ? 'translateX(-10px)' : 'translateX(10px)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'translateX(0)');
});

// Promoções
const promocoes = document.querySelector('.promocoes');
promocoes.style.animation = 'slideInRight 0.8s ease';
const textPromocoes = document.querySelector('.text-promocoes');
textPromocoes.style.animation = 'fadeIn 1s ease';
textPromocoes.addEventListener('mouseenter', () => textPromocoes.style.transform = 'scale(1.05)');
textPromocoes.addEventListener('mouseleave', () => textPromocoes.style.transform = 'scale(1)');

// Produtos
const productList = document.querySelector('.product-list');
productList.style.animation = 'fadeIn 1s ease';
document.querySelectorAll('.product-item').forEach((item, i) => {
  item.style.animation = `zoomIn 0.5s ease ${i * 0.2}s`;
  item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.05)');
  item.addEventListener('mouseleave', () => item.style.transform = 'scale(1)');

  const img = item.querySelector('.product-info-img img');
  img.style.animation = `pulse 1.5s infinite ${i * 0.3}s`;
  img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.1)');
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

  const title = item.querySelector('.title');
  title.style.animation = `slideInLeft 0.7s ease ${i * 0.2}s`;
  title.addEventListener('mouseenter', () => title.style.transform = 'translateX(5px)');
  title.addEventListener('mouseleave', () => title.style.transform = 'translateX(0)');

  const desc = item.querySelector('.description');
  desc.style.animation = `fadeIn 0.8s ease ${i * 0.3}s`;
  desc.addEventListener('mouseenter', () => desc.style.opacity = '0.8');
  desc.addEventListener('mouseleave', () => desc.style.opacity = '1');

  const btn = item.querySelector('.btn-buy');
  btn.style.animation = `bounce 2s infinite ${i * 0.4}s`;
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});

// Footer
const footer = document.querySelector('footer');
footer.style.animation = 'slideInRight 1s ease';
const footerContact = document.querySelector('.div-contact');
footerContact.style.animation = 'fadeIn 1.2s ease';
document.querySelectorAll('.div-contact p').forEach((p, i) => {
  p.style.animation = `slideInLeft 0.5s ease ${i * 0.2}s`;
  p.addEventListener('mouseenter', () => p.style.transform = 'translateX(5px)');
  p.addEventListener('mouseleave', () => p.style.transform = 'translateX(0)');
});

const socialIcons = document.querySelectorAll('.redes-sociais-footer img');
socialIcons.forEach((icon, i) => {
  icon.style.animation = `rotate 2s infinite ${i * 0.5}s`;
  icon.addEventListener('mouseenter', () => icon.style.transform = 'scale(1.2)');
  icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1)');
});

// Animação de carregamento da página
document.body.style.opacity = '0';
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 1s ease';
  document.body.style.opacity = '1';
});