let result = 1000;

function add(...numbers) {
    return numbers.reduce((result, elem) => result + elem, 0);
}

const person = {
    firstName: 'Max',
    age: 30
}

// 配列の分割代入も試す
const [e1, e2, ...rest] = ['test1', 'test2', 'test3', 'test4']
