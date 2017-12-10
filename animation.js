let menuItems = [];
for (let i = 1; i <= 3; i++) {
    menuItems[i] = document.querySelector('#box' + i);
}

const slide = () => {
    for (let i = 1; i <= 3; i++) {
        menuItems[i].classList.toggle('box--slide-out');
    }
}