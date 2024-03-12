export default function updateUniqueItems(map) {
  return map.forEach((value, index) => {
    if (value === 1) {
      map.set(index, 100);
    }
  });
}
