/*
You will be given 2 arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output

    <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

The outline of a program should look like this:

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

Finally, feel free to use rest parameters if you think that would make things easier!
*/

let username = process.argv[2] || 'Daman';
let words = process.argv[3] || 'var dump <all>';

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

console.log(html`<b>${username} says</b>: "${words}"`);
