// prebaci funkciju iz petlje u map

const udvostruci = brojevi => {
  const rezultat = []
  for (let i = 0; i < brojevi.length; i++) {
    rezultat.push(brojevi[i] * 2)
  }
  return rezultat
}

// resenje

const udvostruciM = brojevi => brojevi.map(n => n * 2)

// provera

console.log(udvostruci([1, 3, 4, 6]))
console.log(udvostruciM([1, 3, 4, 6]))
