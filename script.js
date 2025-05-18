// FullPage.js inicialização
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  anchors: ['home', 'produtos', 'artigos', 'contato'],
  scrollHorizontally: true
});

// Partículas de fundo
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.25,
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
