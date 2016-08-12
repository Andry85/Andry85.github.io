var resultat = require('../dist/js/js.js');


describe("A suite", function() {
  it("it choud call name", function() {
  	//prepare
  	var result;

  	//act
  	result = powFunct(2, 2);


  	//assset
    expect(result).toBe(4);
  });
});