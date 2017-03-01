# Template strings

Template strings use backticks (` `) instead of quotation marks (' or "). They allow string interpolation, with syntax like

```js
`Hello, ${person}! 1 + 1 = ${1 + 1}!`
```

They can also be multiline, simply by placing linebreaks inside your string:

```js
`Hello,
world!`
```

## Tagged template strings

Template strings can be tagged by placing a function name before the template string:

```js
fn`Hello ${you}! You're looking ${adjective} today!`
```

The semantics of a tagged template string are very specific. In essence, it is a function call with the arguments. The above "desugars" into:

```js
fn(["Hello ", "! You're looking ", " today!"], you, adjective);
```

Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array. Thus, there is always one more entry in the string array than there are substitutions.

This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write an HTML-escaping function:

```js
html`<p title="${title}">Hello ${you}!</p>`
```

that returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.
