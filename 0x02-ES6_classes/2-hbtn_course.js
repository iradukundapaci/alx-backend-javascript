export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      if (typeof length === 'number') {
        if (Array.isArray(students)) {
          this._name = name;
          this._length = length;
          this._students = students;
        } else {
          throw TypeError('Students must be an array');
        }
      } else {
        throw TypeError('Length must be a number');
      }
    } else {
      throw new TypeError('Name must be string');
    }
  }
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  set length(length) {
    if (typeof length === 'string') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
