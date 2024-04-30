const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const result = [];
    data.split('\n').forEach((line) => {
      if (line.trim() !== '') {
        // Check if the line is not empty
        result.push(line.split(','));
      }
    });
    result.shift();
    const newis = [];
    result.forEach((data) => newis.push([data[0], data[3]]));
    const fields = new Set();
    newis.forEach((item) => fields.add(item[1]));
    const final = {};
    fields.forEach((data) => {
      final[data] = 0;
    });
    newis.forEach((data) => {
      final[data[1]] += 1;
    });
    stream.write(`Number of students: ${result.length}\n`);
    const temp = [];
    Object.keys(final).forEach((data) => {
      temp.push(
        `Number of students in ${data}: ${final[data]}. List: ${newis
          .filter((n) => n[1] === data)
          .map((n) => n[0])
          .join(', ')}\n`,
      );
    });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < temp.length; i++) {
      if (i === temp.length - 1) {
        temp[i] = temp[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(temp[i]);
    }
    stream.end(); // End the response stream here
  } else {
    throw new Error('Cannot load the database');
  }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;
