import { deleteDivs } from "./deleteDivs";
import { createCSSvar } from "./createCSSvar";
const gameSpace = document.querySelector(".game-content");
export function createDivs() {
  deleteDivs();
  //   startGame.classList.add("hidden");
  const divNumber = prompt("Qual o lado do quadrado?");
  if (divNumber > 100 || divNumber <= 0) {
    alert("Por favor digite um número entre 1 e 100");
    return "broken";
  }
  document.documentElement.style.setProperty(
    "--colunas",
    createCSSvar(divNumber)
  );

  for (let i = 0; i < divNumber * divNumber; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("testingColor");
    newDiv.addEventListener("mouseenter", () => {
      newDiv.classList.add("add");
    });
    gameSpace.appendChild(newDiv);
  }
}
