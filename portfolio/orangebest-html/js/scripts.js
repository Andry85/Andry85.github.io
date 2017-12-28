$(document).ready(function(){
			$('#one').jqGalScroll();			
});


function li_other_lang_onclick()
{
 mn = document.getElementById('div_other_lang');
 if (mn.style.display == "none")
  {
   mn.style.display = 'block';
   setTimeout('document.onclick = li_other_lang_hide;', 400);
  }
   else
  {
   mn.style.display = "none";
  }
  
}

function li_other_lang_hide()
{
 mn = document.getElementById('div_other_lang');
 if (mn.style.display != "none")
 {
   mn.style.display = "none";
 }
 document.onclick = '';
}