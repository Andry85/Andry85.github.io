var resultat = require('../dist/js/js.js');


describe("A suite", function() {
  it("it shoud call name", function() {
  	//prepare
  	var povi;

  	//act
  	povi = resultat;


  	//assset
    expect(povi).toEqual(4);
  });
});