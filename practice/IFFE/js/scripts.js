var normal = function(name) {
    console.log("Normal Function Invocation: " + name);
}
normal("1");

( function(name) {
    console.log("Immediately Invoked Function Invocation: " + name);
}) ("2");