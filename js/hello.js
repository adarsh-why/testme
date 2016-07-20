angular.module('hello',[]).directive('helloWorld', function(){
	return {
		restrict: 'E',
		template: '<div>Hello, World!</div>'
	};
});
