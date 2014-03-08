#!/usr/bin/env node

var fs = require('fs'),
  path = require('path'),
  program = require('commander'),
  pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')))

program
  .version(pkg.version)
  .usage('<index.htm>')
  .parse(process.argv);

if (program.args.length < 1) {
  process.stderr.write(program.helpInformation())
  process.exit(1)
}

function sconfused(html) {
  return html.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

var html = fs.readFileSync(program.args[0], 'utf8'),
  html = sconfused(html);

process.stdout.write(html);
process.exit();
