var currentTab = 0;
window.onload = function () {

  let timer, currSeconds = 0;
  resetTimer();
  function resetTimer() {



      /* Clear the previous interval */
      clearInterval(timer);

      /* Reset the seconds of the timer */
      currSeconds = 0;

      /* Set a new interval */
      timer =
          setInterval(startIdleTimer, 1000);
  }

  // Define the events that
  // would reset the timer
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;
  window.ontouchstart = resetTimer;
  window.onclick = resetTimer;
  window.onkeypress = resetTimer;
  window.onscroll = resetTimer;
  function startIdleTimer() {

      /* Increment the
          timer seconds */
      currSeconds++;
      console.log(currSeconds);
      /* Set the timer text
          to the new value */


          if(currSeconds == 10)
          {
            swal({title: "Where did you go?", text:"You have been logged out!", type: "warning",icon: "warning"}).then(function(){
              auth.signOut().then(() => {
                window.location = "login.html";
              })
            })
            }

  }


  if(document.location.href.includes("?"))
  {
    var url = document.location.href,
        params = url.split('?')[1].split('&');
        var data;
        for (var i = 0, l = params.length; i < l; i++) {
             tmp = params[i].split('=');
             console.log(tmp);
             data = tmp[1];
        }
 console.log(data);

        if(data == 3)
        moviebutt(2);
        if(data == 6)
        moviebutt(3);
        if(data == 5)
        moviebutt(5);
        if(data == 4)
        moviebutt(4);
        if(data == 4)
        moviebutt(4);
        if(data == 2)
        moviebutt(1);
        if(data == 1)
        moviebutt(3);
      }

}


function moviebutt(idnt){
var movname;
currentTab = 0;

    db.collection("Movies").doc("M"+idnt).get().then(function(data) {
      document.getElementById("head").innerHTML = data.data().name;
    })
    console.log("check1");
    console.log(  document.getElementById('onehere').innerHTML);
    console.log(  document.getElementById('twohere').innerHTML);
    console.log(currentTab);
    document.getElementById('onehere').innerHTML = " ";
    document.getElementById('twohere').innerHTML = " ";
    db.collection("Movies").doc("M"+idnt).get().then(function(data) {
      if(data.exists)
      {

         $('#myM').modal('show');


         movname = data.data().name;
         db.collection("theaters").get()
         .then(function(querySnapshot) {
           querySnapshot.forEach(function(doc) {
               // doc.data() is never undefined for query doc snapshots
               db.collection("theaters").doc(doc.id).collection("movies").get()
               .then(function(querySnapshot) {
                 querySnapshot.forEach(function(doc1) {
                     // doc.data() is never undefined for query doc snapshots

                     if(doc1.id == movname)
                     {


                        document.getElementById('onehere').innerHTML += "<label class='container1'>"+doc.id+"<input type='radio' name='radio'><span class='checkmark'></span></label>";

                     }
                 });
                 console.log(showTab(currentTab));
             })
             .catch(function(error) {
                 console.log("Error getting documents11111111111: ", error);
             });

           });
       })
       .catch(function(error) {
           console.log("Error getting documents11111111111: ", error);
       });

         }
         else {
           console.log("doc doesnt exist");
         }
       })



    /*  var b = idnt,
          url = 'selectT.html?name=' + encodeURIComponent(b);

      document.location.href = url; */


}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      const mm1 = document.getElementById("Chakka11");
      db.collection("Movies").doc("M5").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          mm1.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;'  onclick='moviebutt(5)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const mm2 = document.getElementById("Chakka12");
      db.collection("Movies").doc("M4").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          mm2.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(4)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const mm3 = document.getElementById("Chakka13");
      db.collection("Movies").doc("M3").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          mm3.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(3)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const mm4 = document.getElementById("Chakka14");
      db.collection("Movies").doc("M2").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          mm4.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(2)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const mm5 = document.getElementById("Chakka15");
      db.collection("Movies").doc("M1").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          mm5.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>A great movie recommended for all romance lovers giving a small taste of thrill too</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;'onclick='moviebutt(1)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });




      const m1 = document.getElementById("Chakka1");
      db.collection("Movies").doc("M1").get().then(function(data) {
        if(data.exists)
        {
          var name = data.data().name;
          var cat = data.data().cat;
          m1.innerHTML = "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+name+"</h1><p>"+cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(1)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const m2 = document.querySelector("#Chakka2");
      db.collection("Movies").doc("M2").get().then(function(data) {
        if(data.exists)
        {
          m2.innerHTML += "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+data.data().name+"</h1><p>"+data.data().cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(2)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const m3 = document.querySelector("#Chakka3");
      db.collection("Movies").doc("M3").get().then(function(data) {
        if(data.exists)
        {
          m3.innerHTML += "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+data.data().name+"</h1><p>"+data.data().cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(3)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const m4 = document.querySelector("#Chakka4");
      db.collection("Movies").doc("M4").get().then(function(data) {
        if(data.exists)
        {
          m4.innerHTML += "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+data.data().name+"</h1><p>"+data.data().cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(4)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const m5 = document.querySelector("#Chakka5");
      db.collection("Movies").doc("M5").get().then(function(data) {
        if(data.exists)
        {
          m5.innerHTML += "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+data.data().name+"</h1><p>"+data.data().cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(5)'>Book</button></div>";
        }
        else {
          console.log("doc doesnt exist");
        }
      }).catch(function(error) {
        console.log("error", error);
      });

      const m6 = document.querySelector("#Chakka6");
      db.collection("Movies").doc("M5").get().then(function(data) {
        if(data.exists)
        {
          m6.innerHTML += "<div class='flip-card-front'><img src='"+data.data().Pic+"' alt='Avatar' style='width:256px;height:300px;'></div><div class='flip-card-back'><h1 class='t-left'>"+data.data().name+"</h1><p>"+data.data().cat+"</p><p>We love that guy</p><button type='submit' class='flex-c-m size1 bg1 bo-rad-0 hov1 s-text1 trans-0-4' style='left:37px;width:70%;position:fixed;top:80%;' onclick='moviebutt(5)'>Book</button></div>";
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



 // Current tab is set to be the first tab (0)
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


  if (n == 1 && !validateForm()) return false;

  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  var b = document.getElementById("onehere");
  var c = b.getElementsByTagName("input");

  var v = document.getElementById("head").textContent;
  if(currentTab == 1)
  {
  document.getElementById("twohere").innerHTML = " ";

  for( var i = 0; i<c.length; i++)
  {
    if(c[i].checked == true)
    {
      k = c[i].parentElement.textContent;

    }
  }


  db.collection("theaters").doc(k).collection("movies").doc(v).get().then(function(doc){
    for(var i = 0;i<doc.data().timings.length;i++)
    {
      document.getElementById("twohere").innerHTML += "<label class='container1'>"+doc.data().timings[i]+"<input type='radio' name='radio'><span class='checkmark'></span></label>";
    }
  })

   }

  if (currentTab >= x.length) {
    //...the form gets submitted:
    var b = document.getElementById("twohere");
    var c = b.getElementsByTagName("input");
    var j;
    for( var i = 0; i<c.length; i++)
    {
      if(c[i].checked == true)
      {
        j = c[i].parentElement.textContent;

      }
    }

          url = 'selectT.html?name=' + encodeURIComponent(v) +'?theater='+ encodeURIComponent(k) + '?time=' + encodeURIComponent(j) ;

      document.location.href = url;
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
