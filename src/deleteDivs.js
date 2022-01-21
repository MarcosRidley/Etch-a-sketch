export function deleteDivs() {
  const activeDivs = document.querySelectorAll(".testingColor");

  for (let i = 0; i < activeDivs.length; i++) {
    activeDivs[i].remove();
  }
}
