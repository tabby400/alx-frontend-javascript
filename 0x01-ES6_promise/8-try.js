// accepts two args numerator and denomenator
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by 0');
  return numerator / denominator;
}
