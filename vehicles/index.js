'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
// eslint-disable-next-line no-unused-vars
const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const toyota = new VehicleClass.Car('toyota 2');
console.log(toyota.name, toyota.wheels);

const cruiser = new VehicleClass.Motorcycle('cruiser');
console.log(cruiser.name, cruiser.wheels, cruiser.wheelie(), cruiser.stop());






