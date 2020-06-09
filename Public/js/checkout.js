var gbal;
var url = document.location.href,
    params = url.split('?')[1].split('&');
    var data321;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         console.log(tmp);
         data321 = tmp[1];
    }
function funk(){

  $('#myM').modal('hide');
  $('#myM2').modal('show');

}

var invaild_cred = 0;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {

  	window.location = "login.html";
  } else {






    (function ($) {

      db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get()
      .then(function(d){
       gbal = d.data().balance;
      })
        "use strict";

        /*==================================================================
        [ Validate ]*/

        db.collection("users").doc(user.uid).get()
        .then(function(doc) {

            if( doc.data().cartqty == 0 )
            {

              window.location = "Shopping-Cart.html";
            }


      })

        var input = $('.validate-input .input100');

        $('#update').on('click',function(){

            var check = true;

            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }

            if((input[2].value.toString().length != 10)){
              showValidate(input[2]);
              check = false;
            }
            if((input[3].value.toString().length != 6)){
              showValidate(input[3]);
              check = false;
            }
            if(check == true)

            {

            db.collection('users').doc(user.uid).collection("wallet").doc("wallet").get().then(function(doc){

              if(document.getElementById("yomoneyb2").firstChild.nodeValue > doc.data().balance)
              {
                $('#myM').modal('show');
              }

              else {


                var pg;


                db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get().then(function(d){


                db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                  balance: (d.data().balance - document.getElementById("yomoneyb2").firstChild.nodeValue)
                })

                } )
                db.collection("users").doc(user.uid).get().then(function(da){
                  db.collection("users").doc(user.uid).set({
                  cartqty: 0
                },{merge : true})
              })


                db.collection("users").doc(user.uid).collection("cart").get()
                .then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {

                    doc.ref.delete();
                  }
                )
              })


              Swal.fire({
              position: 'center',
              title: 'Order Placed!',
              text:"Your order will reach you in 5-7 working days!",
              width: 600,
              padding: '3em',
              background: '#fff',
              backdrop: `
                rgba(0,0,123,0)
                url("images/money.gif")

              `
            }).then(function(){
              window.location = "Main-Home.html";
            });

              //  swal({title: "", text:"Your order will reach you in 5-7 working days!", type: "success",icon: "success"})





              }
            }
          )
           }
              return check;
        });


        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
               hideValidate(this);
            });
        });

        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
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



    })(jQuery);






    db.collection('users').doc(user.uid).get().then(
      doc => {
      document.getElementById('newusername').value = doc.data().name;
      document.getElementById('emailid').value = doc.data().email;
      document.getElementById('newaddress').value = doc.data().address;

    }
  )


  var k = document.getElementById("Items");
  var p = document.getElementById('qty');
  var tots=0;
  db.collection("users").doc(user.uid).collection("cart").get()
  .then(function(querySnapshot) {
    var countr = 1;
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
         tots += doc.data().qty*doc.data().money;

        k.innerHTML += "<table><td><span class='contact100-form-title' style='text-align:left;font-size: 18px;'>"+ doc.data().name +"</span></td></table>"
        p.innerHTML +="<span class='contact100-form-title' style='text-align:left;font-size: 18px;'>x"+ doc.data().qty+"</span>"


        //countr = countr+1;
        //final_amt = final_amt + (quant*doc.data().money);

        //document.getElementById("finalamt").firstChild.nodeValue = final_amt ;

    });
tots = data321;
document.getElementById("yomoneyb2").firstChild.nodeValue = tots;
})

//window.alert(window.history);
//history.back();


	}
});

var card = [];
var y = 0;
var whe = 0;
var tc;



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var k;
function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {


  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:

  if(currentTab !== 2)
  {
  if (n == 1 && !validateForm()) return false;
   }
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  var user = firebase.auth().currentUser;
  var damn;

  if (currentTab == 0)
  {

    document.getElementById('ki').style.display = "block";
    document.getElementById("regForm1").style.padding = "60px";

  var j = document.getElementById("onehere").getElementsByTagName("label");

  for(var i = 0 ; i < j.length ; i++)
  {

    if (j[i].getElementsByTagName("input")[0].checked == true)
    {

      damn = i;

    }

  }


  if (damn == 0)
  {
    n = 2;
    whe = 1;
  }
  }



  if ((currentTab == 2) && (whe == 1) && (n == -1))
  {
    document.getElementById('ki').style.display = "block";
    document.getElementById("regForm1").style.padding = "60px";
    n = -2;
    whe = 0;
  }



  currentTab = currentTab + n;


  // if you have reached the end of the form... :
  var b = document.getElementById("onehere");
  var c = b.getElementsByTagName("input");
  var v = document.getElementById("head").textContent;



  if(currentTab == 1)
  {
    document.getElementById('ki').style.display = "block";
    document.getElementById("regForm1").style.padding = "60px";



    document.getElementById("twohere").innerHTML = " ";
    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        card[y] = doc.data().cardno;
        y++;
        var j = doc.data().cardno;
        var k = j.slice(0, j.length-4);
        k += "****";
       document.getElementById("twohere").innerHTML += "<label class='container1'>"+k+"<input type='radio' name='radio'><span class='checkmark'></span></label>";

      })

   })
 }





 if(currentTab == 2)
 {
   document.getElementById("cardholder").value = " ";
   document.getElementById("cardnumber").value = " ";
   if(whe == 0)
   {
   document.getElementById('ki').style.display = "none";
   document.getElementById("regForm1").style.padding = "30px";

   var j = document.getElementById("twohere").getElementsByTagName("label");
   for(var i = 0 ; i < j.length ; i++)
   {

     if (j[i].getElementsByTagName("input")[0].checked == true)
     {

       tc = card[i];

     }

   }



db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
  querySnapshot.forEach(function(doc) {

    if(doc.data().cardno == tc)
    {

      document.getElementById("cardholder").value = doc.data().cardname;
      document.getElementById("cardnumber").value = doc.data().cardno;

    }

  })
})


 }

else
{
  document.getElementById('ki').style.display = "none";
  document.getElementById("regForm1").style.padding = "30px";
  window.alert("form for new card");

}

}




  if (currentTab >= x.length) {
    //...the form gets submitted:



          if(whe == 0)
          {

            db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc) {

                if(doc.data().cardno == tc)
                {

                  if ((document.getElementById("cardholder").value == doc.data().cardname) && (document.getElementById("cardnumber").value == doc.data().cardno) && (document.getElementById("date").value == doc.data().expr) && (document.getElementById("cvv").value == doc.data().cvv) )
                  {

                    var d = doc.data().balinc;

                    if(d < (Number(document.getElementById("yomoneyb2").textContent)-gbal))
                    {

                      window.alert("Card ERROR!");
                      window.location = 'Shopping-Cart.html';


                    }

                    window.alert(d);
                    window.alert(gbal);
                    window.alert(Number(document.getElementById("yomoneyb2").textContent));
                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                    balinc : (d - (Number(document.getElementById("yomoneyb2").textContent)-gbal))

                    })

                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                      balance: 0
                    })


                    db.collection("users").doc(user.uid).get().then(function(da){
                      db.collection("users").doc(user.uid).set({
                      cartqty: 0
                    },{merge : true})
                  })


                    db.collection("users").doc(user.uid).collection("cart").get()
                    .then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {

                        doc.ref.delete();
                      }
                    )
                  })

                  $('#myM2').modal('hide');
                    Swal.fire({
                    position: 'center',
                    title: 'Purchase Completed!',
                    width: 600,
                    padding: '3em',
                    background: '#fff',
                    backdrop: `
                      rgba(0,0,123,0)
                      url("images/money.gif")

                    `
                  }).then(function(){
                    window.location = 'Main-Home.html';
                  })

                  }

                  else {

                    window.alert("Invalid Card credentials!");
                    invaild_cred += 1;
                    if(invaild_cred == 3)
                    {
                      window.alert("entered invalid credentials 3 times. you have been logged out");
                      firebase.auth().signOut().then(function() {
                        window.location = "login.html";
                        // Sign-out successful.
                        }).catch(function(error) {
                          window.alert(error);
                          // An error happened.
                        });
                    }
                    window.location = 'Shopping-Cart.html';


                  }
                }





              })
            })


          }


          else {

                db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").add({
                  cardname : document.getElementById("cardholder").value,
                  cardno : document.getElementById("cardnumber").value,
                  expr : document.getElementById("date").value,
                  cvv : document.getElementById("cvv").value,
                  balinc : 1000000

                })
                .then(function(){


                  db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
                    querySnapshot.forEach(function(doc) {

                      if(doc.data().cardno == document.getElementById("cardnumber").value)
                      {


                          var d = doc.data().balinc;

                          if(d < (Number(document.getElementById("yomoneyb2").textContent)-gbal))
                          {

                            window.alert("Card ERROR!");
                            window.location = 'Shopping-Cart.html';


                          }


                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                          balinc : (d - (Number(document.getElementById("yomoneyb2").textContent)-gbal))

                          })

                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                            balance: 0
                          })


                          db.collection("users").doc(user.uid).get().then(function(da){
                            db.collection("users").doc(user.uid).set({
                            cartqty: 0
                          },{merge : true})
                        })


                          db.collection("users").doc(user.uid).collection("cart").get()
                          .then(function(querySnapshot) {
                            querySnapshot.forEach(function(doc) {

                              doc.ref.delete();
                            }
                          )
                        })

                        $('#myM2').modal('hide');
                          Swal.fire({
                          position: 'center',
                          title: 'Purchase Completed!',
                          width: 600,
                          padding: '3em',
                          background: '#fff',
                          backdrop: `
                            rgba(0,0,123,0)
                            url("images/money.gif")

                          `
                        }).then(function(){
                          window.location = 'Main-Home.html';
                        })




                      }





                    })
                  })

                })
                .catch(function(error) {
                  console.error("Error adding document: ", error);
                });

                }



    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);

}

function fixStepIndicator(n) {
// This function removes the "active" class of all steps...
var i, x = document.getElementsByClassName("step");
for (i = 0; i < x.length; i++) {
x[i].className = x[i].className.replace(" active", "");
}
//... and adds the "active" class to the current step:
x[n].className += " active";
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = false;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].checked == true) {
      // add an "invalid" class to the field:

      // and set the current valid status to false:
      valid = true;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status
}




/*if(currentTab == 1)
{

//  document.getElementById("twohere").innerHTML = " ";
    window.alert("c"+currentTab);
  db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc) {

    //  document.getElementById("twohere").innerHTML += "<label class='container1'>"+doc.data().cardno+"<input type='radio' name='radio'><span class='checkmark'></span></label>";

    })
    var o = document.getElementById("twohere").getElementsByTagName("label");
    for(var i = 0; i< o.length;i++)
    {
      o[i].textContent = o[i].textContent.slice(0, o[i].textContent.length - 4);
      o[i].textContent += "****";
    }
  })

}*/
