export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}
