function openTab(tab){
    const menuItems = document.querySelectorAll('.menu .menu-item')
    
    menuItems.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');

    const contentTabs = document.querySelectorAll('.menu .content-tab');
    contentTabs.forEach(item => item.classList.remove('active'));

    document.querySelector('#' + tab.innerHTML.toLowerCase()).classList.add('active');
}


(function(){
    const menuItems = document.querySelectorAll('.menu .menu-item')
    for(let tab of menuItems){
        tab.addEventListener('click', () => {
            openTab(tab);
        });
    }

})();
