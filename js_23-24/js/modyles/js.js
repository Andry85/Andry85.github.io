$(function() {

 var firsToDolist = ['lern javascipt', 'lern html', 'make code']; 
 var model = new Model(firsToDolist);
 var view = new View(model);
 var controller = new Controller (model, view);


});