var insert = require('../index.js');
var test = require('tape');
var children = require('domy-children');
var element = require('domy-element');

/*

  insert(elem1).after(elem2)
  insert(elem1).before(elem2)
  insert(elem1).beginning(elem2)
  insert(elem1).end(elem2)

 */

test('inserts a DOM element from a string', function (t) {
  var el = insert('<div class="item"></div>');
  var insertedDiv = children.last(document.body);
  
  t.deepEqual(insertedDiv, el);
  t.end();
});

test('inserts a DOM element from a DOM element' , function (t) {
  document.body.removeChild(document.querySelector('.item'));
  
  var div = element('<div class="item"></div>');
  var el = insert(div);
  var insertedDiv = children.last(document.body);
  
  t.deepEqual(insertedDiv, el);
  t.end();
});

test('inserts DOM in parent element when parent is passed as a string', function (t) {
  document.body.removeChild(document.querySelector('.item'));
  
  var parentEl = insert('<div class="parent"></div>');
  var childEl = insert('<div class="item"></div>', '.parent');
  var insertedEl = children.last(parentEl);
  
  t.deepEqual(insertedEl, childEl);
  t.end();
});

test('inserts DOM in a parent lemenet when parent is passed as a DOM object', function (t) {
  document.body.removeChild(document.querySelector('.parent'));
  
  var parentEl = insert('<div class="parent"></div>');
  var childEl = insert('<div class="item"></div>', parentEl);
  var insertedEl = children.last(parentEl);
  
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
  var div = element('<div class="before"></div>')
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
  var div = element('<div class="after"></div>');
  var afterEl = insert.after(div, '.parent');
  
  t.deepEqual(afterEl, parent.nextSibling);
  t.end();
});

test('inserts element at the beginning of the given parent element', function (t) {
  var parent = element('.parent');
  var beginning = element('<div class="beginning"></div>');
  
  insert.beginning(beginning, parent);
  
  t.deepEqual(beginning, children.first(parent));
  t.end();
});

test('inserts element at the end of the given parent element', function (t) {
  var end = element('<div class="end"></div>');
  
  insert.end(end, '.parent');
  
  t.deepEqual(end, children.last('.parent'));
  t.end();
});