// === script.js ===
function toggleMenu() {
  const menu = document.querySelector("nav.menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Load Particles.js
window.onload = function () {
  const particlesScript = document.createElement("script");
  particlesScript.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
  particlesScript.onload = () => {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        color: { value: "#1f4fff" },
        line_linked: {
          enable: true,
          color: "#1f4fff",
        },
        move: { speed: 2 },
      },
    });
  };
  document.head.appendChild(particlesScript);
};
