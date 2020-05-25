

var dname,dtime,dt;
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        params2 = url.split('?')[2].split('&'),
        params3 = url.split('?')[3].split('&'),
        data = {},
        tmp;
        console.log(params);

    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         console.log(tmp);
         data[tmp[0]] = tmp[1];
    }

    for (var i = 0, l = params3.length; i < l; i++) {
         tmp = params3[i].split('=');
         console.log(tmp);
         data[tmp[0]] = tmp[1];
    }

    for (var i = 0, l = params2.length; i < l; i++) {
         tmp = params2[i].split('=');
         console.log(tmp);
         data[tmp[0]] = tmp[1];
    }
    var temp;
    temp = data.name.replace("%20"," ");
    data.name = temp;
    temp = data.time.replace("%3A",":");
    data.time = temp;
    temp = data.theater.replace("%20"," ");
    data.theater = temp;
    window.alert(data.name);
    window.alert(data.theater);
    window.alert(data.time);
dname = data.name;

dtime = data.time;
dt = data.theater;
/* window.addEventListener('scroll', function(e) {

    if(window.pageYOffset > 512)
    {
      document.getElementsByClassName("jj")[0].style.position = "absolute";
      document.getElementsByClassName("jj")[0].style.top = "550px";
      document.getElementsByClassName("jj")[1].style.position = "absolute";
      document.getElementsByClassName("jj")[1].style.top = "550px";

    }

 })*/

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {


          document.querySelector('#moviename').innerHTML = data.name;
          db.collection("theaters").doc(data.theater).collection("movies").doc(data.name).collection("timings").doc(data.time).get().then(function(data0) {
            if(data0.exists)
            {




            for(var i = 0; i < data0.data().SeatsBooked.length; i++ )
            document.getElementById(""+data0.data().SeatsBooked[i]+"").style.background = 'yellow';


            }
            else {
              console.log("doc doesnt exist");
            }
          }).catch(function(error) {
            console.log("error", error);
          });



        }


    else{
      window.location = "login.html";
    }


      });

}
var count = 0;
var sn = 0;
var seats = [];
var total = 0;

function myFunction(s){

if((document.getElementById(s).style.background !== "green")&&(document.getElementById(s).style.background !== "yellow"))
  {
    seats[sn] = s;
    sn++;
    count++;
    document.getElementById(s).style.background = "green";
    document.getElementById('seato').innerHTML = "Rs120 x"+count;
    document.getElementById('seati').innerHTML = "Rs"+(120*count);
    total = 120*count;
    document.getElementById('seatnos').innerHTML += "<p id='p"+ s +"'>" + s + "</p>";
  //  window.alert(window.pageYOffset);
  }
else if(document.getElementById(s).style.background == "green")
    {
       sn--;
      for( var k =0; k<seats.length;k++)
      {
        if(seats[k] == s)
        {
          for( var p = k; p<(seats.length-1); p++)
          {
            seats[p] = seats[p+1];
          }
          seats.pop();
        }

      }
      count--;
      total = 120*count;
      document.getElementById(s).style.background = "linear-gradient(to top, #761818, #761818, #761818, #761818, #761818, #b54041, #f3686a)";
      document.getElementById('seato').innerHTML = "Rs120 x"+count;
      document.getElementById('seati').innerHTML = "Rs"+(120*count);
      document.getElementById("p"+s).remove();
    }

console.log(count);
console.log(seats);
}


function blub(){

if(total > 0)
{
  firebase.auth().onAuthStateChanged(function(user){

  db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get().then(function(data){

  if(data.data().balance >= total)
  {
  db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
    balance: (data.data().balance - total)
  })


    for( var i = 0; i < seats.length;i++)
    {
    db.collection("theaters").doc(dt).collection("movies").doc(dname).collection("timings").doc(dtime).update({

        SeatsBooked: firebase.firestore.FieldValue.arrayUnion(seats[i])

    })
    }
    download("ticket.html","<h2>TICKET</h2>Movie Name___________________________"+document.querySelector('#moviename').innerHTML+"<br/> Issuing Time:___________________________"+Date()+" <br/> Seat numbers___________________________"+seats+"<br/> amount paid___________________________Rs"+total+"<br/> Ticket number___________________________"+(Math.floor(Math.random() * 1000000) + 99999));
  swal({title: "Purchased successfully!", text:"Your Ticket will be downloaded!", type: "success",icon: "success"})
  .then(function(){
    window.location = "Movie-Ticket.html";
  });
  }
  else {
    window.alert("NOT ENOUGH MONEY!");

    $('#myM').modal('show');




  }
  })

})


}
else
{
  Swal.fire({
  position: 'center-end',
  title: 'Liar you didnt choose a seat!',
  icon: "error",
  width: 600,
  padding: '3em',
  background: '#fff',
  backdrop: `
    rgba(0,0,123,0.4)
    url("images/nyan-cat.gif")
    left bottom
    no-repeat
  `
})
}
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function funk(){

  $('#myM').modal('hide');
  $('#myM2').modal('show');

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
    window.alert("yaw");
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

window.alert(currentTab);


  if (currentTab >= x.length) {
    //...the form gets submitted:
    window.alert("NOPE");
    window.alert(tc);

          if(whe == 0)
          {

            db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc) {

                if(doc.data().cardno == tc)
                {
                  window.alert(tc);
                  if ((document.getElementById("cardholder").value == doc.data().cardname) && (document.getElementById("cardnumber").value == doc.data().cardno) && (document.getElementById("date").value == doc.data().expr) && (document.getElementById("cvv").value == doc.data().cvv) )
                  {
                    var d = doc.data().balinc;
                  window.alert(document.getElementById("date").value+doc.data().expr);
                  window.alert(document.getElementById("cvv").value+doc.data().cvv);
                    if(d < total)
                    {

                      window.alert("Card ERROR!");
                      window.location = 'Shopping-Cart.html';


                    }


                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                    balinc : (d - total)

                    })

                    db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                      balance: 0
                    })

                    for( var i = 0; i < seats.length;i++)
                    {
                    db.collection("theaters").doc(dt).collection("movies").doc(dname).collection("timings").doc(dtime).update({

                        SeatsBooked: firebase.firestore.FieldValue.arrayUnion(seats[i])

                    })
                    }


                  $('#myM2').modal('hide');
                    Swal.fire({
                    position: 'center',
                    title: 'Tickets Purchased!',
                    width: 600,
                    padding: '3em',
                    background: '#fff',
                    backdrop: `
                      rgba(0,0,123,0)
                      url("images/money.gif")

                    `
                  }).then(function(){



                    download("ticket.html","<h2>TICKET</h2>Movie Name___________________________"+document.querySelector('#moviename').innerHTML+"<br/> Issuing Time:___________________________"+Date()+" <br/> Seat numbers___________________________"+seats+"<br/> amount paid___________________________Rs"+total+"<br/> Ticket number___________________________"+(Math.floor(Math.random() * 1000000) + 99999));
                    window.location = 'Main-Home.html';
                  })

                  }

                  else {

                    window.alert("Invalid Card credentials!");
                    window.location = 'Shopping-Cart.html';


                  }
                }





              })
            })


          }


          else {
                window.alert("New Card");
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

                          if(d < total)
                          {

                            window.alert("Card ERROR!");
                            window.location = 'Shopping-Cart.html';


                          }


                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").collection("cards").doc(doc.id).update({

                          balinc : (d - document.getElementById("yomoneyb2"))

                          })

                          db.collection("users").doc(user.uid).collection("wallet").doc("wallet").update({
                            balance: 0
                          })

                          for( var i = 0; i < seats.length;i++)
                          {
                          db.collection("theaters").doc(dt).collection("movies").doc(dname).collection("timings").doc(dtime).update({

                              SeatsBooked: firebase.firestore.FieldValue.arrayUnion(seats[i])

                          })
                          }


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

                          download("ticket.html","<h2>TICKET</h2>Movie Name___________________________"+document.querySelector('#moviename').innerHTML+"<br/> Issuing Time:___________________________"+Date()+" <br/> Seat numbers___________________________"+seats+"<br/> amount paid___________________________Rs"+total+"<br/> Ticket number___________________________"+(Math.floor(Math.random() * 1000000) + 99999));

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
