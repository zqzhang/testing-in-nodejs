module.exports = function(grunt) {

	grunt.initConfig({
		nodeunit: {
			all: ['nodeunit.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
};