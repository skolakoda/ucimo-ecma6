/*
Arrow functions lexically bind the value of 'this'. The this value inside an arrow function is the same as the this value outside of it. Let's look at an example.

    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(function () {
                console.log(this.yelp);
            });
        }
    };
    foot.kick();

When the call to console.log() occurs, a beginning JavaScript programmer might expect this.yelp to contain "Ouch!". In fact, it is undefined, because the function we passed to setImmediate got its own this (which by default is the global object, which has no yelp property).

In ES5, you might work around this with hacks. In ES6, arrow functions allow us to avoid such workarounds and instead just say what we mean. If we use an arrow function for the callback to setImmediate, the code will work as expected.

Let's do exactly that. Starting with the original code example above, replace the anonymous function passed to setImmediate with an arrow function.
*/

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate( () => console.log(this.yelp) );
    }
};
foot.kick();
