// Ativando o menu hamburguer
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// AOS animações
AOS.init({
  duration: 1000,
  once: true,
});

// Partículas no fundo
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@master/demo/particles.json');

// FullPage scroll
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['produtos', 'artigos', 'contato'],
  navigationTooltips: ['Produtos', 'Artigos', 'Contato'],
  showActiveTooltip: true,
});
