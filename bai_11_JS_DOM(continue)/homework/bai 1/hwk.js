const previewButton = document.querySelector("#preview-button");
const previewArea = document.querySelector("#preview");


previewButton.addEventListener("click", () => {
    const textArea = document.querySelector("#html-editor");
    previewArea.innerHTML = textArea.value;
});


