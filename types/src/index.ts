enum Role {ADMIN = 'administrator', READ_ONLY = 'read-member', AUTHOR = 'author'};

const person
//     : {
//     name: string;
//     age: number;
//     hobbies: string[],
//     role: [number, string]
// }
    = {
    name: 'Alex',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
}

type Combinable = string | number;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultTypes: ConversionDescriptor): string | number {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultTypes === 'as-number') {
        return +input1 + +input2;
    } else if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else {
        return 'error';
    }
}

function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(r: string | number): void {
    console.log(r);
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred', 500);