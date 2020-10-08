class Department {
    constructor(private readonly id: string, private name: string) {
        this.id = id;
        this.name = name;
    }

    describe(this: Department) {
        console.log(this.id, this.name);
    }
}

const accounting = new Department('1', 'Accounting');

accounting.describe();