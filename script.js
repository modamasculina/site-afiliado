// FULLPAGE INIT
document.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['inicio', 'produtos', 'artigos', 'contato'],
    navigationTooltips: ['Início', 'Produtos', 'Artigos', 'Contato'],
    showActiveTooltip: true,
    scrollHorizontally: false
  });

  // MENU HAMBÚRGUER FUNCIONAL
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // FECHAR MENU AO CLICAR EM LINK
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  // PARTICULAS TSPARTICLES
  tsParticles.load('tsparticles', {
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent'
      }
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 }
      },
      color: { value: '#1f4fff' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });
});
