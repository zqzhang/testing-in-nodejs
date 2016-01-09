/**
* mocha
*/

var assert = require('assert');

var three = 3;
describe('11-2', function() {
    describe('equal', function() {
        it('should return true that 3 equals "3"', function() {
            assert.equal(three, '3', '3 equals "3"');
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
        it('should return that !false is truthy', function() {
            assert.ok(!false, 'truthy ');
        });
    });
    describe("ok", function() {
        it('should be true that true is truthy', function() {
            assert.ok(true, 'truthy');
        });
    });
});
