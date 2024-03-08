export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('size should be number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('location should be string');
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
