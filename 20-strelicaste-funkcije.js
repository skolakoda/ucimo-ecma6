// this unutar strelicaste funkcije je isto kao i da nema funkcije

const covek = {
  pozdrav: 'zdravo',

  kazi() {
    setImmediate(function() {
        console.log(this.pozdrav);
    });
  },

  kazi2() {
    setImmediate(() => {
        console.log(this.pozdrav);
    });
  }
};

covek.kazi();
covek.kazi2();
