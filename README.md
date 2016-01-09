# Testing in Nodejs

The original source code is cheated from
[Node.js Recipes](http://www.apress.com/9781430260585).

The full text for the sample code is [Chapter 11 Testing in
Node.js](http://rd.springer.com/chapter/10.1007/978-1-4302-6059-2_11/fulltext.html).

Many thanks to the author Cory Gackenheimer and the publisher Apress.

Here I just want to try the sample code for self study.

## My problems

Need to test some Node.js based JavaScript APIs on a platform without `npm`
support. Thus need to figure out:

* which testing framework is suitable, and
* how to enable the framework on the platform.

## Node.js assert

Creating Tests with the Node.js `assert` Module.

> The Node.js assert testing module, imported using require(‘assert’), is
utilized for internal Node.js tests and has become the basis for many
third-party testing implementations. The assert module is created in such a way
that if a particular condition is not met for your testing needs, it will throw
an assertion error. If all passes, the Node.js process will exit as expected.

Suppose Node.js is supported. Run this command:

```sh
node assert.js
```