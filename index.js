var element = require('domy-element');

var insert = function (elem, parent) {
  var domEl = element(elem);
  insert._queryParent(parent).appendChild(domEl);
  
  return domEl;
};

insert.before = function (elem, before, parent) {
  return insert._adjacent(elem, element(before), parent);
};

insert.after = function (elem, after, parent) {
  return insert._adjacent(elem, document.querySelector(after).nextSibling, parent);
};

insert.beginning = function (elem, parent) {
  var parentDomEl = insert._queryParent(parent);
  return insert.before(elem, parentDomEl.firstChild, parentDomEl);
};

insert.end = function (elem, parent) {
  return insert(elem, parent);
};

insert._adjacent = function (elem, adjacentTo, parent) {
  var domEl = element(elem);
  insert._queryParent(parent).insertBefore(domEl, adjacentTo);
  
  return domEl;
}

insert._queryParent = function (parent) {
  if (!parent) parent = document.body;
  if (typeof parent === 'string') parent = document.querySelector(parent);
  
  return parent;
}

module.exports = insert;