//Login



(function(){

	var firebaseConfig = {
		apiKey: "AIzaSyBL1N2ka6BQDb81AI8GKrRf6CPD195LU6M",
		authDomain: "payment-application-ae819.firebaseapp.com",
		databaseURL: "https://payment-application-ae819.firebaseio.com",
		projectId: "payment-application-ae819",
		storageBucket: "payment-application-ae819.appspot.com",
		messagingSenderId: "751770368720",
		appId: "1:751770368720:web:90029124c1dfca20a8fcd5",
		measurementId: "G-9EHEV8DQLD",
	};
	firebase.initializeApp(firebaseConfig);

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
