var literalCircle = { //same as: new Object
    radius: 10,
    getArea: function() {
        var self = this;
        console.log(this);

        var incrementRadius = function() {
            console.log("Inside literalCircle => getArea() => incrementRadius(), this: " + this);
            console.log("Inside literalCircle => getArea() => incrementRadius(), self/this: " + self);
            self.radius = 20
        };

        incrementRadius();
        console.log("New Radius: " + self.radius);

        return Math.PI * Math.pow(self.radius, 2);
    }
};

console.log(literalCircle.getArea(10));