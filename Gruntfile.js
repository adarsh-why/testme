module.exports = function(grunt){
	grunt.registerTask('hello-world', function(){
		console.log('hello world!');
	});
	grunt.registerTask('default', ['hello-world']);
};
