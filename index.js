const container = document.querySelector("div.container");
const topContainer = document.createElement("div");
const button = document.createElement("button");
const sizeSlider = document.createElement("input");

topContainer.className = "top-container";
container.before(topContainer);

function createSlider(min, max, step) {
  const sizeText = document.createElement("p");
  sizeSlider.type = "range";
  sizeSlider.value = 16;
  sizeSlider.min = min;
  sizeSlider.max = max;
  sizeSlider.step = step;
  sizeSlider.addEventListener("input", () => {
    sizeText.textContent = sizeSlider.value;
  });
  sizeSlider.addEventListener("mouseup", () => {
    createGrid(parseInt(sizeSlider.value));
  });
  sizeText.textContent = sizeSlider.value;
  topContainer.appendChild(sizeText);
  topContainer.appendChild(sizeSlider);
}

function randomizeColor() {
  let r, g, b, a;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  a = Math.floor(Math.random() * 100);
  return `rgba(${r}, ${g}, ${b},${a})`;
}

function createGrid(size) {
  container.innerHTML = "";
  // container.
  // prettier-ignore
  const total = (size * size) + size;
  const modulo = size + 1;
  for (let i = 1; i < total; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = randomizeColor();
    });
    if (i % modulo === 0) {
      div.classList.add("plus-one");
    }
    container.appendChild(div);
  }
  container.style.gridTemplateColumns = `repeat(${modulo},2fr)`;
  container.style.gridTemplateRows = `repeat(${modulo},2fr)`;
}

createSlider(2, 64, 2);
createGrid(parseInt(sizeSlider.value));
