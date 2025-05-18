// FullPage.js inicialização
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  anchors: ['home', 'produtos', 'artigos', 'contato'],
  menu: '#menu',
  scrollHorizontally: true
});

// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  }
});
