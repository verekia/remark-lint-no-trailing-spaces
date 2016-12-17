var visit = require('unist-util-visit');

function rule(ast, file) {
  var lines = file.toString().split('\n');

  for (var i = 0; i < lines.length; i++) {
    if (/^\s|\s$/.test(lines[i])) {
      file.message('Trailing whitespace detected, line ' + (i + 1));
    }
  }

  visit(ast, function (node) {
    if (node.type === 'text') {
      if (/\s$/.test(node.value)) {
        file.message('Trailing whitespace detected', node);
      };
    }
  });
}

module.exports = {
  'no-trailing-spaces': rule
};
