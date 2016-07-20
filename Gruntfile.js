module.exports = function(grunt){
	grunt.initConfig({
		karma : {
			unit : {
				    singleRun: true
			}
		}
	});
	grunt.registerTask('hello-world', function(){
		console.log('hello world!');
	});
	grunt.registerTask('default', ['hello-world']);

	grunt.loadNpmTasks('grunt-karma');
};
