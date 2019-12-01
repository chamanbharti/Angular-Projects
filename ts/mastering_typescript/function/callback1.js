// var callbackFunction = function(text) {
//     console.log('inside callbackFunction ' + text);
//     }
//     function doSomethingWithACallback( initialText, callback )
//     {
//     console.log('inside doSomethingWithCallback ' +initialText);
//     callback(initialText);
//     //callbackFunction(initialText);
//     }
//     doSomethingWithACallback('myText', callbackFunction);
//     //console.log(doSomethingWithACallback('myText', callbackFunction));
// function doSomethingWithACallback( initialText, callback )
// {
//   console.log('inside doSomethingWithCallback ' +initialText);
//     if (typeof callback === "function") {
//         callback(initialText);
//     } else {
//         console.log(initialText + ' is not a function !!')
//     }
// }
// doSomethingWithACallback('myText', 'anotherText');
// function callbackFunction(text: string) {
//     console.log(`inside callbackFunction ${text}`);
//     }
//     function doSomethingWithACallback(initialText: string,callback : (initialText: string) => void) {
//         console.log(`inside doSomethingWithCallback ${initialText}`);
//         callback(initialText);
//         }
//promises
function delayedResponseWithCallback(callback) {
    function delayedAfterTimeout() {
        console.log("delayedAfterTimeout");
        callback();
    }
    setTimeout(delayedAfterTimeout, 1000);
}
function callDelayedAndWait() {
    function afterWait() {
        console.log("afterWait");
    }
    console.log("calling delayedResponseWithCallback");
    delayedResponseWithCallback(afterWait);
    console.log("after calling delayedResponseWithCallback");
}
callDelayedAndWait();
