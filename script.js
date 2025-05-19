tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "#dbeafe" } },
  particles: {
    number: { value: 40 },
    color: { value: ["#1e40af", "#2563eb"] },
    shape: { type: ["circle", "square", "triangle"] },
    opacity: { value: 0.4, random: true },
    size: { value: 6, random: true },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      outModes: { default: "out" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 2 }
    }
  },
  detectRetina: true
});
