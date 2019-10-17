'use strict';

const faker = require('faker');
const Validator = require('../validator-class.js');
const valid = new Validator();
let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = { x: 'y' };
let func = () => {};
let bool = false;

const schema = {
  fields: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    age: { type: 'number' },
    children: { type: 'array', valueType: 'string' },
  },
};

describe('Validator module performs basic validation of', () => {
  it('strings', () => {
    expect(valid.isString(str)).toBeTruthy();
    expect(valid.isString(num)).toBeFalsy();
    expect(valid.isString(arr)).toBeFalsy();
    expect(valid.isString(obj)).toBeFalsy();
    expect(valid.isString(func)).toBeFalsy();
    expect(valid.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(valid.isNumber(str)).toBeFalsy();
    expect(valid.isNumber(num)).toBeTruthy();
    expect(valid.isNumber(arr)).toBeFalsy();
    expect(valid.isNumber(obj)).toBeFalsy();
    expect(valid.isNumber(func)).toBeFalsy();
    expect(valid.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(valid.isArray(str)).toBeFalsy();
    expect(valid.isArray(num)).toBeFalsy();
    expect(valid.isArray(arr)).toBeTruthy();
    expect(valid.isArray(obj)).toBeFalsy();
    expect(valid.isArray(func)).toBeFalsy();
    expect(valid.isArray(bool)).toBeFalsy();
  });

  it('arrays of type', () => {
    let numArray = [1, 2, 3];
    let strArray = ['a', 'b', 'c'];

    expect(valid.isArray(str)).toBeFalsy();
    expect(valid.isArray(num)).toBeFalsy();
    expect(valid.isArray(obj)).toBeFalsy();
    expect(valid.isArray(func)).toBeFalsy();
    expect(valid.isArray(bool)).toBeFalsy();
    expect(valid.isArray(arr)).toBeTruthy();
    expect(valid.isArray(numArray, 'number')).toBeTruthy();
    expect(valid.isArray(numArray, 'string')).toBeFalsy();
    expect(valid.isArray(strArray, 'string')).toBeTruthy();
    expect(valid.isArray(strArray, 'number')).toBeFalsy();
  });

  it('objects', () => {
    expect(valid.isObject(str)).toBeFalsy();
    expect(valid.isObject(num)).toBeFalsy();
    expect(valid.isObject(arr)).toBeFalsy();
    expect(valid.isObject(obj)).toBeTruthy();
    expect(valid.isObject(func)).toBeFalsy();
    expect(valid.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(valid.isBoolean(str)).toBeFalsy();
    expect(valid.isBoolean(num)).toBeFalsy();
    expect(valid.isBoolean(arr)).toBeFalsy();
    expect(valid.isBoolean(obj)).toBeFalsy();
    expect(valid.isBoolean(func)).toBeFalsy();
    expect(valid.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    expect(valid.isFunction(str)).toBeFalsy();
    expect(valid.isFunction(num)).toBeFalsy();
    expect(valid.isFunction(arr)).toBeFalsy();
    expect(valid.isFunction(obj)).toBeFalsy();
    expect(valid.isFunction(func)).toBeTruthy();
    expect(valid.isFunction(bool)).toBeFalsy();
  });
});

describe('Validator module evaluates a basic schema', () => {
  it('isValid() validates a good record', () => {
    // Go through the schema and fill in perfect values for every field
    var testRecord = {};
    for (var field in schema.fields) {
      switch (schema.fields[field].type) {
      case 'boolean':
        testRecord[field] = faker.random.boolean();
        break;
      case 'number':
        testRecord[field] = faker.random.number();
        break;
      case 'string':
        testRecord[field] = faker.random.word();
        break;
      case 'array':
        testRecord[field] = [];
        testRecord[field].push(faker.random.arrayElement());
        testRecord[field].push(faker.random.arrayElement());
        break;
      default:
        null;
      }
    }

    expect(valid.isValid(schema, testRecord)).toBeTruthy();
  });

  it('isValid() returns undefined on type mismatch', () => {
    // Go through the schema and fill in incorrect values for every field
    var testRecord = {};
    for (var field in schema.fields) {
      switch (schema.fields[field].type) {
      case 'boolean':
        testRecord[field] = faker.random.number();
        break;
      case 'number':
        testRecord[field] = faker.random.words();
        break;
      case 'string':
        testRecord[field] = faker.random.number();
        break;
      default:
        null;
      }
    }
    expect(valid.isValid(schema, testRecord)).toBeFalsy();
  });

  it('isValid() returns undefined with missing requirements', () => {
    // Go through the schema and fill in perfect values for every field
    var testRecord = {};
    for (var field in schema.fields) {
      if (schema.fields[field].required) {
        testRecord[field] = null;
      }
    }
    expect(valid.isValid(schema, testRecord)).toBeFalsy();
  });
});
