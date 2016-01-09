/**
* add test
*/

var calc = require('../calc.js'),
	assert = require('assert');

describe('calc tests', function() {
	describe('simple maths', function() {
		it('should be easy to add', function() {
			assert.equal(calc.add(2,4), 6, 'two plus four is six');
		});
		it('should be easy to subtract', function() {
			assert.equal(calc.subtract(4, 2), 2, 'four minus 2 is two');
		});
	});
});
