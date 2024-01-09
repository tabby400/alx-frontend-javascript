// checks if all elements in the array are in the set
export default function hasValuesFromArray(set, arr) {
  for (const elem of arr) {
    if (!set.has(elem)) return false;
  }
  return true;
}
