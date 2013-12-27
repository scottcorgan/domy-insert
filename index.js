var element = require('domy-element');

module.exports = function insert (elem) {
  var domElement = element(elem);
  
  return new Inserter(domElement);
};

var Inserter = function (elem) {
  this.element = elem;
};

Inserter.prototype.before = function (parentElement, parent) {
  this._adjacent(this.element, element(parentElement), parent);
  
  return this;
};

Inserter.prototype.after = function (parentElement, parent) {
  this._adjacent(this.element, element(parentElement).nextSibling, parent);
  
  return this;
};

Inserter.prototype.beginning = function (parentElement) {
  var parentDomEl = this._queryParent(parentElement);
  this.before(parentDomEl.firstChild, parentDomEl);
  
  return this;
};

Inserter.prototype.end = function (parentElement) {
  this._queryParent(parentElement).appendChild(this.element);
  
  return this;
};

Inserter.prototype._adjacent = function (elem, adjacentTo, parent) {
  var domEl = element(elem);
  this._queryParent(parent).insertBefore(domEl, adjacentTo);
  
  return domEl;
}

Inserter.prototype._queryParent = function (parent) {
  if (!parent) parent = document.body;
  if (typeof parent === 'string') parent = document.querySelector(parent);
  
  return parent;
};
