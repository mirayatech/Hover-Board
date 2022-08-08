const container = document.getElementById("container");
const color = [
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

  container.appendChild(square);
}
