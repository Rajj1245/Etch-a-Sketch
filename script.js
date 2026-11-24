const container = document.querySelector("#container");

function CreateGrid(size) {
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    square.classList.add("grid-square");

    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;

    container.appendChild(square);
  }
}

const input = prompt("enter the size of the grid");

const size = parseInt(input);

if (size > 0 && size <= 100) {
  CreateGrid(size);
} else if (input !== null) {
  alert("enter a valid number between 1 and 100");
}
