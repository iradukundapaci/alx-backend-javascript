export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}

console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'),
);
console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''),
);
