Namespacer.js
==============

A simple library for creating namespaces in the browser

```javascript

	// Create the namespace
	Namespacer('foo.bar.baz')

	// Use the namespace
	foo.bar.baz = {
		a: 1
	}

	// Pass an object directly
	Namespacer('foo.bar.baz', {
		a: 1
	})''

	// Retrieve an object from a namespace, if it doesn't exist it will just return an empty object
	var a = Namespacer('foo.bar.baz');
````

Namespacer takes care of not replacing existing objects.

Test
----

	Open test/index.html in a browser

or

	npm test

Build
-----

	npm install
	gulp dist