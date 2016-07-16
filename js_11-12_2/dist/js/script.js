$(function(){


   var person = {
    name: "Иван Иванович Иванов",
    imgUrl: "img/001.png",
    status: "Студент заборостроительного университета",
    meta: "Хочю учить Fron-End потому что:",
    motivation:[
    {
      id: 0, 
      text:"Заборы строить не интересно"
    },
    {
      id: 1, 
      text:"Платят мало"
    },
    {
      id: 2, 
      text:"Приходиться работать по ночам"
    }
    ],
     contacts:[
    {
      field: "Мой контактный телефон", 
      fieldText:"+38022222222"
    },
    {
      field: "Мой провиль вконтакте", 
      fieldText:"vk.com",
      fieldLink:"https://new.vk.com/"

    },
    {
      field: "Мой фидбек", 
      fieldText:"Если нужно могу посроить вам забор"
    }
    ]



  };




  var profile = document.getElementById("profile");
  profile.innerHTML = tmpl("profile_tmpl", person);


});