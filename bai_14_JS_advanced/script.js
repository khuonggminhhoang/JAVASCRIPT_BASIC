// localStorage.setItem('fullName', 'Hoàng Minh Khương');
// console.log(localStorage.getItem('fullName'));

// localStorage.setItem('mode', 'light');

const body = document.getElementsByTagName('body')[0];

document.querySelector('#fullName').innerHTML = localStorage.getItem('fullName');


const currMode = localStorage.getItem('mode');
if(currMode == 'dark'){
    body.setAttribute('class','dark');
}
else {
    body.setAttribute('class','light');
}

const buttonMode = document.querySelector('.change-mode');
buttonMode.addEventListener('click', () => {
    if(localStorage.getItem('mode') === 'light'){
        localStorage.setItem('mode', 'dark');
    }
    else{
        localStorage.setItem('mode', 'light');
    }

    if(localStorage.getItem('mode') == 'light'){
        body.setAttribute('class', 'light');
        document.querySelector('.change-mode').innerHTML = 'Dark Mode';
    }
    else{
        body.setAttribute('class', 'dark');
        document.querySelector('.change-mode').innerHTML = 'Light Mode';
    }
});

