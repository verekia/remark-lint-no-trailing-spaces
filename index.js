var visit = require('unist-util-visit');

function rule(ast, file) {
  var lines = file.toString().split('\n');

  /*
  Lines that are just space characters don't get detected by visit(),
  which is why we loop through lines manually.
  */

  for (var i = 0; i < lines.length; i++) {
    if (/^\s|\s$/.test(lines[i])) {
      file.message('Trailing whitespace detected, line ' + (i + 1));
    }
  }
  /*
  visit(ast, function (node) {
    // Does not actually work when there is emphasis mid-sentence
    if (node.type === 'text') {
      if (/\s$/.test(node.value)) {
        file.message('Trailing whitespace detected', node);
      };
    }
  });
  */
}

module.exports = {
  'no-trailing-spaces': rule
};
