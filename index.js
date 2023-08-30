const container = document.querySelector("div.container");

const size = 16;
const total = size * size + size;
for (let i = 1; i < total; i++) {
  const div = document.createElement("div");
  div.addEventListener("mouseover", (ev) => {
    ev.stopPropagation();
    div.classList.add("hover");
  });
  container.appendChild(div);
}
