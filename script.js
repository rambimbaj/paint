const gridContainer = document.querySelector(".gridContainer");
const newCanvas = document.querySelector(".newCanvas");
newCanvas.addEventListener("click", () => {
  let size = prompt("Size of new canvas?", 16);
  if (size > 100 || size < 0) {
    return alert("Size 0-100 only!");
  } else {
    clearCanvas();
    createCanvas(size);
  }
});
function createCanvas(size) {
  for (i = 0; i < size * size; i++) {
    const divBlocks = document.createElement("div");
    divBlocks.style.height = `${400 / size}px`;
    divBlocks.style.width = `${400 / size}px`;
    divBlocks.className = "blocks";
    gridContainer.appendChild(divBlocks);
  }
  const hover = document.querySelectorAll(".blocks");
  hover.forEach((block) => {
    block.addEventListener("mouseover", () => {
      block.style.backgroundColor = randomColor();
      let blockOpacity = Number(block.style.opacity);
      block.style.opacity = blockOpacity + 0.1;
    });
  });
};
function clearCanvas() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
