const navMenu = document.getElementById("navMenu");
const produtosGrid = document.getElementById("produtosGrid");

function toggleMenu() {
  navMenu.classList.toggle("hidden");
}

const produtos = [
  {
    nome: "Camiseta Slim Fit",
    imagem: "https://via.placeholder.com/200x200?text=Camiseta",
    link: "#"
  },
  {
    nome: "Tênis Casual",
    imagem: "https://via.placeholder.com/200x200?text=T%C3%AAnis",
    link: "#"
  },
  {
    nome: "Relógio Minimalista",
    imagem: "https://via.placeholder.com/200x200?text=Rel%C3%B3gio",
    link: "#"
  },
];

function renderizarProdutos(filtro = "") {
  produtosGrid.innerHTML = "";
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <h3>${p.nome}</h3>
      <a href="${p.link}" class="btn">Ver Produto</a>
    `;
    produtosGrid.appendChild(div);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  renderizarProdutos(e.target.value);
});

renderizarProdutos();
