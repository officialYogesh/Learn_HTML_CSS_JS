//New function constructor with capital name
function Circle(radius) {
    this.radius = radius;
}
//Creating function with prototype keyword so it is only created once
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle.getArea());