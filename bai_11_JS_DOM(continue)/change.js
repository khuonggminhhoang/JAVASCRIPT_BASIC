const ads_block = document.createElement('div');
ads_block.innerHTML = `
<div id="ads1">
    <button id="close-ads1">X</button>
    <a href="#">
        <img src="https://i.pinimg.com/originals/48/5c/81/485c811a692e5110e4b8bed7c42845ed.jpg" alt="ảnh nha" width="200" height="200">
    </a>
</div>
`;

const ads1 = document.querySelector('#ads1');

body.appendChild(ads_block);
ads_block.style.position = 'fixed';
ads_block.style.inset = 'auto 0 0 auto';

const closeAds1 = ads_block.querySelector('#close-ads1');
console.log(closeAds1);
closeAds1.addEventListener('click', () => {
    console.log('click');
    ads_block.setAttribute('class', 'd-none');
});
