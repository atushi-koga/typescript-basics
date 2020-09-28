"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked:' + message);
}
function addition(num1, num2) {
    switch (num1) {
        case 1:
        case 2:
            console.log(num1);
            break;
        case 3:
            console.log(num2);
            break;
        default:
            console.log(num1 + num2);
    }
}
console.log(addition(1, 2));
button.addEventListener('click', clickHandler.bind(null, 'welcome'));
