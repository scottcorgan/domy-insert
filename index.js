var domify = require('domify');

var insert = function (elem, parent) {
  var domEl = queryDomElement(elem);
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
  var domEl = queryDomElement(elem);
  queryParent(parent).insertBefore(domEl, adjacentTo);
  
  return domEl;
}

function queryDomElement (elem) {
  return (typeof elem === 'string') ? domify(elem) : elem;
}

function queryParent(parent) {
  if (!parent) parent = document.body;
  if (typeof parent === 'string') parent = document.querySelector(parent);
  
  return parent;
}

module.exports = insert;