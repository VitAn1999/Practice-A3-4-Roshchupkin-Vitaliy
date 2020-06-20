let buttom = document.querySelector('.wrapper-alternative');
buttom.addEventListener('click', showPopup);

function showPopup() {
    let popup = document.querySelector('.wrapper-2');
    popup.classList.toggle('visible');
}

buttom.addEventListener('click', newHeight);

function newHeight() {
    let heightHeader = document.querySelector('.wrapper');
    heightHeader.classList.toggle('wrapper-new-height');
}