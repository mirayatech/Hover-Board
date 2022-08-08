const container = document.getElementById("container");
const colors = [
  "#86E272",
  "#F7A4E0",
  "#6BB4F9",
  "#FFE669",
  "#FFA041",
  "#FF3D3E",
  "#DAA4FF",
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
}

function removeColor(element) {}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
