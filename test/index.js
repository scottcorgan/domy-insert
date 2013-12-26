var insert = require('../index.js');
var test = require('tape');

/*

  x insert('<div></div>', '.parent');
  x insert.after();
  x insert.before();
  
 */

test('inserts a DOM element from a string', function (t) {
  var el = insert('<div class="item"></div>');
  var insertedDiv = document.body.childNodes[document.body.childNodes.length - 1];
  
  t.deepEqual(insertedDiv, el);
  t.end();
});

test('inserts a DOM element from a DOM element' , function (t) {
  document.body.removeChild(document.querySelector('.item'));
  
  var div = document.createElement('div');
  div.className = 'item';
  var el = insert(div);
  var insertedDiv = document.body.childNodes[document.body.childNodes.length - 1];
  
  t.deepEqual(insertedDiv, el);
  t.end();
});

test('inserts DOM in parent element when parent is passed as a string', function (t) {
  document.body.removeChild(document.querySelector('.item'));
  
  var parentEl = insert('<div class="parent"></div>');
  var childEl = insert('<div class="item"></div>', '.parent');
  var insertedEl = parentEl.childNodes[parentEl.childNodes.length - 1];
  
  t.deepEqual(insertedEl, childEl);
  t.end();
});

test('inserts DOM in a parent lemenet when parent is passed as a DOM object', function (t) {
  document.body.removeChild(document.querySelector('.parent'));
  
  var parentEl = insert('<div class="parent"></div>');
  var childEl = insert('<div class="item"></div>', parentEl);
  var insertedEl = parentEl.childNodes[parentEl.childNodes.length - 1];
  
  t.deepEqual(insertedEl, childEl);
  t.end();
});

test('inserts an element before a given element as a string', function (t) {
  var parent = document.querySelector('.parent');
  var beforeEl = insert.before('<div class="before"></div>', '.parent', document.body);
  
  t.deepEqual(beforeEl, parent.previousSibling);
  t.end();
});

test('inserts an element before a given element as a DOM object', function (t) {
  document.body.removeChild(document.querySelector('.before'));
  
  var parent = document.querySelector('.parent');
  var div = document.createElement('div');
  div.className = 'before';
  var beforeEl = insert.before(div, '.parent');
  
  t.deepEqual(beforeEl, parent.previousSibling);
  t.end();
});

test('inserts an element after a given element as a string', function (t) {
  var parent = document.querySelector('.parent');
  var afterEl = insert.after('<div class="after"></div>', '.parent', document.body);
  
  t.deepEqual(afterEl, parent.nextSibling);
  t.end();
});

test('inserts an element before a given element as a DOM object', function (t) {
  document.body.removeChild(document.querySelector('.after'));
  
  var parent = document.querySelector('.parent');
  var div = document.createElement('div');
  div.className = 'after';
  var afterEl = insert.after(div, '.parent');
  
  t.deepEqual(afterEl, parent.nextSibling);
  t.end();
});