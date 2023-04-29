const screen = document.querySelector(".screen");
const resetBtn = document.querySelector("#reset");
const userColor = document.getElementById("userColor")

function createGrid(size) {
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  screen.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    screen.appendChild(square);
  }
}

const grid = 16;
createGrid(grid);

screen.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = userColor.value;
  }
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
});