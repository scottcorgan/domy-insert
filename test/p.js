var args = require('system').args;
var page = require('webpage').create();

page.open(args[1], phantom.exit);
