function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

// Filtro de busca para produtos
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-box");
  const produtos = document.querySelectorAll(".produto");

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.toLowerCase();
    produtos.forEach((produto) => {
      const title = produto.querySelector("h3").textContent.toLowerCase();
      produto.style.display = title.includes(query) ? "block" : "none";
    });
  });
});
