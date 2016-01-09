/**
* mocha
*/

var three = 3;

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