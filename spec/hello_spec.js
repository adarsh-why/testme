describe('Directive:hello', function(){

	var el;

	beforeEach(module('hello'));

	beforeEach(inject(function($rootScope, $compile){
		el = angular.element('<div><hello/></div>');	
		$compile(el)($rootScope.$new);
	}));

	it('says hello to the world', function(){
		expect(el.innerHTML).toBe('Hello, World!');
	});

});
