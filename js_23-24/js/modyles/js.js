$(function() {

var firsToDolist = ['lern javascipt', 'lern html', 'make code']; 	


localStorage.setItem("obj", JSON.stringify(firsToDolist));
var test = localStorage.getItem("obj");
test = JSON.parse(test);

 var model = new Model(test);
 var view = new View(model);
 var controller = new Controller (model, view);


});