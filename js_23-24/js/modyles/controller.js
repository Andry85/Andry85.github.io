function Controller(model, view) {
	 var self = this;

	 view.elements.addBtn.on('click', addItem);
	 view.elements.listContainer.on('click', '.item-delete', removeItem);

	 view.elements.listContainer.on('click', '.item-redact', redactItem);
	 view.elements.redactBtn.on('click', radactFiunction);

	 function addItem () {
	 	 var newItem = view.elements.input.val(); 
	 	 model.addItem(newItem);
	 	 view.renderList(model.data);
	 	 view.elements.input.val(''); 
	 	 
	 }

	 function removeItem () {
	 	var item = $(this).attr('data-value');
	 	model.removeItem(item);
	 	view.renderList(model.data); 
	 }

	 var redactString;

	 function redactItem () {
	 	redactString  = $(this).prev('span').attr('data-value');
	 	view.elements.input.val(redactString); 
 
	 }

	 function radactFiunction () { 

			var redactItem = view.elements.input.val();
		 	model.redactItemFun(redactString, redactItem);
		 	view.renderList(model.data); 
		 	view.elements.input.val('');


		 
		 	

	 	
	 	
	 }


};