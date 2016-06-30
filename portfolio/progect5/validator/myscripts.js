$(document).ready(function(){



    $(".loginform").validate({

        rules:{

            login:{
                required: true,
                minlength: 4,
            },

            phone:{
                required: true,
                minlength: 5,
            },

        },

        messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 4 символа",
            },

            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер должн быть минимум 5 символа",
            },

        }

    });

    $(".loginformSecond").validate({

        rules:{

            login:{
                required: true,
                minlength: 4,
            },

            phone:{
                required: true,
                minlength: 5,
            },

        },

        messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 4 символа",
            },

            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер должн быть минимум 5 символа",
            },

        }

    });

    $(".loginformThird").validate({

        rules:{

            login:{
                required: true,
                minlength: 4,
            },

            phone:{
                required: true,
                minlength: 5,
            },

        },

        messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 4 символа",
            },

            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер должн быть минимум 5 символа",
            },

        }

    });

    $(".loginformForth").validate({

        rules:{

            login:{
                required: true,
                minlength: 4,
            },

            phone:{
                required: true,
                minlength: 5,
            },

        },

        messages:{

            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 4 символа",
            },

            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер должн быть минимум 5 символа",
            },

        }

    });


}); //end of ready