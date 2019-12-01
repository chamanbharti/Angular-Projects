var myVariable = "Test1";
console.log("myVariable="+myVariable);

//equals to
var myVariable2 = "Test2";
console.log(`myVariable2=${myVariable2}`);

var underterminedValue = "elephant";
if (isNaN(parseInt(underterminedValue,2)))
{
console.log("handle not a number case");
}
else
{
console.log("handle number case");
}