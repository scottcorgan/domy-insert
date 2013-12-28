var insert = require('../index.js');
var test = require('tape');
var children = require('domy-children');
var element = require('domy-element');

document.body.appendChild(element('<div class="parent"></div>').one());

test('inserts an element before a given element as a string', function (t) {
  var before = insert('<div class="before"></div>').before('.parent', document.body);
  
  t.equal(before.element.one().outerHTML, element('.parent').one().previousSibling.outerHTML);
  t.end();
});

test('inserts an element before a given element as a DOM object', function (t) {
  document.body.removeChild(element('.before').one());
  
  var parent = element('.parent').one();
  var div = element('<div class="before"></div>').one();
  var before = insert(div).before('.parent');
  
  t.deepEqual(before.element.one(), parent.previousSibling);
  t.end();
});

test('inserts an element after a given element as a string', function (t) {
  var parent = element('.parent').one();
  var after = insert('<div class="after"></div>').after('.parent');
  
  t.equal(after.element.one().outerHTML, parent.nextSibling.outerHTML);
  t.end();
});

test('inserts an element after a given element as a DOM object', function (t) {
  document.body.removeChild(element('.after').one());
  
  var parent = element('.parent').one();
  var div = element('<div class="after"></div>').one();
  var after = insert(div).after('.parent');
  
  t.deepEqual(after.element.one(), parent.nextSibling);
  t.end();
});

test('inserts element at the beginning of the given parent element', function (t) {
  var parent = element('.parent').one();
  var beginning = element('<div class="beginning"></div>').one();
  
  insert(beginning).beginning(parent);
  
  t.deepEqual(beginning, children(parent).first());
  t.end();
});

test('inserts element at the end of the given parent element', function (t) {
  var end = element('<div class="end"></div>').one();
  
  insert(end).end('.parent');
  
  t.deepEqual(end, children('.parent').last());
  t.end();
});

test('inserts element at end of document.body if no parent is provided', function (t) {
  insert('<div class="end2"></div>').end();
  
  t.equal(children(document.body).last().className, 'end2');
  t.end();
});