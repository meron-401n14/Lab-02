'use strict';
/**  class having a constructor with property of length and data. */
class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  /** sort and reduce in the form of key value object
   * return re indexed data.
   * */
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }
  /** add data at the end
   * @param item
   * return length*/
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }
  /**check criteria
   * return undefined or item  */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  /** if not first item ,return undefined
   *  declare variable item
   * delete first item re index and return item
   */
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }
  /**
   *  @param = item
   * add item in the front
   * return length
   */
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * @param callback
   * loop through each object
   * call function with value index
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }
  /**
   * @param callback
   * push data to result  */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }
  /**
 *  @param {*} callback
 * check object length if null return undefined
 * then create new object
 * if there is data push to new list
 * return result
 */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }
  /**
 *  @param {*} callback 
 * @param {*} state 
 * return data state
 */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;
