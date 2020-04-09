//New User Sign up
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
const newuser = document.querySelector('#new-user');
const button1 = document.getElementById('but1');
newuser.addEventListener('submit', (e) => {
	e.preventDefault();

    const name = newuser['username'].value;
	const dob = newuser['dob'].value;
	const email = newuser['uid'].value;
	const pass = newuser['pass'].value;
	const cpass = newuser['confpass'].value;
	const auth = firebase.auth();
	const db = firebase.firestore();
	if(pass==cpass)
	{
	 auth.createUserWithEmailAndPassword(email,pass).then(cred => {
		return db.collection('users').doc(cred.user.uid).set({
			name: name,
			dob: dob,
			email:email,
			password: pass,
			kyc: false
		});
	 //promise.catch(e => console.log(e.message));
	 //promise.then(() => {
		//window.location = "login.html";
		//newuser.reset();
	}).then(() => {

					auth.currentUser.sendEmailVerification()
									.then(function() {
									window.location = "login.html";
			  					window.alert("Please verify your Email to proceed");
						      newuser.reset();
																	})
								  .catch(function(error) {
			  					window.alert("Error :" + error.errorMessage);
																					});

}).catch(err => {
	const wrongalert = document.querySelector("#wrongemail");
	wrongalert.style.display = "block";
	wrongalert.innerHTML = err;
});
}
else
{
	window.alert("Passwords do not match");
}



});
//firebase.auth().onAuthStateChanged(firebaseUser => {
//	if(firebaseUser) {
//		console.log(firebaseUser);
//	}
//	else{
//		console.log('Not logged in');
//	}
//});
}());
