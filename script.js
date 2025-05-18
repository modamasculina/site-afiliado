AOS.init();

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#1f4fff" },
    opacity: { value: 0.5 },
    line_linked: {
      enable: true,
      color: "#1f4fff"
    },
    move: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
