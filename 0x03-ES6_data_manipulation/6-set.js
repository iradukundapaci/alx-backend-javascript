export default function setFromArray(arrayOfElements) {
  return new Set(arrayOfElements);
}

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
