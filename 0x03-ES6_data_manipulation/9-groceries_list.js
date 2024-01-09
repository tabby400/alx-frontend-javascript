//  returns a map of groceries with the following items (name, quantity)
export default function groceriesList() {
  const array = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const grocerymap = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const ele of array) {
    grocerymap.set(ele[0], ele[1]);
  }
  return grocerymap;
