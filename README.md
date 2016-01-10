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

## Nodeunit

Creating Tests with [nodeunit](https://github.com/caolan/nodeunit).

> Nodeunit provides the same API as the assert module with the addition of two
methods, `.done()` and `.expect(amount)`. To implement a test with nodeunit you
need to export the tests from a module. The format of this export can help you
to group your tests.

To call a nodeunit test, you must first install nodeunit.

```sh
npm install –g nodeunit

nodeunit nodeunit.js
```

If you meet "Error: Cannot find module 'nodeunit'", you can export `NODE_PATH`
to be the output of `npm root -g`. See
[this](http://www.hankcs.com/program/network/to-solve-the-node-js-error-cannot-find-module-node-static.html).

```sh
export NODE_PATH=`npm root -g`
```