var insert = require('../index.js');
var test = require('tape');
var children = require('domy-children');
var element = require('domy-element');

document.body.appendChild(element('<div class="parent"></div>'));

test('inserts an element before a given element as a string', function (t) {
  var before = insert('<div class="before"></div>').before('.parent', document.body);
  
  t.deepEqual(before.element, element('.parent').previousSibling);
  t.end();
});

test('inserts an element before a given element as a DOM object', function (t) {
  document.body.removeChild(element('.before'));
  
  var parent = element('.parent');
  var div = element('<div class="before"></div>');
  var before = insert(div).before('.parent');
  
  t.deepEqual(before.element, parent.previousSibling);
  t.end();
});

test('inserts an element after a given element as a string', function (t) {
  var parent = element('.parent');
  var after = insert('<div class="after"></div>').after('.parent');
  
  t.deepEqual(after.element, parent.nextSibling);
  t.end();
});

test('inserts an element after a given element as a DOM object', function (t) {
  document.body.removeChild(element('.after'));
  
  var parent = element('.parent');
  var div = element('<div class="after"></div>');
  var after = insert(div).after('.parent');
  
  t.deepEqual(after.element, parent.nextSibling);
  t.end();
});

test('inserts element at the beginning of the given parent element', function (t) {
  var parent = element('.parent');
  var beginning = element('<div class="beginning"></div>');
  
  insert(beginning).beginning(parent);
  
  t.deepEqual(beginning, children.first(parent));
  t.end();
});

test('inserts element at the end of the given parent element', function (t) {
  var end = element('<div class="end"></div>');
  
  insert(end).end('.parent');
  
  t.deepEqual(end, children.last('.parent'));
  t.end();
});

test('inserts element at end of document.body if no parent is provided', function (t) {
  insert('<div class="end2"></div>').end();
  
  t.equal(children.last(document.body).className, 'end2');
  t.end();
});