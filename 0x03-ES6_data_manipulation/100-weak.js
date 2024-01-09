//  keep track of the number of queries made to different API endpoints
const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let result = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, result -= -1);
  if (result >= 5) throw new Error('Endpoint load is high');
  return result;
};

export { weakMap, queryAPI };
