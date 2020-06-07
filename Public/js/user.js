var nam,dob,add,ad,pass;
var newPassword,  cpassword;;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
   	document.getElementsByTagName("body")[0].style.display = "none"
  	window.location = "login.html";
  } else {

    (function ($) {


        "use strict";

        /*==================================================================
        [ Validate ]*/












        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
               hideValidate(this);
            });
        });

        function validate (input) {
          var n = 0;
            if($(input).attr('type') == 'password' || $(input).attr('name') == 'pass') {
                if($(input).val().match(/\d/g) == null) {

                    document.getElementById("v1").data = "red";


                }
                else{
                  document.getElementById("v1").style.color = "#0bc800";

                  n++;
                }

                  if($(input).val().match(/[a-zA-Z0-9]{8,15}/g) == null)
                  {
                    document.getElementById("v3").style.color = "red";

                  }
                  else{
                    document.getElementById("v3").style.color = "#0bc800";

                    n++;
                  }

                  if($(input).val().match(/[A-Z]+/g) == null) {

                      document.getElementById("v2").style.color = "red";



                  }
                  else{
                    document.getElementById("v2").style.color = "#0bc800";

                    n++;
                  }

                  if($(input).val().match(/\s/g) == null) {

                    n++;


                  }
                  console.log(n);

                  if(n !== 4)
                  {
                    n=0;
                    return false;

                  }
                  else
                  return true;

            }
            else {
                if($(input).val().trim() == ''){
                    return false;
                }
            }
        }

        function showValidate(input) {

            var thisAlert = $(input).parent();

              $('#updateuser').css("background","red");
              setTimeout(function(){ $('#updateuser').css("background","#f2f2f2"); }, 100);

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {

            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }

        	var user = firebase.auth().currentUser;

        db.collection('users').doc(user.uid).get().then(
          doc => {
    	  	document.getElementById('newusername').value = doc.data().name;
    	  	document.getElementById('newdob').value = doc.data().dob;
    	  	document.getElementById('newaddress').value = doc.data().address;
    	  	document.getElementById('newadhaar').value = doc.data().adhaar;
    	  	document.getElementById('newpassword').value = doc.data().password;

          nam = document.getElementById('newusername').value;
        dob = document.getElementById('newdob').value;
          add = document.getElementById('newaddress').value;
          ad = document.getElementById('newadhaar').value;
        pass = document.getElementById('newpassword').value;
      	}
      )


      pass = document.getElementById('newpassword').value;


    	var user = firebase.auth().currentUser;

    		var update = document.getElementById('update');
        var up = document.getElementById('update1');
    		update.addEventListener('click', (e) => {
    			e.preventDefault();



          if((nam !== document.getElementById('newusername').value) || (dob !== document.getElementById('newdob').value) || (add !== document.getElementById('newaddress').value) || (ad !== document.getElementById('newadhaar').value) || (pass !== document.getElementById('newpassword').value))
          {
            var check = true;
              var input = $('.validate-input .input100');
            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }

            if(check == true)
            {
    			db.collection('users').doc(user.uid).update({
    				dob: document.getElementById("newdob").value,
    				name: document.getElementById("newusername").value,
    				adhaar: document.getElementById("newadhaar").value,
    				address: document.getElementById("newaddress").value
    			}).then(function(){

            if(pass !== document.getElementById('newpassword').value)
            {
    				 newPassword = document.getElementById('newpassword').value;

            window.alert("enter password again for confirmation");
            document.getElementById("update").style.display = "none";
            document.getElementById("update1").style.display = "block";
            document.getElementById('newpassword').value = "";

          }
          else{
            document.getElementById("update-details").style.display = "block";
            $('#update-details').delay(3000).fadeOut('slow');
          }
    			}).catch(function(eror){
    				document.getElementById("wrong-details").style.display = "block";
    				$('#wrong-details').delay(3000).fadeOut('slow');
    				document.getElementById("wrong-details").innerHTML = error;
    			})
        }
        }

        else{

          window.alert("no values updated");
        }

    		})







        up.addEventListener('click', (e) => {
          cpassword = document.getElementById('newpassword').value;
          if(cpassword == newPassword)
          {

      user.updatePassword(newPassword).then(function() {
        db.collection('users').doc(user.uid).update({
          password: document.getElementById('newpassword').value
        })
      document.getElementById("update-details").style.display = "block";
      $('#update-details').delay(3000).fadeOut('slow');
      }).catch(function(error) {
          auth.signOut().then(() => {
          window.location = "login.html";
        })
        alert(error);
      });
      document.getElementById("update1").id = "update";
    }
    else{
      window.alert("new passwords dont match");
      document.getElementById("update1").id = "update";
      location.reload();
    }
    })

    var japa = document.getElementById("remove");
    japa.addEventListener('click',(e) => {
      swal({
        title: "Are you sure?",
        text: "Your account will be deleted permenantly!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

            db.collection('users').doc(user.uid).delete().then(function() {
              user.delete().then(function() {
                window.location = "login.html";
                }).catch(function(error) {
                  window.alert(error);
                });
              console.log("Account successfully deleted!");
            }).catch(function(error) {
              console.error("Error removing document: ", error);
            });





        } else {
          swal("Good Choice!");
        }
      });



    })


    })(jQuery);






	}
});
