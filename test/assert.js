/**
* Node.js's Assert
*/

var assert = require('assert');

/*11-2*/
var three = 3;

assert.equal(three, '3', '3 equals "3"');

assert.strictEqual('3', three.toString(), '3 and "3" are not strictly equal');

assert.notEqual(three, 'three', '3 not equals three');

// assert.ok(false, 'not truthy ');
assert.ok(true, 'truthy');


/*11-3*/
var square = function(a) {
	if (typeof a !== 'number') return false;
    return a * a;
};

assert.equal(square(three), 9, '3 squared equals 9');

assert.equal(square('three'), false, 'should fail because "three" is not a number');
/*11-4*/

var squareAsync = function(a, cb) {
	var result = a * a;
	cb(result);
};

squareAsync(three, function(result) {
	assert.equal(result, 9, '3 squared is nine');
});

squareAsync('three', function(result) {
	assert.ok(isNaN(result), '"Three squared is NaN');
});

describe('a mocha test here?', function() {
	describe('a simple test', function() {
		it('should be ok', function() {
			assert.ok(true, true, 'true is true');
		});
	});
});