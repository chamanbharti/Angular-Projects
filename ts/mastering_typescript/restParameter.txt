function testArguments() {
if (arguments.length > 0) {
for (var i = 0; i < arguments.length; i++ ) {
console.log("argument[" + i + "] = " + arguments[i]);
}
}
}
testArguments(1,2,3);
testArguments("firstArg");