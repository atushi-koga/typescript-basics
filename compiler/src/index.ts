const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked:' + message);
}

function addition(num1: number, num2: number) {
    switch (num1){
        case 1:
        case 2:
        case 3:
            console.log(num2);
        default:
            console.log(num1 + num2);
    }
}

console.log(addition(1, 2));

button.addEventListener('click', clickHandler.bind(null, 'welcome'));
