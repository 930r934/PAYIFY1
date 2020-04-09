
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
   	document.getElementsByTagName("body")[0].style.display = "none"
  	window.location = "login.html";
  } else {

    var final_amt = 0;
    var no_ofitems;
    const liste_r = document.getElementById('carthere');


    db.collection("users").doc(user.uid).get()
    .then(function(data){
     no_ofitems = data.data().cartqty;
     if(no_ofitems == 0)
     {
       document.getElementById('nocart').className = "show";
     }

     else{
         if(document.getElementById('nocart').className == "show")
         {document.getElementById('nocart').className = document.getElementById('nocart').className.replace("show", "");
          }

         db.collection("users").doc(user.uid).collection("cart").get()
         .then(function(querySnapshot) {
           var countr = 1;
           querySnapshot.forEach(function(doc) {
               // doc.data() is never undefined for query doc snapshots
               var quant = doc.data().qty;

               liste_r.innerHTML += "<tr class='table-row' id='issoke0" + countr +"'><td class='column-1'><button onclick='removehere("+countr+");' style='padding-left: 15px;'>remove</button><div class='cart-img-product b-rad-4 o-f-hidden'><img src='" + doc.data().picloc +"' alt='IMG-PRODUCT'></div></td><td class='column-2'>" + doc.data().name +"</td><td class='column-3' id='issoke" + countr +"'>" + doc.data().money + "</td><td class='column-4'><div class='flex-w bo5 of-hidden w-size17'><button class='btn-num-product-down color1 flex-c-m size7 bg4 eff2' onclick='fundown(" + countr + ")'><i class='fs-12 fa fa-minus' aria-hidden='true'></i></button><input class='size8 m-text18 t-center num-product' id='issoke1" + countr +"' type='number' name='num-product1' value='" + quant +"'><button class='btn-num-product-up color1 flex-c-m size7 bg4 eff2' onclick='funup(" + countr + ")'><i class='fs-12 fa fa-plus' aria-hidden='true'></i></button></div></td><td class='column-5' id='issoke2" + countr +"'>" + (quant*doc.data().money) + "</td></tr>"



               countr = countr+1;
               final_amt = final_amt + (quant*doc.data().money);

               document.getElementById("finalamt").firstChild.nodeValue = final_amt ;

           });


       })
       .catch(function(error){
         window.alert("YO FOUND AN ERROR 3" + error);

       })
       }

    })
    .catch(function(error){
      window.alert("4" + error);
    })




	}
});

function fundown(countr){
 var p = Number(document.getElementById('issoke1' + countr).value);
 if(p>1){
   var qty2 = p - 1;
 document.getElementById('issoke1' + countr).value = qty2;
 var money = Number(document.getElementById('issoke2'  + countr).firstChild.nodeValue);
 money = (money/p);
document.getElementById('issoke2'  + countr).firstChild.nodeValue = (money*qty2);
document.getElementById("finalamt").firstChild.nodeValue = Number((document.getElementById("finalamt").firstChild.nodeValue - money*p) + (money*qty2)) ;}

};

function funup(countr){
 var p = Number(document.getElementById('issoke1' + countr).value);
 var qty2 = p + 1;
 document.getElementById('issoke1' + countr).value = qty2;
 var money = Number(document.getElementById('issoke2'  + countr).firstChild.nodeValue);
 money = (money/p);
 document.getElementById('issoke2'  + countr).firstChild.nodeValue = (money*qty2);
 document.getElementById("finalamt").firstChild.nodeValue = Number((document.getElementById("finalamt").firstChild.nodeValue - money*p) + (money*qty2)) ;
};
/*document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};*/
function removehere(countr){
  var user = firebase.auth().currentUser;
  window.alert(countr);
  var div = document.getElementById("issoke0"+countr);
  var itemname = document.getElementById('issoke' + countr).previousSibling.firstChild.nodeValue
  db.collection("users").doc(user.uid).collection("cart").get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots

        if(doc.data().name == itemname)
        {
        db.collection("users").doc(user.uid).get().then(function(da){
          db.collection("users").doc(user.uid).set({
          cartqty: (da.data().cartqty - doc.data().qty)
        },{merge : true})

          doc.ref.delete().then(function() {
            console.log("1300135 Document successfully deleted!");
            div.parentNode.removeChild(div);
            swal("Item successfully removed!","You can add back the items in the shop", "success");

            document.getElementById("finalamt").firstChild.nodeValue = Number((document.getElementById("finalamt").firstChild.nodeValue - (doc.data().qty*doc.data().money)));

            location.reload();
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });
          })
        }
    });
})
.catch(function(error) {
    console.log("Error getting documents11111111111: ", error);
});



};
