var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
var myEmployee = new Employee('Chaman', 'Bharti', 30);
var fullName = myEmployee.FullName();
var Age = myEmployee.getAge();
console.log("Name of Person: " + fullName + '\nAge: ' + Age);
