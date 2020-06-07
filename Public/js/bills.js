
var gbal;
var state,dist,area,pinc,house,oname;

(function ($) {

  var g;
    "use strict";

    /*==================================================================
    [ Validate ]*/



    var input = $('.validate-input .input100');

    $('#update').on('click',function(){
        window.alert(window.onload)
        var check = true;

        for(var i=0; i<input.length - 2; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }


        var s = document.getElementById('sel1');
        var q = document.getElementById('sel1').value;
        state = s.getElementsByTagName('option')[q].text;
        var d = document.getElementById('sel2');
        var q1 = document.getElementById('sel2').value;
        dist = d.getElementsByTagName('option')[q1].text;
        area = document.getElementById('area').value;
        pinc = document.getElementById('pin').value;

        console.log(state,dist,area,pinc);
        if(check == true)
        {
        db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).get()
        .then(function(d){
          if(d.exists)
          {
          if(pinc == d.data().PINCODE)
          {


              document.getElementById("one").style.display = 'none';
              document.getElementById("two").style.display = 'block';

          }
          else {
            showValidate(input[3]);
            check = false;
          }
          }
          else{
            showValidate(input[2]);

            check = false;

          }
        })
        .catch(function(er){
          window.alert("not found"+er);
        })

        $('#update1').on('click',function(){

          var check = true;

          for(var i=input.length - 2; i<input.length ; i++) {
              if(validate(input[i]) == false){
                  showValidate(input[i]);
                  check=false;
              }
          }


          house = document.getElementById('hos').value;
          oname = document.getElementById('oname').value;

          db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).get()
          .then(function(d){
            if(d.exists)
            {
              if(d.data().ownername == oname)
              {

                document.getElementById("dt").innerHTML = d.data().lastpaid.toDate();
                document.getElementById("unit").innerHTML = d.data().units;
                document.getElementById("rt").innerHTML = d.data().rpu;
                document.getElementById("amt").innerHTML = d.data().rpu*d.data().units;
                document.getElementById("famt").innerHTML = d.data().rpu*d.data().units;

                    db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).collection("history").get()
                    .then(function(querySnapshot){
                      querySnapshot.forEach(function(doc) {
                        document.getElementById("hist").innerHTML += "<div class='flex-w flex-sb-m p-b-12'><span class='s-text18 w-size19 w-full-sm'>Date:</span><span class='m-text21 w-size20 w-full-sm'  id='dt1'>"+ doc.data().date.toDate() +"</span><span class='s-text18 w-size19 w-full-sm'>Amount:</span><span class='m-text21 w-size20 w-full-sm' id='amt11'>"+ doc.data().amount +"</span><span class='s-text18 w-size19 w-full-sm'>Units:</span><span class='m-text21 w-size20 w-full-sm' id='unit1'>"+ doc.data().units +"</span></div>";
                      })
                    })




                document.getElementById("two").style.display = 'none';
                document.getElementById("three").style.display = 'block';
              }
              else{

                showValidate(input[6]);

              }
            }
            else{
              showValidate(input[5]);
              showValidate(input[6]);
            }
          })

        })


        $('#update2').on('click',function(){

          var user = firebase.auth().currentUser;

          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get()
          .then(function(d){
           gbal = d.data().balance;
          })


          db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).get()
          .then(function(dw){

            g = dw.data().units;
            if(g > 0)
            {

              db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get()
              .then(function(d){
                var be = d.data().balance;
                if(Number(document.getElementById("famt").innerHTML) <= d.data().balance)
                {
                  window.alert("cash ondd");

                  db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).collection("history").add({
                    amount: document.getElementById("famt").innerHTML,
                    date: firebase.firestore.Timestamp.now() ,
                    units: document.getElementById("unit").innerHTML
                  })


                  db.collection("users").doc(user.uid).collection("wallet").doc("wallet").set({
                    balance: (be-Number(document.getElementById("famt").innerHTML))

                  }, { merge: true })

                  db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).set({
                    lastpaid: firebase.firestore.Timestamp.now() ,
                    units: 0,
                    dueamount: 0

                  }, { merge: true }).then(function(){

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





                  })


                }


                else{
                  console.log("cash illaloo");

                  $('#myM').modal('show');


                }
              })



            }

            else{
              window.alert("No DUES to be cleared !")
            }
          })




        })



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
function toot(){

  document.getElementById("sel2").innerHTML = "<option value=''>District</option>";

  var b = document.getElementById("sel1");
  if(b.value !== '')
  {
    document.getElementById("sel2").disabled = false;
    if(b.value == 1)
    {
      var jak = 1;
      db.collection("bills").doc("kerala").collection("district").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

          document.getElementById("sel2").innerHTML += "<option value='"+ jak +"'>"+ doc.id +"</option>";

        }
      )
    })

    }
    else if(b.value == 2)
    {
      var jak = 1;
      db.collection("bills").doc("karnataka").collection("district").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

          document.getElementById("sel2").innerHTML += "<option value='"+ jak +"'>"+ doc.id +"</option>";

        }
      )
    })
    }
  }
  else{
    document.getElementById("sel2").disabled = true;
  }


}
function applycoup1(){



db.collection("Coupons").doc("Items").collection("coupons").get().then(function(d){
d.forEach(function(doc) {
  if(doc.id == document.getElementById('iput').value)
  {
    document.getElementById("vd").style.visibility = 'visible';
    setTimeout(function(){ document.getElementById("vd").style.visibility = 'hidden'; }, 1000);
    document.getElementById('disc').innerHTML = doc.data().discount + "%";
    document.getElementById('famt').innerHTML = Number(document.getElementById('amt').innerHTML) - ((doc.data().discount/100)*Number(document.getElementById('amt').innerHTML));
  }
  else {
    document.getElementById("ivd").style.visibility = 'visible';
    setTimeout(function(){ document.getElementById("ivd").style.visibility = 'hidden'; }, 1000);
  }
})
})


}




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
            window.alert("ivede");
            db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc) {

                if(doc.data().cardno == tc)
                {

                  if ((document.getElementById("cardholder").value == doc.data().cardname) && (document.getElementById("cardnumber").value == doc.data().cardno) && (document.getElementById("date").value == doc.data().expr) && (document.getElementById("cvv").value == doc.data().cvv) )
                  {
                    window.alert("ivede");
                    var d = doc.data().balinc;

                    if(d < (document.getElementById("famt")-gbal))
                    {

                      window.alert("Card ERROR!");
                      window.location = 'Shopping-Cart.html';


                    }


                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                    balinc : (d - Number(document.getElementById("famt").textContent)-gbal)

                    })

                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                      balance: 0
                    })

                    db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).collection("history").add({
                      amount: document.getElementById("famt").innerHTML,
                      date: firebase.firestore.Timestamp.now() ,
                      units: document.getElementById("unit").innerHTML
                    })




                    db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).set({
                      lastpaid: firebase.firestore.Timestamp.now() ,
                      units: 0,
                      dueamount: 0

                    }, { merge: true })


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
                          window.alert("FAKK"+ error);
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

                          if(d < (document.getElementById("famt")-gbal))
                          {

                            window.alert("Card ERROR!");
                            window.location = 'Shopping-Cart.html';


                          }


                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                          balinc : (d - Number(document.getElementById("famt").textContent) - gbal)

                          })

                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                            balance: 0
                          })

                          db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).collection("history").add({
                            amount: document.getElementById("famt").innerHTML,
                            date: firebase.firestore.Timestamp.now() ,
                            units: document.getElementById("unit").innerHTML
                          })




                          db.collection("bills").doc(state).collection("district").doc(dist).collection("area").doc(area).collection("houses").doc(house).set({
                            lastpaid: firebase.firestore.Timestamp.now() ,
                            units: 0,
                            dueamount: 0

                          }, { merge: true })

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
function funk(){

  $('#myM').modal('hide');
  $('#myM2').modal('show');

}

var invaild_cred = 0;
