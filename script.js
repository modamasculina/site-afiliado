// === MENU TOGGLE ===
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// === FILTRO POR CATEGORIA ===
function filtrarCategoria(categoria) {
  const produtos = document.querySelectorAll('.produto');
  produtos.forEach(produto => {
    const cat = produto.getAttribute('data-categoria');
    produto.style.display = (categoria === 'todos' || cat === categoria) ? 'block' : 'none';
  });
}

// === BUSCA POR NOME ===
document.getElementById('searchInput').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  document.querySelectorAll('.produto').forEach(produto => {
    const texto = produto.innerText.toLowerCase();
    produto.style.display = texto.includes(termo) ? 'block' : 'none';
  });
});

// === INICIALIZAR AOS (ANIMAÇÕES) ===
AOS.init({
  duration: 1000,
  once: true,
});

// === EFEITO PARALLAX NAS SEÇÕES ===
document.addEventListener('scroll', function () {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.2;
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// === PARTICLES.JS CONFIG ===
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ffff" },
    shape: {
      type: "edge",
      stroke: { width: 0, color: "#000" },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
