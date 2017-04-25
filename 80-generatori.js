function* praviRaspon() {
  for (let i = 0; i < 5; i++) {
    yield i
  }
}

const raspon = praviRaspon()

// stampamo 2 koraka, svaki ima vrednost i zastavicu jel zavrseno
console.log(raspon.next())
console.log(raspon.next())

// iteriramo preostale korake
for (const vrednost of raspon) {
  console.log(vrednost)
}

// nema vise vrednosti za stampanje
console.log(raspon.next())
