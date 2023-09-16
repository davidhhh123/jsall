
$(document).on("click", ".btn_login", function(){
    //$(".login_head").css("display", "none")
    
    var username = $("#singin-email").val()
    var password = $("#singin-password").val()
    
    

    if (username.length != 0 && password.length != 0){
       
        $.ajax({

           
           url: '/api/sign_in/',
           type: 'POST',
           dataType: 'json',
           enctype: 'multipart/form-data',
           data: {'username': username,'password': password,


                      'csrfmiddlewaretoken': '{{ csrf_token }}'},
           
           success: function(data) {
            if (data.data==1){
                console.log("success")
                location.replace("/")

            }
            else{
                
                $(".login_invalid").css("display", "block")

            }

           },
           error: function(data) {
                  alert('Something went wrong.');
           }


           })

    }
    



})


