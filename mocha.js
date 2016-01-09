/**
* mocha
*/

var assert = require('assert');

var three = 3;
describe('11-2', function() {
    describe('equal', function() {
        it('should return true that 3 equals "3"', function() {
            assert.equal('three', '3', '3 equals "3"');
        });
    });
    describe("strictEqual", function() {
        it('"3" only strictly equals 3.toString()', function() {
            assert.strictEqual('3', three.toString(), '3 and "3" are not strictly equal');
        });
    });

    describe("notEqual", function() {
        it('should be that 3 is not equal to three', function() {
            assert.notEqual(three, 'three', '3 not equals three');
        });
    });
    describe("ok", function() {
        it('should return that false is not truthy', function() {
            assert.ok(false, 'not truthy ');
        });
    });
    describe("ok", function() {
        it('should be true that true is truthy', function() {
            assert.ok(true, 'truthy');
        });
    });
});

var should = require('should');

var square = function(a) {
    if (typeof a !== 'number') return false;
    return a * a;
};

describe('11-3 sync', function() {
    describe('square a number', function() {
        it('should do this syncronously', function() {
            square(three).should.equal(9);
        });
        it('should fail when the target is not a number', function() {
            square('three').should.be.false;
        });
    });
});

var squareAsync = function(a, cb) {
    result = a * a;
    cb(result);
};

describe('11-4 async', function() {
    describe('square a number', function() {
        it('should perform async', function() {
            squareAsync(three, function(result) {
                result.should.equal(9);
            });
        });
        it('should fail', function() {
            squareAsync('three', function(result) {
                result.should.not.be.a('number');
            });
        });
    });
});