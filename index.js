const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector("div.container");
const grid = document.querySelector("div.grid");
const settingsContainer = document.createElement("div");
const button = document.createElement("button");
const sizeSlider = document.createElement("input");
const sizeText = document.createElement("p");

settingsContainer.className = "settings-container";
container.after(settingsContainer);

function createSizeText(size = parseInt(sizeSlider.value)) {
  sizeText.textContent = `${size} x ${size}`;
  settingsContainer.prepend(sizeText);
}

function createSlider(min, max, step) {
  sizeSlider.type = "range";
  sizeSlider.value = DEFAULT_GRID_SIZE;
  sizeSlider.min = min;
  sizeSlider.max = max;
  sizeSlider.step = step;
  sizeSlider.addEventListener("input", () => {
    createSizeText();
  });
  sizeSlider.addEventListener("mouseup", () => {
    resetGrid();
  });
  settingsContainer.appendChild(sizeSlider);
}

function clearGridContent() {
  grid.innerHTML = "";
}

function resetGrid() {
  clearGridContent();
  createGrid();
}

function createResetButton() {
  button.textContent = "Reset";
  button.onclick = () => {
    resetGrid();
  };
  settingsContainer.appendChild(button);
}

function randomizeColor() {
  let r, g, b, a;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  a = Math.floor(Math.random() * 100);
  return `rgba(${r}, ${g}, ${b},${a})`;
}

function createGrid(size = parseInt(sizeSlider.value)) {
  // prettier-ignore
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = randomizeColor();
    });
    grid.appendChild(div);
  }
  grid.style.gridTemplateColumns = `repeat(${size},2fr)`;
  grid.style.gridTemplateRows = `repeat(${size},2fr)`;
}

createGrid(DEFAULT_GRID_SIZE);
createSlider(2, 100, 2);
createSizeText(DEFAULT_GRID_SIZE);
createResetButton();
