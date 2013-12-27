var element = require('domy-element');

var insertMethods = {
  before: function (parentElement, parent) {
    this._adjacent(this.element, element(parentElement), parent);
    
    return this;
  },

  after: function (parentElement, parent) {
    this._adjacent(this.element, element(parentElement).nextSibling, parent);
    
    return this;
  },

  beginning: function (parentElement) {
    var parentDomEl = this._queryParent(parentElement);
    this.before(parentDomEl.firstChild, parentDomEl);
    
    return this;
  },

  end: function (parentElement) {
    this._queryParent(parentElement).appendChild(this.element);
    
    return this;
  },

  _adjacent: function (elem, adjacentTo, parent) {
    var domEl = element(elem);
    this._queryParent(parent).insertBefore(domEl, adjacentTo);
    
    return domEl;
  },

  _queryParent: function (parent) {
    if (!parent) parent = document.body;
    if (typeof parent === 'string') parent = document.querySelector(parent);
    
    return parent;
  }
};

module.exports = function children (elem) {
  return element.wrap(elem, insertMethods);
};

