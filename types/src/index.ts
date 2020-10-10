// genericsの例
function reverse<T>(items: T[]): T[] {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

let sample = ['1', '2', '3'];
let reversed = reverse<string>(sample);
// console.log(reversed); // 3,2,1

let sample2 = [1, 2, 3];
let reversed2 = reverse(sample2); // 型推論で返り値の型も  number[] になる
// console.log(reversed); // 3,2,1

// reversed[0] = '1';   // Okay
// reversed[1] = 2;     // Error!
//
// reversed2[0] = 1;    // Okay
// reversed2[1] = '2';  // Error!

// function extractAndConvert<T extends object, U extends keyof T>(obj: T,  key: U) {
//     return 'Value' + obj[key];
// }

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {   // keyof でオブジェクトのキーであることを宣言
    return 'Value' + obj[key];
}

extractAndConvert({name: ''}, 'name');

// generics class
class DataStorage<T> {
    private data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }

    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.add('1');
stringStorage.add('2');
stringStorage.remove('1');
console.log(stringStorage);

const numberStorage = new DataStorage<number>();
numberStorage.add(1);
numberStorage.add(2);
numberStorage.remove(2);
console.log(numberStorage)

class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, private name: string) {
        this.id = id;
        this.name = name;
    }

    describe(this: Department) {
        console.log(this.id, this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

class Accounting extends Department {
    private lastReport: string;

    get mostRecentReport(): string {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found');
    }

    constructor(id: string, private text: string[]) {
        super(id, 'accounting');
        this.text = text;
        this.lastReport = text[0];
    }

    addText(text: string) {
        this.text.push(text);
    }
}

class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const it = new ITDepartment('1', ['Max', 'Sam']);
const accounting = new Accounting('2', ['hello']);


interface Person {
    name: string;
    age?: number;
}

class Man implements Person{
    name: string;
    age: number;
    constructor(name: string = '', age: number = 0) {
        this.name = name;
        this.age = age;
    }
}

function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

