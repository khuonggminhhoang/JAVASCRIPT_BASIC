// BT1
var fruits = ['apple', 'banana', 'orange'];
localStorage.setItem('fruits', JSON.stringify(fruits));

const saveFruits = localStorage.getItem("fruits");
const getFruits = JSON.parse(saveFruits);
console.log(getFruits);

// BT2
const taskInput = document.querySelector("input[type='text']");
const addButton = document.querySelector("button.add");
const ulList = document.querySelector('#list');

const liItem = (str) => {
    const li = document.createElement('li');
    li.innerHTML = `<span> ${str.toUpperCase()} </span>`;
    li.innerHTML += "<button class='del'>Xóa</button>"
    return li;
}

const drawListItem = (strValue) => {
    const li = liItem(strValue);
        ulList.appendChild(li);
        
        const span = li.querySelector('span')
        span.addEventListener('click', () => {
            span.classList.toggle('complete');
        });

        const delButton = li.querySelector('.del');
        delButton.addEventListener('click', () => {
            ulList.removeChild(li);
        });
}

addButton.addEventListener('click', () => {
    if(taskInput.value){
        drawListItem(taskInput.value);
        taskInput.value = "";
    }
});

const listToDo = ['BTL ATBM', 'BTL AI', 'BTL CSDLPT', 'BTL TTCS', 'BTL WEB', 'BTL NMCNPM'];
localStorage.setItem('listToDo', JSON.stringify(listToDo));

for(let x of JSON.parse(localStorage.getItem('listToDo'))){
    drawListItem(x);
}
