var element = require('domy-element');

var insert = function (elem, parent) {
  var domEl = element(elem);
  queryParent(parent).appendChild(domEl);
  
  return domEl;
};

insert.before = function (elem, before, parent) {
  return insertAdjacent(elem, document.querySelector(before), parent);
};

insert.after = function (elem, after, parent) {
  return insertAdjacent(elem, document.querySelector(after).nextSibling, parent);
};

function insertAdjacent(elem, adjacentTo, parent) {
  var domEl = element(elem);
  queryParent(parent).insertBefore(domEl, adjacentTo);
  
  return domEl;
}

function queryParent(parent) {
  if (!parent) parent = document.body;
  if (typeof parent === 'string') parent = document.querySelector(parent);
  
  return parent;
}

module.exports = insert;