const screen = document.querySelector(".screen")

function createGrid(size) {
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  screen.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    screen.appendChild(square);
  }
}

grid = 16
createGrid(grid);