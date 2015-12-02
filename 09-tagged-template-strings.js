/*
Template strings can be tagged by placing a function name before the template string:

    fn`Hello ${you}! You're looking ${adjective} today!`

The semantics of a tagged template string are very specific. In essence, it is a function call with the arguments. The above "desugars" into:

    fn(["Hello ", "! You're looking ", " today!"], you, adjective);

Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array. Thus, there is always one more entry in the string array than there are substitutions; in the above, the counts are 3 vs. 2.

This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write an HTML-escaping function:

    html`<p title="${title}">Hello ${you}!</p>`

that returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.

-------------------------------------------------------------------------------
You will be given 2 arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output

    <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

The goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically. The outline of a program should look like this:

    console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(// what goes here?) {
        // what goes here?
        // don't forget to return the escaped string!
    }

## HINTS

If you don't remember the corresponding escape sequences, they are:
    ' | &#39;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;

Remember that the best way to do string replacement in JavaScript is with regular expressions:

    var replacedS = originalS.replace(/a/g, "b");

If you're not sure where to start, try console.loging the arguments to your html function.
Finally, feel free to use rest parameters if you think that would make things easier!
*/

let username = process.argv[2];
let words = process.argv[3];

console.log(html`<b>${username} says</b>: "${words}"`);

function html(input, ...substitutions) {
    var result = input[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + input[i + 1];
    }
    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
}
