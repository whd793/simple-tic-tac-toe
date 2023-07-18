// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const cells = document.querySelectorAll(".cell");
let currentPlayer = "x";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  winningCombinations.forEach((combi) => {
    const check = combi.every((i) => {
      return cells[i].innerText === currentPlayer;
    });
    if (check) {
      console.log("winner is:" + currentPlayer);
      hightlightCell(combi);
    }
    // console.log(check)
  });
}

function hightlightCell(combi) {
  combi.forEach((i) => {
    cells[i].classList.add("highlight");
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (cell.innerText != "") return;
    currentPlayer = currentPlayer == "x" ? "o" : "x";
    cell.innerText = currentPlayer;
    checkWinner();
  });
});
