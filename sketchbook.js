const startGame = document.querySelector(".start-game");
const startButton = document.querySelector(".start-button");
const gameSpace = document.querySelector(".game-content");
startGame.addEventListener("click", createDivs);

function createDivs() {
  const divNumber = prompt("Qual o lado do quadrado?");
  if (divNumber > 100 || divNumber <= 0) {
    alert("Por favor digite um número entre 1 e 100");
  }
  document.documentElement.style.setProperty(
    "--colunas",
    createCSSvar(divNumber)
  );

  for (let i = 0; i < divNumber * divNumber; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("testingColor");
    gameSpace.appendChild(newDiv);
  }
}

function createCSSvar(quantosFRs) {
  let numeroFRs = "";

  for (let i = 0; i < quantosFRs; i++) {
    numeroFRs += " 1fr";
  }
  return numeroFRs;
}
