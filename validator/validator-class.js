'use strict';

/**
 * A class to represent validator.
 * @class
 * @constructor
 */

class Validator {
  constructor() {
  }
  isValid(schema, data) {

    let valid = true;
    for (let fieldName in schema.fields) {
      let field = schema.fields[fieldName];
      let required = field.required ? this.isTruthy(data[fieldName]) : true;
      let type = field.type ? this.isCorrectType(data[fieldName], field) : true;
      if (!(required && type)) {
        valid = false;
      }

    }
    return valid;

  }
  /**
   * take string and returns boolean
   * @param input
   * @returns {boolean}
   */

  isString(input) {
    return typeof input === 'string';
  }
  /**
   * takes an object and return object &&
   * instance of Array object
   * @param {} input
   */
  isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }
  /**
   * takes two parmeters and
   * checks the required object type and value
   * @param {*} input
   * @param {*} valueType
   */
  isArray(input, valueType) {
    return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
  }
  /**
   *
   * @param {} input
   */
  isBoolean(input) {
    return typeof input === 'boolean';
  }
  /**
   * take object and check type
   * @param {} input
   */
  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'function';
  }
  /**
   * takes an object and check
   * @param {*} input
   */
  isTruthy(input) {
    return !!input;
  }
  /**
   * takes object and object field and check fiels type
   * @param {} input 
   * @param {*} field 
   */
  isCorrectType(input, field) {
    switch (field.type) {
    case 'string': return this.isString(input);
    case 'number': return this.isNumber(input);
    case 'array': return this.isArray(input, field.valueType);
    case 'object': return this.isObject(input);
    case 'boolean': return this.isBoolean(input);
    default: return false;

    }
  }

}

module.exports = Validator;








