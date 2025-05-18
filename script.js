// Menu Hambúrguer toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("hidden");
});

// FullPage init
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  navigationTooltips: ['Início', 'Produtos', 'Artigos', 'Contato'],
  showActiveTooltip: true,
  anchors: ['inicio', 'produtos', 'artigos', 'contato'],
  scrollingSpeed: 800
});

// Partículas com brilho pastel
tsParticles.load("tsparticles", {
  background: {
    color: { value: "transparent" }
  },
  particles: {
    number: { value: 50 },
    color: { value: "#a0c4ff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      outModes: "bounce"
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    }
  },
  fullScreen: { enable: false }
});
