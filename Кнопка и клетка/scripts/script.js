'use strict'

let blocks = document.getElementsByClassName('block');
let square = document.querySelector('.square-body');
let cloneBlock = [...blocks];



// Перемещение блока влево
const moveLeft = (e) => {
    let prevElem = e.previousElementSibling;
    if (prevElem) {
        e.parentNode.insertBefore(e, prevElem);
    }
}
// Перемещение блока вправо
const moveRight = (e) => {
    let nextElem = e.nextElementSibling;
    if (nextElem) {
        e.parentNode.insertBefore(nextElem, e);
    }
}
// Перемещение блока вверх
const moveUp = (e) => {
    let id = Array.from(blocks).findIndex(currentValue => currentValue == e);
    let validId = id - 5;
    if (validId >= 0) {
        blocks[validId].after(blocks[id]);
        blocks[id].after(blocks[validId]);
    }
}
//Перемещение блока вниз
const moveDown = (e) => {
    let id = Array.from(blocks).findIndex(currentValue => currentValue == e);
    let validId = id + 5;
    if (validId <= 25) {
        blocks[id].after(blocks[validId]);
        blocks[validId].after(blocks[id]);
    }
}
// Функция сброса
function reset() {
    cloneBlock.forEach((item) => {
        square.append(item);
    })
}

document.body.addEventListener('click', (e) => {
    if (e.target.closest('.left') && e.target.closest('.block')) {
        let btn = e.target.closest('.left') && e.target.closest('.block');
        moveLeft(btn);
    } else if (e.target.closest('.right') && e.target.closest('.block')) {
        let btn = e.target.closest('.right') && e.target.closest('.block');
        moveRight(btn);
    } else if (e.target.closest('.top') && e.target.closest('.block')) {
        let btn = e.target.closest('.top') && e.target.closest('.block');
        moveUp(btn);
    } else if (e.target.closest('.bottom') && e.target.closest('.block')) {
        let btn = e.target.closest('.bottom') && e.target.closest('.block');
        moveDown(btn);
    } else if (e.target.className === 'btn-reset') {
        reset();
    }
});