// Toggle do menu hambúrguer
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('hidden');
  });
});

// FullPage.js - Scroll entre seções
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['produtos', 'artigos', 'contato'],
  navigationTooltips: ['Produtos', 'Artigos', 'Contato'],
  showActiveTooltip: true,
  scrollOverflow: true
});

// Busca por produto
function filtrarProdutos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const texto = produto.textContent.toLowerCase();
    produto.style.display = texto.includes(input) ? 'block' : 'none';
  });
}

// Partículas no fundo
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60
    },
    "color": {
      "value": "#1e3a8a"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.3
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#1e3a8a",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6
    }
  }
});
