/**
* chaijs
*/

var chai = require('chai');

/* 11-2 simple */
var assert = chai.assert;
var three = 3;

assert.equal(three, '3', '3 equals "3"');

assert.strictEqual('3', three.toString(), '3 and "3" are not strictly equal');

assert.notEqual(three, 'three', '3 not equals three');

assert.ok(true, 'truthy');

//assert.isFalse(true, 'true is false');

var expect = chai.expect;

expect(three).to.be.a('number');

var should = chai.should();

three.should.be.a('number');

/* 11-3 */
var square = function(a) {
	if (typeof a !== 'number') return false;
	return a * a;
};

square(three).should.equal(9);

square('three').should.be.false;

/* 11-4 */
var squareAsync = function(a, callback) {
	var result = a * a;
	callback(result);
}

squareAsync(three, function(result) {
	result.should.equal(9, 'three squared is nine');
});

squareAsync('three', function(result) {
	// NaN !== NaN
	expect(result).to.not.eql(result);
});