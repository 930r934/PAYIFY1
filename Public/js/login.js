//Login

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
		(function(){



		const login = document.querySelector("#login-form");

		login.addEventListener('submit', (e) => {
			e.preventDefault();
		    const email = login['email'].value;
			 const password = login['pass'].value;
		     const auth = firebase.auth();

			auth.signInWithEmailAndPassword(email, password)
			  .then(cred => {
		 		var user = firebase.auth().currentUser;
				var verified = user.emailVerified;
				if(verified)
				{
					console.log(cred.user);
					window.location="Main-Home.html";
					login.reset();
				}
				else {
					window.alert("Your Emails not Verified, Sorry");
					console.log(cred.user);
					window.location="login.html";
					login.reset();
				}

			}).catch(err => {
				const wronglogin = document.querySelector("#wronglogin");
				wronglogin.style.display = "block";
				wronglogin.innerHTML = err;
				$('#wronglogin').delay(5000).fadeOut('slow');
			})
		})

		//document.getElementById("gbutton").onclick = signInWithGoogle();





		}());
  } else {
		window.location = "Main-Home.html";
	} })
