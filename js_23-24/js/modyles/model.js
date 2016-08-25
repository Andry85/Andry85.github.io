function Model(data) {

	 	


	
	 var self = this;

	 self.data = data;

	 self.addItem = function(item) {

	 	if (item.length === 0) {
	 		return;
	 	}


	 	  self.data.push(item);

	 	  return self.data;
	 };

	 self.removeItem = function(item) {
	 	var index = self.data.indexOf(item);

	 	if (index === -1) {
	 		return;
	 	}

	 	self.data.splice(index, 1);

	 	return self.data;  
	 };


	 self.redactItemFun = function(stringRedact, item) {
	 

	 		if (item.length === 0) {
	 			return;
	 		}

	 		var str = self.data.indexOf(stringRedact);
	 		self.data.splice(str, 1, item);
	 		return self.data;


	 		
	 	 	
	
	 		
	 

	 	  
	 };
};