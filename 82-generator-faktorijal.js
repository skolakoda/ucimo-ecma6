/*
Napiši generator funkciju koja prima gornji broj i viče (yield) faktorijal na svakom koraku.
Ne koristi rekurziju već petlju.
*/

function* faktorijal(n) {
  let trenutno = 1
  for (let i = 1; i <= n; i++) {
    trenutno *= i
    yield trenutno
  }
}

const generator = faktorijal(5)

for (const n of generator) {
  console.log(n)
}
