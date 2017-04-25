/*
Use destructuring to extract 'name.family' and 'birth.day' from the object.
*/

const json = {
  'name': {
    'first': 'Yosuke',
    'family': 'Khan'
  },
  'birth': {
    'year': 1982,
    'month': 12,
    'day': 23
  }
}

const {name: {family: familyName}, birth: {day: birthDay}} = json

console.log(familyName)
console.log(birthDay)
