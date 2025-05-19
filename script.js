// Ativa/desativa menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Scroll suave para as seções
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.add('hidden'); // fecha menu após clique
    }
  });
});

// Animação flutuante da logo SVG
function animateLogoFloat() {
  const logo = document.getElementById('hero-logo');
  if (!logo) return;

  let direction = 1;
  let position = 0;

  setInterval(() => {
    position += direction * 0.5;
    if (position > 10 || position < -10) direction *= -1;
    logo.style.transform = `translateY(${position}px)`;
  }, 50);
}

animateLogoFloat();

// Inicializa partículas interligadas
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    }
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#888888"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    links: {
      enable: true,
      distance: 150,
      color: "#aaaaaa",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  detectRetina: true
});
