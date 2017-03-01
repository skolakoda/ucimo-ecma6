/*
Rewrite the following class in the new ES6 class syntax:

    var Character = function(x, y) {
      this.x = x;
      this.y = y;
      this.health_ = 100;
    };

    Character.prototype.damage = function() {
      this.health_ = this.health_ - 10;
    };

    Character.prototype.getHealth = function() {
      return this.health_;
    };

    Character.prototype.toString = function() {
      return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    };

and then use the class like this:

    var x = process.argv[2];
    var y = process.argv[3];
    var character = new Character(+x, +y);
    console.log(character.toString());
*/

class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }
    damage() {
        this.health_ = this.health_ - 10;
    }
    getHealth() {
        return this.health_;
    }
    toString() {
        return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    }
}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);

console.log(character.toString());
