/**
* nodeunit
*/

var test = require('nodeunit');

var square = function(a) {
    if (typeof a !== 'number') return false;
    return a * a;
};

var squareAsync = function(a, callback) {
    var result = a * a;
    callback(result);
};

var three = 3;

module.exports = {
    '11-2': {
        'equal': function(test) {
            test.expect(1);
            test.equal(3, '3', '3 equals "3"');
            test.done();
        },
        'strictEqual': function(test) {
            test.strictEqual('3', '3', '3 and "3" are not strictly equal');
            test.done();
        },
        'notEqual' : function(test) {
            test.notEqual(3, 'three', '3 not equals three');
            test.done();
        },
        'ok' : function(test) {
            // test.ok(false, 'not truthy ');
            test.ok(true, 'truth');
            test.done();
        }
    },
    '11-3': {
        'squareSync': function(test) {
            test.equal(square(three), 9, 'three squared is nine');
            test.equal(square('three'), false, 'cannot square a non number');
            test.done();
        }
    },
    '11-4': {
        'squareAsync': function(test) {
            test.expect(2);
            squareAsync(three, function(result) {
                test.equal(result, 9, 'three squared is nine');
            });
            squareAsync('three', function(result) {
                test.ok(isNaN(result), 'squaring a string returns NaN');
            });
            test.done();
        }
    }
};
