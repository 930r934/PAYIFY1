const samphone = document.querySelector("#this");
db.collection("Items").doc("phone").collection("phone").doc("phone1").get().then(function(data) {
  if(data.exists)
  {
    samphone.innerHTML += "<div class='kg block2-txt t-center p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='block2-price m-text6 t-center p-r-5' style='color:white;'>Rs " + data.data().money  + "</span></div></div>";
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
    samphone1.innerHTML +="<div class='kg block2-txt p-t-20 t-center'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone3.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class=' t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone4.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone5.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone6.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone7.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-price m-text6 p-r-5' style='color:white;'>Rs "+ data.data().money +"</span></div>";
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
    samphone8.innerHTML +="<div class='t-center kg block2-txt p-t-20'>" + data.data().name + "<br></div><div style='text-align:center;'><span class='t-center block2-oldprice m-text7 p-r-5' style='color:white;'>Rs 50000.00</span><span class='block2-newprice m-text8 p-r-5'>Rs 35000.00</span>";
  }
  else {
    console.log("doc doesnt exist");
  }
}).catch(function(error) {
  console.log("error", error);
});

function g(num){

  url = 'Movie-Ticket.html?num=' + encodeURIComponent(num);
  document.location.href = url;
}

function a(num){

  url = 'phones.html?num=' + encodeURIComponent(num);
  document.location.href = url;
}
