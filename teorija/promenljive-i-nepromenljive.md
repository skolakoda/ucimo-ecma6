# Promenljive i nepromenljive

Promenljive ili varijable su nešto što se menja, varira, dok sve ostalo oko njih ostaje isto.

Najbolje ćemo zapamtiti preko primera iz života. Na primer:

```js
let sampion = "Djoka"
sampion = "Mika"
sampion = "Pera"

console.log(`Ovogodišnju titulu osvojio je ${sampion}`)
```

Nasuprot njima imamo nepromenljive iliti konstante. One su uvek iste, dok se sve oko njih menja.

```js
const crno = '#000'
const belo = '#fff'
const PI = 3.14
```

Što manje imamo promenljivih, to je lakše voditi računa o programu i manja je mogućnost greške. Treba favorizovati nepromenljive.

## 'let' i 'const'

Both 'let' and 'const' allow the definition of variables in a block scope. Traditional variables been defined for the function scope. The restriction of a block scope means that they are defined to be used within curly braces { ... }.

let variables are changeable but const doesn't allow reassignments.

```js
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; Can't do that, will result in a SyntaxError
}

console.log(a);     // a = 20, it is accessible outside of the scope
console.log(b);     // `let` are not available: 'ReferenceError b is not defined'
console.log(tmp);   // same goes for const: 'tmp is not defined'
```

Using let and const is recommended because its harder to leak variables to outer scopes.
