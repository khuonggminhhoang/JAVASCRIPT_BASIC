const divPreviewColor = document.querySelector("#preview-color");
const inputColorPicker = document.querySelector("#color-picker");
inputColorPicker.addEventListener("change", () => {
    divPreviewColor.style.backgroundColor = inputColorPicker.value;
});