#!/usr/bin/env node

var spawn = require('child_process').spawn;
var haveUrl = false;

process.stdin.on('data', function (data) {
  if (!haveUrl) {
    var p = spawn('node_modules/.bin/phantomjs', ['test/p.js', data.toString()]);
    p.stdout.pipe(process.stdout);
  }
  
  process.stdout.write(data);
  
  haveUrl = true;
});

