console.log("Function Factory");

//Functions are first class datatype
//Functions are objects
function multiply(x, y) {
    return x*y;
}
console.log(multiply(10,5));
multiply.version = "v0.0.1";

//Can directly print functions
console.log(multiply);
//Can print its properties
console.log(multiply.version);

//Function Factory
function makeMultiplier(multiplier) {
    console.log("Multiplier default/initialized value: " + multiplier);
    //define new functions inside a function
    var myFunc = function(x) {
        console.log("Value of X: " + x);
        return multiplier*x;
    };
    // return function
    return myFunc;
}

//Initialize makeMultiplier with a value for multiplier
var multiplyBy3 = makeMultiplier(3);
//calling multiplyBy3 by providing value for x
console.log("Multiply By 3: " + multiplyBy3(5));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// Passing functions as arguments
function doOperation(x, operation) {
    //operation will be the name of passed function
    return operation(x);
}


var result = doOperation(50, doubleAll);
console.log(result);
console.log(doOperation(10, multiplyBy3));