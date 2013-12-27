# domy-insert
 
Insert any data type to the DOM. For use with [Browserify](http://browserify.org).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-insert.png)](https://ci.testling.com/scottcorgan/domy-insert)
 
## Install
 
```
npm install domy-insert --save
```
 
## Usage
 
```js
var insert = require('domy-insert');

insert('<div class="item"></div>').after('.some-parent-element');
insert('<div class="before-item"></div>').before('.item');

var div = document.createElement('div');
div.className = 'another-element';

insert(div).beginning('.parent');
```

## Methods

### insert(element)

* `element` - string OR DOM element to insert

Creates and returns an object with the following methods available:

* before
* after
* beginnning
* end

## Instanc Methods

### before(sibling[, parent])

* `sibling` - string or object of element to insert before
* `parent ` - string or DOM element of context of insert. Defaults to `document.body`

### after(sibling[, parent])

* `sibling` - string or object of element to insert after
* `parent ` - string or DOM element of context of insert. Defaults to `document.body`

### beginning([parent])

Insert an element at the beginning of the given parent's child node list

* `parent` - string or DOM element of context of insert. Defaults to `document.body`

### end([parent])

Works the same as `insert(element, parent)`. Inserts element at the end of the given element context

* `parent` - string or DOM element of context of insert. Defaults to `document.body`

 
## Run Tests
 
```
npm install
npm test
```