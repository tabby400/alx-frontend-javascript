// returns an array of ids frpm a list of objects
// eslint-disable-next-line consistent-return
export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) return [];
  return arg.map((el) => el.id);
}
