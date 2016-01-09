/**
* coverage tests
*/

function add(a, b, callback) {
	callback(a + b);
}

function subtract(a, b, callback) {
	callback(a - b);
}

add(2, 3, function(result) {
	console.log(result);
});

//subtract(3, 2, function(result) {
	// console.log(result);
// });

