# Klase

When you wanted to write class-like structures in JavaScript before, you had to use the prototype property of functions like this:

```js
    var Person = function(name) {
      this.name = name;
    };

    Person.prototype.getName = function() {
      return this.name;
    };

    Person.prototype.setName = function(name) {
      this.name = name;
    };

    var alice = new Person("alice");
    alice.getName(); // alice
```

The same class as before written with the new ES6 syntax would look like this:

```js
    class Person {
      constructor(name) {
        this.name = name;
      }
      getName() {
        return this.name;
      }
      setName(name) {
        this.name = name;
      }
    }

    var alice = new Person("alice");
    alice.getName(); // alice
```

## Nasledjivanje klasa

Lets look at how we can create classes that build on existing functionality. Take this class for example:

```js
    class Character {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
      }
      attack(character) {
        if (character !instanceof Character) throw new Error('');
        character.health_ -= 10;
      }
    }
```

it is possible to build on the character class like this:

```js
    class Monster extends Character {
      constructor(x, y, name) {
        super(x, y);
        this.name = name;
      }
    }
```

The extends keyword lets Monster inherit the methods defined in Character. `super` allows to specify whether the method defined in this class should be used or the class it extends from (the "super-class").

    class Monster extends Character {
      constructor(x, y, name) {
        super(x, y);
        this.name = name;
      }
      attack(character) {
        super.attack(character);
        character.health_ -= 5;
      }
    }
