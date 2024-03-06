const openModalButton = document.querySelector("#open");
const closeModalButton = document.querySelector("#close-button");
const modal = document.querySelector("#modal");

openModalButton.addEventListener('click', () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});