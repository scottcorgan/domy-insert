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

insert('<div class="item"></div>');
insert.before('<div class="before-item"></div>', '.item');

var div = document.createElement('div');
div.className = 'another-element';

insert(div, '.parent');
```

## Methods

### insert(element[, parent])

* `element` - string OR DOM element to insert
* `parent ` - string OR DOM element to insert the `element` to. Defaults to `document.body`

### insert.before(element, sibling[, parent])

* `element` - string OR DOM element to insert
* `sibling` - string or object of element to insert before
* `parent ` - string or DOM element of context of insert. Defaults to `document.body`

### insert.after(element, sibling[, parent])

* `element` - string OR DOM element to insert
* `sibling` - string or object of element to insert after
* `parent ` - string or DOM element of context of insert. Defaults to `document.body`
 
## Run Tests
 
```
npm install
npm test
```