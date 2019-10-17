'use strict';
/**
 * A class to represent vehicles.
 * @constructor
 * @name the vehicles type name
 * @wheels the vehicles wheel number
 */

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }

}

class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }

}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  wheelie() {
    return 'wheee!';
  }
}

module.exports = { Car, Motorcycle };
//module.exports = Motorcycle;



