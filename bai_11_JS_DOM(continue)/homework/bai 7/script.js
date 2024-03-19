(function(){
    const data = [10, 20, 15, 30, 25];

    const chart = document.querySelector('.chart');
    for(let i = 0; i < data.length; ++i){
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = data[i]*10 + 'px';
        chart.appendChild(bar);
    }

    const volume = document.querySelector('#slider');
    volume.addEventListener('input', () => {
        const val = volume.value
        document.querySelector('#value-display').innerHTML = val;
    });

    


})();




