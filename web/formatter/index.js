'use strict';

module.exports = function format(lines) {
  return lines.map(line => `${line.num} - ${line.toPrint}`).join('\n');
};
