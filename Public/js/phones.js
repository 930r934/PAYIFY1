


const samphone = document.querySelector("#this");
db.collection("Items").doc("phone").collection("phone").doc("phone1").get().then(function(data) {
  if(data.exists)
  {
    samphone.innerHTML += "<div class='block2'><div class='block2-img wrap-pic-w of-hidden pos-relative'><img src='images/samsungm40.jpg' alt='IMG-PRODUCT'><div class='block2-overlay trans-0-4'><a href='#' class='block2-btn-addwishlist hov-pointer trans-0-4'><i class='icon-wishlist icon_heart_alt' aria-hidden='true'></i><i class='icon-wishlist icon_heart dis-none' aria-hidden='true'></i></a><div class='block2-btn-addcart w-size1 trans-0-4'><button class='flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4'>Add to Cart</button></div></div></div><div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs " + data.data().money  + "</span></div></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});


const samphone1 = document.querySelector("#this2");  //disp name and amount for 2nd phone
db.collection("Items").doc("phone").collection("phone").doc("phone2").get().then(function(data) {
  if(data.exists)
  {
    samphone1.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});


const samphone3 = document.querySelector("#this3");  //disp name and amount for 3d phone
db.collection("Items").doc("phone").collection("phone").doc("phone3").get().then(function(data) {
  if(data.exists)
  {
    samphone3.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone4 = document.querySelector("#this4");  //disp name and amount for 4d phone
db.collection("Items").doc("phone").collection("phone").doc("phone4").get().then(function(data) {
  if(data.exists)
  {
    samphone4.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone5 = document.querySelector("#this5");  //disp name and amount for 5d phone
db.collection("Items").doc("phone").collection("phone").doc("phone5").get().then(function(data) {
  if(data.exists)
  {
    samphone5.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone6 = document.querySelector("#this6");  //disp name and amount for 6d phone
db.collection("Items").doc("phone").collection("phone").doc("phone6").get().then(function(data) {
  if(data.exists)
  {
    samphone6.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone7 = document.querySelector("#this7");  //disp name and amount for 3d phone
db.collection("Items").doc("phone").collection("phone").doc("phone7").get().then(function(data) {
  if(data.exists)
  {
    samphone7.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-price m-text6 p-r-5'>Rs "+ data.data().money +"</span></div>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

const samphone8 = document.querySelector("#this8");  //disp name and amount for 3d phone
db.collection("Items").doc("phone").collection("phone").doc("phone8").get().then(function(data) {
  if(data.exists)
  {
    samphone8.innerHTML +="<div class='kg block2-txt p-t-20'>" + data.data().name + "<br></div><div><span class='block2-oldprice m-text7 p-r-5'>Rs 50000.00</span><span class='block2-newprice m-text8 p-r-5'>Rs 35000.00</span>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});


function search_phone() {
    let input = document.getElementById('searchp').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('kg');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {

            x[i].parentElement.style.opacity="0.4";

        }
        else {

            x[i].parentElement.style.opacity="1";

        }
    }
}

function addtocart(num){

if(num == 5)
{
  swal("Your item has been added to the cart!");
}

else {
  console.log("error in addtocart function call");
}


}

function setop(num){
//  var backyard = document.getElementById('extraforopacity');
//  backyard.style.opacity = '0.2';
  const here = document.getElementById('modalheader');
  const foothere = document.getElementById('modalfooter')
  db.collection("Items").doc("phone").collection("phone").doc("phone" + num).get().then(function(data) {
    if(data.exists)
    {
      here.innerHTML ="<button type='button' class='close' data-dismiss='modal' onclick='setopb()'>&times;</button><h3 class='modal-title ppp'>" + data.data().name + "</h3>";
      foothere.innerHTML = "<button type='button' class='flex-c-m sizeme bg1 bo-rad-20 hov1 s-text1' data-dismiss='modal' onclick='addC(" + num + ")' >Add to Cart</button>"
    }
    else {
      console.log("doc doesnt exist");
    }
  }).catch(function(error) {
    console.log("error", error);
  });



}


function setopb(){
  var backyard = document.getElementById('extraforopacity');

}


function markbordersR(ele)
{
  document.getElementById('b11').style.border="none";
  document.getElementById('b12').style.border="none";
  document.getElementById('b13').style.border="none";

  $('.bg11').css("background-color" , "darkgrey");

  ele.style.border="3px solid green";
  ele.style.background="green";
}


function markbordersC(ele)
{
  document.getElementById('b14').style.border="none";
  document.getElementById('b15').style.border="none";
  document.getElementById('b16').style.border="none";
  document.getElementById('b17').style.border="none";

  $('.bg1').css("background-color" , "#222222");
  $('.bg0').css("background-color" , "#e65540");
  $('.bg9').css("background-color" , "#e63535");
  $('.bg10').css("background-color" , "#2484f2");

  ele.style.border="3px solid green";
  //ele.style.background="green";
}
function addC(num){
  myFt();
  setopb();

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






    db.collection("Items").doc("phone").collection("phone").doc("phone" + num).get()
              .then(function(data) {

                if(flag == 0)
                {
                db.collection("users").doc(user.uid).collection("cart").doc("item" + (qty1+1) ).set({
                name: data.data().name,
                qty: 1,
                itemNo: data.data().phoneNo,
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

(function(){
   //Show Modal
  $('#exampleModalLong').on('show.bs.modal', function (e) {
    console.log('show');
    $('.firstBlur').addClass('modalBlur');
  })

  //Remove modal
  $('#exampleModalLong').on('hide.bs.modal', function (e) {
     console.log('hide');
    $('.firstBlur').removeClass('modalBlur');
  })
})
/*[ Fixed Header ]
===========================================================*/
var posWrapHeader = $('.topbar').height();
var header = $('.container-menu-header');

$(window).on('scroll',function(){

   if($(this).scrollTop() >= posWrapHeader) {
       $('.header1').addClass('fixed-header');
       $(header).css('top',-posWrapHeader);

   }
   else {
       var x = - $(this).scrollTop();
       $(header).css('top',x);
       $('.header1').removeClass('fixed-header');
   }

   if($(this).scrollTop() >= 200 && $(window).width() > 992) {
       $('.fixed-header2').addClass('show-fixed-header2');
       $('.header2').css('visibility','hidden');
       $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");

   }
   else {
       $('.fixed-header2').removeClass('show-fixed-header2');
       $('.header2').css('visibility','visible');
       $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
   }

});
