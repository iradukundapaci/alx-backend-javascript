const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== ''); // Filter out empty lines
    lines.shift();
    const students = lines
      .map((line) => line.split(','))
      .filter((student) => student.length >= 4);
    const fields = new Map();
    students.forEach((student) => {
      const [, , , field] = student;
      if (!fields.has(field)) {
        fields.set(field, []);
      }
      fields.get(field).push(student[0]);
    });
    res.write(`Number of students: ${students.length}\n`);
    fields.forEach((names, field) => {
      res.write(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}\n`,
      );
    });
    res.end();
  });
});

app.listen(1245);

module.exports = app;
