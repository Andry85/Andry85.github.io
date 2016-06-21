'use strict';


var object = {

	name: 'Тест по програмированию',

	 createCheck: function() {
    
	  	var form = document.createElement('form');
	  	var formParent = document.body.appendChild(form);


	  	for (var i=0; i<3; i++) {
	  		var list = document.createElement('dl');
	  		var parentElem = form.appendChild(list);
	  		var listTitle = document.createElement('dt');
	  		var itemTitle = list.insertBefore(listTitle, list.children[0]);
	  		itemTitle.innerHTML = (i+1) + '.' + 'Вопрос №' + (i+1);
	  		
			for (var j=0; j<3; j++) {	
	  			var listItem = document.createElement('dl');
	  			var item = list.appendChild(listItem);

	  			

					var check = document.createElement('input');
				    check.setAttribute('type', 'checkbox');
				    check.setAttribute('id', i+''+j);
				    var label = document.createElement('label');
				    label.setAttribute('for', i+''+j)
				    label.innerHTML = 'Вариант ответа №' + (j+1);
				   
				    listItem.appendChild(check);
			    	listItem.appendChild(label); 	

	  			
	  		}

  		}


  		var resulte = document.createElement('button');
  		resulte.setAttribute('type', 'button');
  		resulte.setAttribute('class', 'btn btn-default');
  		resulte.innerHTML = 'Проверить мои результаты';
  		var resulteItem = form.appendChild(resulte);


  	},

  	
  	showTitle: function() {
  		var title = document.createElement('h1');
  		title.innerHTML = this.name;
  		var parentTitle = document.body;
  		var parentInclude = parentTitle.insertBefore(title, parentTitle.children[0]);
  		
  	}



 

};

object.createCheck();
object.showTitle();