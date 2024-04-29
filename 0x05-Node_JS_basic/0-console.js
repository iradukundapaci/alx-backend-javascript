/**
 * Display message to stdout
 * @param {message} mesasge to be diplayed
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
