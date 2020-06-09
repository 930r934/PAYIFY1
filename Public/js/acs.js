const samphone = document.querySelector("#this");
db.collection("Items").doc("acc").collection("acc").doc("acc1").get().then(function(data) {
  if(data.exists)
  {
    samphone.innerHTML += "<div class='kg block2-txt p-t-20' style='color:black;' >" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs " + data.data().money  + "</span></div></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});


const samphone1 = document.querySelector("#this2");  //disp name and amount for 2nd phone
db.collection("Items").doc("acc").collection("acc").doc("acc2").get().then(function(data) {
  if(data.exists)
  {
    samphone1.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});


const samphone3 = document.querySelector("#this3");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc3").get().then(function(data) {
  if(data.exists)
  {
    samphone3.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone4 = document.querySelector("#this4");  //disp name and amount for 4d phone
db.collection("Items").doc("acc").collection("acc").doc("acc4").get().then(function(data) {
  if(data.exists)
  {
    samphone4.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone5 = document.querySelector("#this5");  //disp name and amount for 5d phone
db.collection("Items").doc("acc").collection("acc").doc("acc5").get().then(function(data) {
  if(data.exists)
  {
    samphone5.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone6 = document.querySelector("#this6");  //disp name and amount for 6d phone
db.collection("Items").doc("acc").collection("acc").doc("acc6").get().then(function(data) {
  if(data.exists)
  {
    samphone6.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone7 = document.querySelector("#this7");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc7").get().then(function(data) {
  if(data.exists)
  {
    samphone7.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

var samphone8 = document.querySelector("#this8");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc8").get().then(function(data) {
  if(data.exists)
  {
    samphone8.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone9 = document.querySelector("#this9");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc9").get().then(function(data) {
  if(data.exists)
  {
    samphone9.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone10 = document.querySelector("#this10");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc10").get().then(function(data) {
  if(data.exists)
  {
    samphone10.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone11 = document.querySelector("#this11");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc11").get().then(function(data) {
  if(data.exists)
  {
    samphone11.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone12 = document.querySelector("#this12");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc12").get().then(function(data) {
  if(data.exists)
  {
    samphone12.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone13 = document.querySelector("#this13");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc13").get().then(function(data) {
  if(data.exists)
  {
    samphone13.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone14 = document.querySelector("#this14");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc14").get().then(function(data) {
  if(data.exists)
  {
    samphone14.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone15 = document.querySelector("#this15");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc15").get().then(function(data) {
  if(data.exists)
  {
    samphone15.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone16 = document.querySelector("#this16");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc16").get().then(function(data) {
  if(data.exists)
  {
    samphone16.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone17 = document.querySelector("#this17");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc17").get().then(function(data) {
  if(data.exists)
  {
    samphone17.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone18 = document.querySelector("#this18");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc18").get().then(function(data) {
  if(data.exists)
  {
    samphone18.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone19 = document.querySelector("#this19");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc19").get().then(function(data) {
  if(data.exists)
  {
    samphone19.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone20 = document.querySelector("#this20");  //disp name and amount for 3d phone
db.collection("Items").doc("acc").collection("acc").doc("acc20").get().then(function(data) {
  if(data.exists)
  {
    samphone20.innerHTML +="<div class='kg block2-txt p-t-20' style='color:black;'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});






function addC(num){



  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var qty1;
    var qty;
    var tats;
    var flag = 0;
    // User is signed in.
    db.collection("users").doc(user.uid).get()
    .then(function(dAta){
    qty1 = dAta.data().cartqty;
    })
    .catch(function(error){
      console.display(error);
    })



      db.collection("users").doc(user.uid).collection("cart").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots

            if(doc.data().itemNo == num)
            {
              flag = 1;
              tats = doc.id;
              qty = doc.data().qty;

            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents11111111111: ", error);
    });






    db.collection("Items").doc("acc").collection("acc").doc("acc" + num).get()
              .then(function(data) {

                  myFt();
                if(flag == 0)
                {
                db.collection("users").doc(user.uid).collection("cart").add({
                name: data.data().name,
                qty: 1,
                itemNo: data.data().accno,
                money: data.data().money,
                picloc: data.data().picloc
              })

                .then(function() {

                    console.log("Document successfully written!");
                    })
                .catch(function(error) {
                  console.error("Error writing document: ", error);
                });
               }

               else if(flag == 1)
               {
                 db.collection("users").doc(user.uid).collection("cart").doc(tats).set({
                 qty: qty+1,
               },{merge: true})

                 .then(function() {

                     console.log("Document successfully written!");
                     })
                 .catch(function(error) {
                   console.error("Error writing document: ", error);
                 });
               }

               else{
                 window.display("WHAAAATAFAAK");
               }

                flag = 0;
                qty1 = (qty1+1);
                db.collection("users").doc(user.uid).set({
                cartqty: qty1
              },{merge : true})
              .catch(function(){
                window.alert("YOOYYOOMAA")
              })

              })
              .catch(function(error) {
                console.log("error", error);
              });










  } else {
    // No user is signed in.

  }
});






}


function myFt() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
