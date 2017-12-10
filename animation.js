let menuItems = [];
for (let i = 1; i <= 5; i++) {
    menuItems[i] = document.querySelector('#box' + i);
}

const slide = () => {
    let button = document.querySelector('#button-text');
    button.style.transform += "rotate(180deg)";
    for (let i = 1; i <= 5; i++) {
        menuItems[i].classList.toggle('box--slide-out');
    }
}