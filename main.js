function ajax_register(username, password, email, name, lastname, phone){
     $.ajax({

           
           url: '/api/sign_up/',
           type: 'POST',
           dataType: 'json',
           enctype: 'multipart/form-data',
           data: {'username': username,'password': password,
'email': email,'name':name,'lastname':lastname, 'phone': phone,

                      'csrfmiddlewaretoken': '{{ csrf_token }}'},
           
           success: function(data) {
            if (data.data==1){
                console.log("success")
                location.replace("/")

            }
            else if (data.data=="error"){
                console.log("user")
                $(".login_exists").css("display", "block")
            }
            else if (data.data==2){
                console.log("success")
                location.replace("/"+String(data.pk)+"/")

            }
            

           },
           error: function(data) {
                  alert('Something went wrong.');
           }


           })
}



$(document).on("click", ".btn_registration", function(){
    //$(".login_head").css("display", "none")
    
    var username = $("#register-login").val()
    var password = $("#register-password").val()
    var email = $("#register-email").val()
    var name = $("#register-name").val()
    var lastname = $("#register-lastname").val()
    var phone = $("#register-phone").val()
    var agree = $("#register-agree")
    
    
    if ($(this).text()!="Register"){
        profile_category = "salesman"

    }
    


    

    if (username.length != 0 && password.length != 0 && email.length != 0 && name.length != 0 && lastname.length != 0 && phone.length != 0 && agree.length>0){
if (agree.is(':checked')) {ajax_register(username, password, email, name, lastname, phone)}
  else{
    $(".label_policy").css("color", "red")

  }
        
      
       
       

    


}
    



})
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

