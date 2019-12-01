var arrayOfNumbers: number [] = [1,2,3];
console.log(`arrayOfNumbers:${arrayOfNumbers}`);
arrayOfNumbers = [3,4,5,6,7,8,9];
console.log(`arrayOfNumbers:${arrayOfNumbers}`);
//arrayOfNumbers = ["1","2"]

console.log("simple loop")
for(var i=0;i<arrayOfNumbers.length;i++){
    console.log(`arrayOfNumbers[${i}] = ${arrayOfNumbers[i]}`);
}

console.log("for in... loop")
for(var itemKey in arrayOfNumbers){
    var itemValue = arrayOfNumbers[itemKey];
    console.log(`arrayOfNumbers[${itemKey}] = ${itemValue}`);
}

console.log("for of... loop")
for(var arrayItem of arrayOfNumbers){
    console.log(`arrayItem = ${arrayItem}`);
}