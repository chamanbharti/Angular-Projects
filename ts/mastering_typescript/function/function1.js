//normal function
// function addNumbers(a: number, b: number) : number{
//     return a + b;
// }
// function addNumbers(a: number, b: number) : string{
//     return (a + b).toString();
// }
//annonymous function in js
// var addNumbers = function(a, b){
//     return a + b;
// }
//anonymous function in ts
var addNumbers = function (a, b) {
    return a + b;
};
var addResult = addNumbers(1, 2);
console.log("addNumbers returned : " + addResult);
console.log("addNumbers returned : " + addResult);
function testArguments() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            console.log("argument[" + i + "] = " + arguments[i]);
        }
    }
}
console.log(testArguments(1, 2, 3));
//console.log(testArguments("firstArg"));
