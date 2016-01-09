/**
* Vows
*/

var vows = require('vows'),
	assert = require('assert');

var three = 3;
vows.describe('vows testing').addBatch({
	'11-2': {
		'basic testing': {
			topic: three,

			' 3 equals "3"': function(topic) {
				assert.equal(three, 3);
			},
			' 3 and "3" are not strictly equal': function(topic) {
				assert.strictEqual('3', three.toString());
			},
			' 3 notEqual "three"' : function(topic) {
				assert.notEqual(three, 'three');
			},
			' false is truthy? ' : function(topic) {
				assert.ok(false);
			},
			' true is truthy? ' : function(topic) {
				assert.ok(true);
			}
		}
	},
	'11-3': {
		'sync': {
			topic: function() { return 3 * 3; },
			'squared': function(topic) {
				assert.equal(topic, 9);
			}
		}
	},
	'11-4': {
		'async': {
			topic: function() { this.callback(null, 3 * 3); },
			'doubled': function(err, result) {
				assert.equal(result, 9, 'three squared is nine');
			}
		}
	}
}).export(module);