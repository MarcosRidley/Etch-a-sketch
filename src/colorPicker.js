export const colorPicker = document.getElementById("chosenColor");
colorPicker.addEventListener("change", (event) =>
  document.documentElement.style.setProperty(
    "--currentColor",
    colorPicker.value
  )
);
