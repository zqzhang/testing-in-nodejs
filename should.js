/**
* Should.js
*/

var should = require('should');

/* BEGIN 11-2 Simple tests */
var three = 3;

should.equal(three, '3', '3 equals "3"');

should.strictEqual('3', three.toString(), '3 and "3" are not strictly equal');

should.notEqual(three, 'three', '3 not equals three');

true.should.be.ok;
false.should.not.be.ok;

three.should.be.a('number');
/* END 11-2 Simple tests */

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
};

squareAsync(three, function(result) {
	result.should.equal(9, 'three squared is nine');
});

squareAsync('three', function(result) {
	// NaN !== NaN
	result.should.not.equal(result);
});