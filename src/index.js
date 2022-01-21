import { createDivs } from "./createDivs";

const startGame = document.querySelector(".start-game");
const colorPicker = document.getElementById("chosenColor");

startGame.addEventListener("click", createDivs);

colorPicker.addEventListener("change", () =>
  document.documentElement.style.setProperty(
    "--currentColor",
    colorPicker.value
  )
);
