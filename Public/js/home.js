

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    /*  db.collection('users').doc(user.uid).get().then(doc => {
          var kyc = doc.data().kyc;
          const kycalert =  document.querySelector("#kyc-alert");
          if(!kyc){
              kycalert.style.display="block";
          }

      })*/


      const liste_r1 = document.getElementById('jackS');

      db.collection("users").doc(user.uid).get()
      .then(function(data){
       no_ofitems = data.data().cartqty;





           db.collection("users").doc(user.uid).collection("cart").get()
           .then(function(querySnapshot) {

             querySnapshot.forEach(function(doc) {
                 // doc.data() is never undefined for query doc snapshots
                  var quant = doc.data().qty;

              liste_r1.innerHTML += "<li class='header-cart-item'><div class='header-cart-item-img'><img src='" + doc.data().picloc + "' alt='IMG'></div> <div class='header-cart-item-txt'><a href='#' class='header-cart-item-name'>" + doc.data().name + "</a><span class='header-cart-item-info'>Rs " + (quant*doc.data().money) + "</span></div></li>";





             });


         })
         .catch(function(error){
           window.alert("YO FOUND AN ERROR1" + error);

         })


      })
      .catch(function(error){
        window.alert("2" + error);
      })


    }


else{
  window.location = "login.html";
}


  });
