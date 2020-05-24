//New User Sign up
(function($){



	"use strict";


	/*==================================================================
	[ Validate ]*/
	var input = $('.validate-input .input100');
	console.log(input);
	document.getElementById("but1").addEventListener('click', (e) => {
		e.preventDefault();
			var check = true;

			for(var i=0; i<input.length-1; i++) {

					if(validate(input[i]) == false){
							showValidate(input[i]);
							check=false;
					}
			}

			if(check == true)
			{
				const newuser = document.querySelector('#new-user');

				const name = newuser['username'].value;
			const dob = newuser['dob'].value;
			const email = newuser['uid'].value;
			const pass = newuser['pass'].value;
			const cpass = newuser['confpass'].value;


			console.log(pass,cpass,auth,email);
			if(pass==cpass)
			{
			 	firebase.auth().createUserWithEmailAndPassword(email,pass).then(cred => {
			 	firebase.firestore().collection('users').doc(cred.user.uid).set({
					name: name,
					dob: dob,
					email:email,
					password: pass,
					kyc: false,
					address: null,
					adhaar: null,
					cartqty: 0
				}).then(function(){
				}).catch(function(er){
					window.alert("dbfail"+er);
				})

						firebase.auth().currentUser.sendEmailVerification()
											.then(function() {
											window.location = "login.html";
											window.alert("Please verify your Email to proceed");
											newuser.reset();
																			})
											.catch(function(error) {
											window.alert("Error :" + error.errorMessage);
																							});


			})
		.catch(err => {
			window.alert("failed");
			const wrongalert = document.querySelector("#wrongemail");
			wrongalert.style.display = "block";
			wrongalert.innerHTML = err;
		});



		}
		else
		{
			window.alert("Passwords do not match");
			showValidate(input[4]);
		}

			}




	});


	$('.validate-form .input100').each(function(){
			$(this).focus(function(){
				 hideValidate(this);
			});
	});

	function validate (input) {

					var n = 0;
			if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
					if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
							return false;
					}
			}

			else if($(input).attr('type') == 'password' || $(input).attr('name') == 'pass') {

				if($(input).val() == "")
				return false;
						if($(input).val().match(/\d/g) == null) {

								//document.getElementById("v1").style.color = "red";
								jQuery('#pass1').attr('data-validate','password should include a digit');

						}
						else{
							//document.getElementById("v1").style.color = "#0bc800";

							n++;
						}

							if($(input).val().match(/[a-zA-Z0-9]{8,15}/g) == null)
							{
								//document.getElementById("v3").style.color = "red";
								jQuery('#pass1').attr('data-validate','password should be of length 8-16');
							}
							else{
								//document.getElementById("v3").style.color = "#0bc800";

								n++;
							}

							if($(input).val().match(/[A-Z]+/g) == null) {

									//document.getElementById("v2").style.color = "red";
									jQuery('#pass1').attr('data-validate','password should include an uppercase');


							}
							else{
								//document.getElementById("v2").style.color = "#0bc800";

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

			$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
			var thisAlert = $(input).parent();

			$(thisAlert).removeClass('alert-validate');
	}



const button1 = document.getElementById('but1');

//firebase.auth().onAuthStateChanged(firebaseUser => {
//	if(firebaseUser) {
//		console.log(firebaseUser);
//	}
//	else{
//		console.log('Not logged in');
//	}
//});
})(jQuery);
