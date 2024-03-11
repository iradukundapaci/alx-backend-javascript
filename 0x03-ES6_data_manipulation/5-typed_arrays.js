export default function createInt8TypedArray(length, position, value) {
  const newArray = new Int8Array(length);
  newArray[position] = value;

  return new ArrayBuffer(newArray);
}

console.log(createInt8TypedArray(10, 2, 89));
