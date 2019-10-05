'use strict';

//we set Vehicle equal to a function
//eventually, we want this to be  a class

// a constructor function - outside a 
//class ! (behind-the scenes of what a class does )

const VehicleConstructor = require('./vehicle-constructor.js')
  this.name = name;
  this.wheels = wheels;
  
;

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class


