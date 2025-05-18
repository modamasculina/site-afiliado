// Inicializa o AOS para animações ao rolar
AOS.init();

// Alterna o menu hamburguer
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Inicializa partículas com formas em linhas giratórias
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#1f4fff"
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 6
      },
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  },
  retina_detect: true
});

// Efeito de parallax suave ao rolar
window.addEventListener('scroll', () => {
  const parallaxEls = document.querySelectorAll('.parallax');
  parallaxEls.forEach(el => {
    const speed = el.getAttribute('data-speed');
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// Microinterações com som ao clicar
const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_bff655e417.mp3?filename=click-124467.mp3');
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
