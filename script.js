// FullPage.js
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['produtos', 'artigos', 'contato'],
  navigationTooltips: ['Produtos', 'Artigos', 'Contato'],
  showActiveTooltip: true
});

// Menu toggle
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('ativo');
}

// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
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
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.5 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// AOS Init
AOS.init();
