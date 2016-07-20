describe('Directive:hello-world', function(){

	var el;

	beforeEach(module('hello'));

	beforeEach(inject(function($rootScope, $compile){
		el = angular.element('<div><hello-world/></div>');	
		$compile(el)($rootScope.$new);
	}));

	it('says hello to the world', function(){
		expect(el.text()).toBe('Hello, World!');
	});

});
