import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft === 'number') {
      super(sqft);
    } else {
      throw new TypeError('sqft should be number');
    }
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors should be number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors should be number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft should be number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
