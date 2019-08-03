const path = require('path');
const fs = require('fs');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
module.exports = function (data) {
  return html.replace(
    '<!-- script -->',
    `<script>${
      script.replace(
        '/* data */',
        JSON.stringify(data)
      )
    }</script>`
    );
};
