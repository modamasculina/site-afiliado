// Inicializa o FullPage.js
document.addEventListener("DOMContentLoaded", function () {
  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    anchors: ["produtos", "artigos", "contato"],
    navigationTooltips: ["Início", "Artigos", "Contato"],
    showActiveTooltip: true,
    scrollingSpeed: 700,
    controlArrows: false,
    scrollOverflow: true,
  });

  // Funcionalidade do menu hamburguer
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });

  // Fecha o menu ao clicar em qualquer link
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.add("hidden");
    });
  });
});

