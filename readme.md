Namespacer.js
==============

A simple library for creating namespaces in the browser

```javascript

	//create the namespace
	Namespacer('foo.bar.baz')

	//use the namespace
	foo.bar.baz = {
		a: 1
	}

	//or pass an object directly
	Namespacer('foo.bar.baz', {
		a: 1
	})''
````

Namespacer takes care of not replacing existing objects.

Test
----

	npm install mocha-browser -g
	mocha-browser test/index.html
	
	or

	Open test/index.html in a browser

Build
-----

	npm install gulp -g
	gulp dist