(function(){
    document.querySelector('.addition').addEventListener('click', ()=> {
        const first = document.querySelector('.caculator input:nth-child(2)');
        const second = document.querySelector('.caculator input:nth-child(3)');
        const res = parseFloat(first.value) + parseFloat(second.value);
        document.querySelector('.result').innerHTML =`<b>${'Kết quả: ' + res}</b>`;
    })

    document.querySelector('.subtract').addEventListener('click', ()=> {
        const first = document.querySelector('.caculator input:nth-child(2)');
        const second = document.querySelector('.caculator input:nth-child(3)');
        const res = parseFloat(first.value) - parseFloat(second.value);
        document.querySelector('.result').innerHTML =`<b>${'Kết quả: ' + res}</b>`;
    })

    document.querySelector('.multiply').addEventListener('click', ()=> {
        const first = document.querySelector('.caculator input:nth-child(2)');
        const second = document.querySelector('.caculator input:nth-child(3)');
        const res = parseFloat(first.value) * parseFloat(second.value);
        document.querySelector('.result').innerHTML =`<b>${'Kết quả: ' + res}</b>`;
    })

    document.querySelector('.divide').addEventListener('click', ()=> {
        const first = document.querySelector('.caculator input:nth-child(2)');
        const second = document.querySelector('.caculator input:nth-child(3)');
        const res = parseFloat(first.value) / parseFloat(second.value);
        document.querySelector('.result').innerHTML =`<b>${'Kết quả: ' + res.toFixed(3)}</b>`;
    })
    
})();