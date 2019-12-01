interface Person {
    firstName: string;
    lastName: string;
    age: number;
    FullName();
    getAge();
}

class Employee implements Person {
    firstName: string;
    lastName: string;
    age:number;
    FullName() {
        return this.firstName + ' '+ this.lastName;
    }
    getAge() {
        return this.age;
    }

    constructor(firstN: string, lastN: string,getAge: number) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}

let myEmployee = new Employee('Chaman','Bharti',30);
let fullName = myEmployee.FullName();
let Age = myEmployee.getAge();
console.log("Name of Person: "+fullName+'\nAge: '+Age);