#!/usr/bin/env node

var spawn = require('child_process').spawn;
var haveUrl = false;

process.stdin.on('data', function (data) {
  if (!haveUrl) {
    spawn('node_modules/.bin/phantomjs', ['test/p.js', data.toString()]);
    process.stdout.write('Running tests at url: ');
  }
    
  process.stdout.write(data);
  haveUrl = true;
});

