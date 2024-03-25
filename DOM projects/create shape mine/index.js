const button = document.getElementById("button");
const box = document.getElementById("box");

const shakl = document.getElementById("shakl");
const color = document.getElementById("color");
const width = document.getElementById("width");
const height = document.getElementById("height");
const radius = document.getElementById("radius");

button.addEventListener("click", () => {
  box.style = `
    background-color: ${color.value};
    width: ${width.value}px;
    height: ${height.value}px;
  `;
  if (shakl.value === "square") {
    box.style.borderRadius = "0";
  } else if (shakl.value === "circle") {
    box.style.borderRadius = "50%";
  }
});
