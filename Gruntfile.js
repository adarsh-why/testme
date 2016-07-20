module.exports = function(grunt){
	grunt.initConfig({
		karma : {
			unit : {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
	});
	
  grunt.registerTask('default', ['karma:unit']);

	grunt.loadNpmTasks('grunt-karma');
};
