// resolved promise with first name, last name
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
