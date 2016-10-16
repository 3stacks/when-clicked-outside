import whenClickedOutside from '../../../src/index';

const listener = whenClickedOutside('#element', whenClickedOutsideCallback, {});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
        color = color + `${letters[Math.floor(Math.random() * 16)]}`;
    }
    return color;
}

function whenClickedOutsideCallback(event) {
    console.log(event);
    document.getElementById('element').setAttribute('style', `background-color:${getRandomColor()}`);
}