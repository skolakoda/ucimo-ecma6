// pravi fibonacijev niz manji od zadatog broja

const fibonaci = function* (n) {
  let prethodni = 0
  let naredni = 1
  while (naredni < n) {
    [prethodni, naredni] = [naredni, prethodni + naredni]
    yield prethodni
  }
}

const generator = fibonaci(1000)

for (const x of generator) {
  console.log(x)
}
