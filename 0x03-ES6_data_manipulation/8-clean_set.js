export default function cleanSet(set, startString) {
  if (
    set instanceof Set
    && typeof startString === 'string'
    && startString.length > 0
  ) {
    const modifiedValues = Array.from(set)
      .filter((item) => item.startsWith(startString))
      .map((item) => item.slice(startString.length))
      .join('-');
    return modifiedValues;
  }
  return '';
}

console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'),
);

console.log(
  cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''),
);
