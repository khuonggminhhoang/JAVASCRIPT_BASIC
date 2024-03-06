const input = document.querySelector("#text-note");
const addButton = document.querySelector(".add");
const ulList = document.querySelector(".list")

const listItem =(str) => {
    const li = document.createElement("li");
    li.textContent = `${str.toUpperCase()}`;
    li.innerHTML += `<button class="del">Xóa</button>`;
    return li;
} 

addButton.addEventListener("click", () => {
    if(input.value !== ""){
        const li = listItem(input.value);
        input.value = "";
        ulList.appendChild(li);

        li.addEventListener("click", () => {
            li.classList.toggle("complete");
        });

        const delButton = li.querySelector(".del");
        delButton.addEventListener("click", () => {
            ulList.removeChild(li);
        });

    }
});