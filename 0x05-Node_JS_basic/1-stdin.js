/**
 * Program to interact with user
 */
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const username = process.stdin.read();
  if (username !== null) {
    process.stdout.write(`Your name is: ${username}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
