# Export-import

Until now it hasn't been possible to split up your code into modules in JavaScript. From ES6 we are able to use the export and import keywords for creating modules. With export you can specify the objects to be exported and you can use import to import the object.

Using export looks like this:

```js
// fajl Message.js
export const message = 'Hello Babel';
```

And to import that module you can use it like this:

```js
import {message} from './Message';
console.log(message); // Hello Babel
```

## Common.js export-import

Using common.js the same module would be written like this:

```js
exports.message = 'Hello Babel';

var message = require('./Message').message;
console.log(message); // Hello Babel
```

## Default export

There is another way to use export and that is export default:

```js
// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';

export default {
  greeting: greeting,
  name: name,
  version: version
};
```

The import then changes a little:

```js
import Message from './Message';
console.log(Message.greeting + ' ' + Message.name + ' ' + Message.version);
```
