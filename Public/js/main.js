(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div data-loader="ball-scale"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*[ Show header dropdown ]
    ===========================================================*/
    $('.js-show-header-dropdown').on('click', function(){
        $(this).parent().find('.header-dropdown')
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
        db.collection("users").doc(user.uid).collection("wallet").doc("wallet").get().then(function(data){
  				document.getElementById("yomoneyb").innerHTML = data.data().balance;
          document.getElementById("yomoneyb0").innerHTML = data.data().balance;
  			})
      }})
    });

    var menu = $('.js-show-header-dropdown');
    var sub_menu_is_showed = -1;

    for(var i=0; i<menu.length; i++){
        $(menu[i]).on('click', function(){

                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = -1;
                }
                else {
                    for (var i = 0; i < menu.length; i++) {
                        $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                    }

                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                    sub_menu_is_showed = jQuery.inArray( this, menu );
                }
        });
    }

    $(".js-show-header-dropdown, .header-dropdown").click(function(event){
        event.stopPropagation();
    });

    $(window).on("click", function(){
        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
        }
        sub_menu_is_showed = -1;
    });


     /*[ Fixed Header ]
    ===========================================================*/
    var posWrapHeader = $('.topbar').height();
    var header = $('.container-menu-header');
    var s1 = $('.bbe');

    $(window).on('scroll',function(){

        if($(this).scrollTop() >= posWrapHeader) {
            $('.header1').addClass('fixed-header');
            $(header).css('top',-posWrapHeader);
              $(s1).css('margin-top',-posWrapHeader-10);
        }
        else {
            var x = - $(this).scrollTop();
            $(header).css('top',x);
            $('.header1').removeClass('fixed-header');
            $(s1).css('margin-top',0);
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

    /*[ Show menu mobile ]
    ===========================================================*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.wrap-side-menu').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu').slideToggle();
            $(this).toggleClass('turn-arrow');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){



            if($('.wrap-side-menu').css('display') == 'block'){
                $('.wrap-side-menu').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }
            if($('.sub-menu').css('display') == 'block'){
                $('.sub-menu').css('display','none');
                $('.arrow-main-menu').removeClass('turn-arrow');
            }
        }
        else{


          //document.getElementById('jackS1') = document.getElementById('jackS');

        }
    });


    /*[ remove top noti ]
    ===========================================================*/
    $('.btn-romove-top-noti').on('click', function(){
        $(this).parent().remove();
    })


    /*[ Block2 button wishlist ]
    ===========================================================*/
    $('.block2-btn-addwishlist').on('click', function(e){
        e.preventDefault();
        $(this).addClass('block2-btn-towishlist');
        $(this).removeClass('block2-btn-addwishlist');
        $(this).off('click');
    });

    /*[ +/- num product ]
    ===========================================================*/
    $('.btn-num-product-down').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).next().val());
        if(numProduct > 1) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(e){
        e.preventDefault();
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });


    /*[ Show content Product detail ]
    ===========================================================*/
    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
    $('.active-dropdown-content .dropdown-content').slideToggle('fast');

    $('.js-toggle-dropdown-content').on('click', function(){
        $(this).toggleClass('show-dropdown-content');
        $(this).parent().find('.dropdown-content').slideToggle('fast');
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function(){
            $('.video-mo-01').css('opacity','1');
        },300);
    });

  /*  $('[data-dismiss="modal"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
    });*/


})(jQuery);
window.onload = function () {
  let timer, currSeconds = 0;

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


          if(currSeconds == 60)
          {
            swal({title: "Where did you go?", text:"You have been logged out!", type: "warning",icon: "warning"}).then(function(){
              auth.signOut().then(() => {
                window.location = "login.html";
              })
            })
            }

  }
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
  if($(window).width() < 992){
    var p = document.getElementById('jackS1');

    db.collection("users").doc(user.uid).collection("cart").get()
    .then(function(querySnapshot) {

      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
           var quant = doc.data().qty;

           p.innerHTML += "<li class='header-cart-item'><div class='header-cart-item-img'><img src='" + doc.data().picloc + "' alt='IMG'></div> <div class='header-cart-item-txt'><a href='#' class='header-cart-item-name'>" + doc.data().name + "</a><span class='header-cart-item-info'>Rs " + (quant*doc.data().money) + "</span></div></li>";





      })


  }).catch(function(er){
    window.alert(er);
  })
  }
}
})
}

function funct123() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

  firebase.auth().signOut().then(function() {
    window.location = "login.html";
    // Sign-out successful.
    }).catch(function(error) {
      window.alert("FAKK"+ error);
      // An error happened.
    });

  }
})
}
