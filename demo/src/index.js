import whenClickedOutside from '../../src/index';

const listener = whenClickedOutside('#element', whenClickedOutsideCallback, {});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i = i + 1 ) {
        color = color + `${letters[Math.floor(Math.random() * 16)]}`;
    }
    return color;
}

function whenClickedOutsideCallback(event) {
    console.log(event);
    document.getElementById('element').style.backgroundColor = getRandomColor();
}