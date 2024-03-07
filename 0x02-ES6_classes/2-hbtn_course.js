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
      throw TypeError('Name must be string');
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
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
