var datatable_options = {	
			// "bJQueryUI": true,
			"iDisplayLength":25,
			 "aoColumns": [
                  { "sType": "date" },
                  null,null,null,
				  null,null,null
				],           
			"oLanguage": {
							"sLengthMenu": "Звонков на странице  _MENU_",
							"sSearch": "Search:",
							"sZeroRecords": "Не найдено",
							//"sInfo": "Show  _START_ to _END_ from _TOTAL_ records",
							"sInfo": "",
							//"sInfoEmpty": "show 0 to 0 from 0 records",
							"sInfoEmpty": "",
							//"sInfoFiltered": "(filtered from _MAX_ total records)",
							"sInfoFiltered": "",
							"oPaginate":{
								"sFirst": "Начало",
								"sLast"	:"Последнее",
								"sNext":"След.",
								"sPrevious":"Пред."
							}
						},
				"bProcessing": true ,
				"bPaginate": true,
				"sPaginationType": "full_numbers"
};/*
	Datatable default options
*/
	 
var datatable  ; /* Datatable object*/
var months =["января","февраля","марта",	"апреля","майа","июня","июля","августа","сентября",
	"октября","ноября",	"декабря"];
	/*
		Months for convert russian letters string to month's number
	*/
function formatDate(dateString){
	var dateArr= dateString.split(" ");
	for(var i in dateArr){
		if(dateArr[i]==""){
			continue;
		}
		var index = months.indexOf(dateArr[i]) ; 
		if(index!= -1){
			index = index+1;
			index = index.toString();	
			if(index.length==1){
				index = "0"+index.toString();
			}
			dateArr[i] = index;
		}
	}
	var res = dateArr.join(".").split(".");
	var new_date = res[2]+"."+res[1]+"."+res[0];
	return new_date;
}	
if(typeof($.fn.dataTableExt)!="undefined"){
	$.fn.dataTableExt.afnFiltering.push(
		function( oSettings, aData, iDataIndex ) {
			var dateRange = $('#time_select').val();
			var dateMin = dateRange
			/*
				yyy-mm-dd
			*/
			var currentDate = new Date()
			var day = currentDate.getDate()
			var month = currentDate.getMonth() + 1
			month= month.toString();
			if(month.length==1){
				month="0"+month;		
			}
			var year = currentDate.getFullYear()
			var dateMax  = year+"."+month+'.'+day;
	  
		   /*
			yyyy-mm-dd
		   */
			var date = formatDate(aData[0]);
			if ( dateMin == "" && date <= dateMax){
				return true;
			}
			else if ( dateMin =="" && date <= dateMax ){
				return true;
			}
			else if ( dateMin <= date && "" == dateMax ){
				return true;
			}
			else if ( dateMin <= date && date <= dateMax ){
				return true;
			}
			return false;
		}
	);
}
function countryLists(letter){

	var scroll_top = $(".tariffs_list_box[data_letter='"+letter+"']").offset().top;
	$("body").animate({scrollTop:scroll_top}, '500', 'swing', function() { 
	});
}
$(document).ready(function(){
	
	$('.login_link').click(function(){
		$(".loginbox").toggle();
	}); 
	
	var li = $("li.tab"); 
	var bab_activ = "tab_activ";
	var bab_pasiv = "tab_pasiv";
	li.on("click", function(){ 
		var os = $(this).attr("data_os");
		for(i = 0; i < li.length; i++){ 						
			li.attr({'class':'tab_pasiv'});						
		}
			$(this).attr({'class':'tab_activ'});					
			
			var	id = this.id.split('_');

		$("."+os+"contentbox").find("#tab_box_"+id[2]).slideDown("800");

		$('.box_item').each(function(i, v) {		
			var price_ID = this.id.split('_');

			if(id[2] == price_ID[2]){
				$("."+os+"contentbox").find("#tab_box_"+price_ID[2]).slideDown("800");
			
				
			}else{
				$("."+os+"contentbox").find("#tab_box_"+price_ID[2]).slideUp("800");
				
			}				
		});	     
	});
	
	
	if($('#call_history_list').length ){
		datatable = $("#call_history_list").dataTable(datatable_options);	
	}

	$(".time_filter_form").submit(function(){
		var time = $("#time_select").val();	
			 datatable.fnDraw();
		return false;
	})
	$(".tarrifs_by_countries a").click(function(){
		var letter = $(this).text();
		letter = letter.split(" ").join('');
		countryLists(letter);
	})
	//countryLists("A");
	$(".display_act_blocks").click(function(){
		
		$(".actBlockElem").slideUp(200);
		var os = $(this).attr("id");
		
		$(".actBlockElem#"+os+"_block").slideDown(400);
		$(".con-box").slideUp();
		$(".con-box."+os+"contentbox").slideDown(400);
		var scroll_top = $(".actBlocks").offset().top;
		$("body").animate({scrollTop:scroll_top}, '500', 'swing', function() { 
		  
		});
		//console.log(".actBlockElem#"+os+"_block")
		return false;
	})
	$(".content-tab").click(function(){
		var content = $(this).attr("data_tab");
		$(".help_con_block").slideUp(200);
		$(".help_con_block."+content).slideDown(400);
		$(".content-tab").removeClass('active');
		$(this).addClass('active');
	})
});

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
		 for (var i = (start || 0), j = this.length; i < j; i++) {
			 if (this[i] === obj) { return i; }
		 }
		return -1;
	}
}
