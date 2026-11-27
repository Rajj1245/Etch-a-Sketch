const container = document.querySelector("#container");

const resetbtn = document.querySelector("#btn");

resetbtn.addEventListener("click", () => {
  const inp = prompt("enter the size of the grid");

  const siz = parseInt(inp);

  if (siz > 0 && siz <= 100) {
    container.innerHTML = "";
    container.style.backgroundImage = 'url("./img/pant2.jpg")';
    CreateGrid(siz);
  } else if (inp !== null) {
    alert("enter a valid number between 1 and 100");
  }
});

function changeBgColor(ele) {
  ele.style.backgroundColor = "transparent";
}

function CreateGrid(size) {
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    square.classList.add("grid-square");

    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;

    container.appendChild(square);

    square.addEventListener("mouseover", () => changeBgColor(square));
  }
}
