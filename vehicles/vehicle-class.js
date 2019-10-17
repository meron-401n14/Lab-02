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
  /**
   * return movement status
   */
  drive() {
    return 'Moving Forward';
  }
  /**
   * return stop status
   */
  stop() {
    return 'Stopping';
  }

}
/**
 * An extended  class to represent car
 * @constructor
 * @name
 */
class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }

}
/**
 * An extended class to represent Motercycle
 * @constructor
 * @name property
 */
class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  wheelie() {
    return 'wheee!';
  }
}

module.exports = { Car, Motorcycle };




