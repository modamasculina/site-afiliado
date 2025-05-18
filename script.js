new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  anchors: ['produtos', 'artigos', 'contato']
});

AOS.init();

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#1f4fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.3,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1f4fff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.4 } },
      push: { particles_nb: 4 },
    }
  },
  retina_detect: true
});

function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}
