//  returns a string of all the set values that start with a specific string
// eslint-disable-next-line consistent-return
export default function cleanSet(set, startString) {
  let cleanstr = '';
  if (!startString || !startString.length) return cleanstr;
  for (const ele of set) {
    if (ele && ele.startsWith(startString)) {
      cleanstr += `${ele.slice(startString.length)}-`;
    }
  }
  return cleanstr.slice(0, cleanstr.length - 1);
}
