document.addEventListener("DOMContentLoaded", function () {
  new fullpage("#fullpage", {
    anchors: ["produtos", "artigos", "contato"],
    navigation: true,
    navigationTooltips: ["Produtos", "Artigos", "Fale Conosco"],
    showActiveTooltip: true,
    autoScrolling: true,
    fitToSection: true,
    scrollOverflow: true
  });

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});
