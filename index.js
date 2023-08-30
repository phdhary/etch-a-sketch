const container = document.querySelector("div.container");

function createGrid(size) {
  container.innerHTML = "";
  const total = size * size + size;
  for (let i = 1; i < total; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.classList.add("hover");
    });
    container.appendChild(div);
  }
}

createGrid(16);
