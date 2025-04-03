// Adiciona estilo global para transições suaves em todos os elementos, exceto na logo
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  body * {
    transition: all 0.3s ease;
  }
  #logo-img {
    transition: none !important;
  }
`;
document.head.appendChild(globalStyle);

// Animação do Carrossel
const carousel = document.getElementById('carouselExampleInterval');
if (carousel) {
  carousel.classList.add('carousel-fade');
  const carouselStyles = document.createElement('style');
  carouselStyles.innerHTML = `
    .carousel-item {
      transition: transform 0.6s ease, opacity 0.6s ease;
    }
    .carousel-item-next,
    .carousel-item-prev,
    .carousel-item.active {
      transform: translateX(0);
      opacity: 1;
    }
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
      transform: translateX(0);
      opacity: 1;
    }
    .carousel-item-right.active,
    .carousel-item-next {
      transform: translateX(100%);
      opacity: 0;
    }
    .carousel-item-left.active,
    .carousel-item-prev {
      transform: translateX(-100%);
      opacity: 0;
    }
    .carousel-control-prev,
    .carousel-control-next {
      transition: transform 0.3s ease;
    }
    .carousel-control-prev:hover {
      transform: translateX(-10px);
    }
    .carousel-control-next:hover {
      transform: translateX(10px);
    }
  `;
  document.head.appendChild(carouselStyles);
}

// Animação do Título "WB Segurança Eletrônica" (header h1)
const h1 = document.querySelector('header h1');
if (h1) {
  h1.style.opacity = '0';
  h1.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    h1.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    h1.style.opacity = '1';
    h1.style.transform = 'translateY(0)';
  }, 100);
}

// Animação do Menu Desktop
const desktopLinks = document.querySelectorAll('.desktop-nav a');
desktopLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.color = '#28a745'; // Ajuste a cor conforme o design
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.color = ''; // Volta à cor original
  });
});

// Animação do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeBtn = document.querySelector('.close-btn');

if (menuToggle && mobileOverlay) {
  menuToggle.addEventListener('click', () => {
    mobileOverlay.style.left = '0';
  });
}
if (closeBtn && mobileOverlay) {
  closeBtn.addEventListener('click', () => {
    mobileOverlay.style.left = '-100%';
  });
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.transform = 'rotate(90deg)';
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.transform = 'rotate(0deg)';
  });
}

const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateX(10px)';
    link.style.color = '#28a745'; // Ajuste a cor
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateX(0)';
    link.style.color = ''; // Volta à cor original
  });
});

// Animação do Título "Promoções"
const promocoes = document.querySelector('.promocoes');
if (promocoes) {
  promocoes.style.opacity = '0';
  promocoes.style.transform = 'translateX(-50px)';
  setTimeout(() => {
    promocoes.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    promocoes.style.opacity = '1';
    promocoes.style.transform = 'translateX(0)';
  }, 200);
}

const textPromocoes = document.querySelector('.text-promocoes');
if (textPromocoes) {
  textPromocoes.addEventListener('mouseenter', () => {
    textPromocoes.style.color = '#28a745'; // Ajuste a cor
  });
  textPromocoes.addEventListener('mouseleave', () => {
    textPromocoes.style.color = ''; // Volta à cor original
  });
}

// Animação dos Produtos
const productList = document.querySelector('.product-list');
if (productList) {
  productList.style.opacity = '0';
  setTimeout(() => {
    productList.style.transition = 'opacity 1s ease';
    productList.style.opacity = '1';
  }, 300);
}

const productItems = document.querySelectorAll('.product-item');
productItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'scale(0.9)';
  setTimeout(() => {
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    item.style.opacity = '1';
    item.style.transform = 'scale(1)';
  }, 400 + index * 100);

  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });

  const img = item.querySelector('.product-info-img img');
  if (img) {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  }

  const btn = item.querySelector('.btn-buy');
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  }

  const priceIns = item.querySelector('.price ins');
  if (priceIns) {
    item.addEventListener('mouseenter', () => {
      priceIns.style.color = '#28a745'; // Ajuste a cor
    });
    item.addEventListener('mouseleave', () => {
      priceIns.style.color = ''; // Volta à cor original
    });
  }
});

// Animação do Footer
const footer = document.querySelector('footer');
if (footer) {
  footer.style.opacity = '0';
  setTimeout(() => {
    footer.style.transition = 'opacity 1s ease';
    footer.style.opacity = '1';
  }, 500);
}

const fechamentoFooter = document.querySelector('.fechamento-footer-green');
if (footer && fechamentoFooter) {
  footer.addEventListener('mouseenter', () => {
    fechamentoFooter.style.backgroundColor = '#218838'; // Tom mais escuro
  });
  footer.addEventListener('mouseleave', () => {
    fechamentoFooter.style.backgroundColor = ''; // Volta ao original
  });
}

const divContact = document.querySelector('.div-contact');
const tituloContact = document.querySelector('.titulo-contact-us');
if (divContact && tituloContact) {
  divContact.addEventListener('mouseenter', () => {
    tituloContact.style.color = '#28a745'; // Ajuste a cor
  });
  divContact.addEventListener('mouseleave', () => {
    tituloContact.style.color = ''; // Volta ao original
  });
}

const contactParagraphs = document.querySelectorAll('.div-contact p');
contactParagraphs.forEach(p => {
  p.addEventListener('mouseenter', () => {
    p.style.transform = 'translateX(5px)';
  });
  p.addEventListener('mouseleave', () => {
    p.style.transform = 'translateX(0)';
  });
});

const socialIcons = document.querySelectorAll('.redes-sociais-footer img');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});

// Animação de Carregamento da Página
const fadeInStyle = document.createElement('style');
fadeInStyle.innerHTML = `
  body {
    opacity: 0;
    transition: opacity 1s ease;
  }
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(fadeInStyle);

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});