function *pomocna() {
  yield 'ja sam druga'
  yield 'ja sam sledeci'
}

function *glavna() {
  yield 'ja sam prvi'
  yield *pomocna()
}

for (const v of glavna()) {
  console.log(v)
}
