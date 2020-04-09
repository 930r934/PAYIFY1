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

var but1 = document.getElementById('but1');
but1.addEventListener('click', function(){


  var email = $("#email").val();



  if(email != "")
  {
      firebase.auth().sendPasswordResetEmail(email)
      .then(function(data) {

      window.alert("The email has been sent to the following address");
      window.location="login.html";

    })
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      window.alert("Message :" + errorMessage);
    })

  }
  else {

    window.alert("Please enter a valid Email Address");
  }

});
