  var checkF = headerScreen();
  // checkF();
  $(window).on('load resize', function() {

    checkF();

  });

// window.addEventListener('resize', function() {

// })

// var wow = new WOW(
// {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: '', // animation css class (default is animated)
//     offset:       40,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//      var eff;
//      var data = box.dataset;
//      var dDelay = data.delay || 200;

//      switch(box.classList.contains('wow')) {
//        case box.classList.contains('pulse'):
//        eff = 'callout.pulse';
//        break;
//        case box.classList.contains('slideUpIn'):
//        eff = 'transition.slideUpIn'; 
//        break
//        default: 
//        eff = 'transition.fadeIn';
//      }

//      Velocity(box, eff, {duration: 1000, visibility: "visible", delay: dDelay});
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null // optional scroll container selector, otherwise use window
//   }
//   );
// wow.init();

/*   Velocity  */
  // var el = document.querySelector('.box');

  // var value = {
  //  opacity: 1,
  //  translateY: 10
  // }
  // var options = {
  //  duration: 800,
  //  delay: 100,
  //  display: 'block'
  // }

  // Velocity(el, value, options);
  // Velocity(el, {opacity: 0, translateY: 0}, {duration: 1000});
  /*   Velocity  */



  // var buttonsScroll = document.querySelectorAll('a[href*="#"]');
  // for( var i = 0; i < buttonsScroll.length; i++ ) {
  //  buttonsScroll[i].addEventListener('click', function(event) {
  //    event.preventDefault();
  //    var sectionHash = this.hash.slice(1);
  //    var target = document.getElementById(sectionHash);
  //    Velocity(target, 'scroll', {duration: 600});
  //  });
  // };


  // var btnTop = document.getElementById('top-button');
  // btnTop.addEventListener('click', function() {
  //  Velocity(document.body, 'scroll', {duration: 1000, offset: 0, easing: 'ease-in', mobileHA: false})
  // });

  function headerScreen() {
    var flag = true;
    var wH;
    var contentHeight;
    var contentAllHeight
    var pt1;
    var pt2;
    var paddingsTop;
    var contentAllHeight;
    function check1() {
      wH = $(window).innerHeight();
      pt1 = parseInt( $('.header-inside').css('paddingTop') ) + parseInt( $('.header-inside').css('paddingBottom') ) + parseInt( $('.header').css('paddingTop')  ) + parseInt( $('.header').css('paddingTop')  ) ;
      paddingsTop = pt1;
      contentHeight = $('.header-inside .container').innerHeight();
      contentAllHeight = paddingsTop + contentHeight;
      // contentAllHeight = contentHeight;

      if ( wH < contentAllHeight ) {
        if (flag) {
          console.log('less');
          $('body').addClass('not-full');
          flag = false;
        }
      } else if ( wH >= contentAllHeight ) {
        if (!flag) {
          $('body').removeClass('not-full');
          console.log('more');
          flag = true;
        }
      }
    };
    return check1;

  }; 




  $(document).ready(function(){

    var classTH;
    $('.work-item').on('mouseenter', function(e) {
      classTH = $(this).attr('data-name').split('');
      classTH.splice(3, 1, '-');
      classTH = classTH.join('');
      $(this).addClass( classTH );
    });
    $('.work-item').on('mouseleave', function(e) {
      $(this).removeClass(classTH);
    });


    jQuery.scrollSpeed(100, 400);



    // var offHover = $('.hover-plan_right').offset();
    // var offHoverPx = parseInt(offHover.left) - parseInt( $('.section-4').css('paddingLeft') );
    // var windWidth = $('.dark-theme').width();
    // var widthBoxHover = windWidth - offHoverPx;

    // var css = '.width-hover-js:before {width:' + widthBoxHover + 'px}';
    // console.log(css);
    // var headDoc = document.head || document.getElementsByTagName('head')[0];
    // var styleCrt = document.createElement('style');

    // headDoc.append(styleCrt);
    // styleCrt.appendChild(document.createTextNode(css));

    // $('.hover-plan_right').addClass('width-hover-js');












    // $('.js-hamburger').on('click', function(e) {
    //  e.preventDefault(); 
    //  $(this).toggleClass('is-active');
    //  $('.menu').toggleClass('menu_active');
    // });


    // $(".send").on('click', function (e) {
    //  e.preventDefault();

    //  var form = $(this).parents("form");
    //  form.find("input").each(function () {

    //    var inp = $(this);
    //    var req = $(this).data("req");

    //    if (req === 1 && !inp.val().length ) {
    //      inp.addClass("error");
    //    } else {
    //      inp.removeClass("error");
    //    }

    //  });

    //  if (form.find(".error").length) {
    //    return false;
    //  } else {
    //    $.ajax({
    //      type: "POST",
    //      url: form.attr('action'),
    //      data: form.serialize(),
    //      success: function (response) {

    //        $(':input')
    //        .not(':button, :submit, :reset, :hidden')
    //        .val('')
    //        .removeAttr('checked')
    //        .removeAttr('selected');

    //        $.fancybox.close();
    //        var message = $('.modal');
    //        $.fancybox(message);

    //      }
    //    });
    //  }

    // });




//  $('#top-button').on('click', function(e) {
//   e.preventDefault(); 
//   $('html, body').animate({
//     scrollTop: 0
//   }, 3000);
// });

  // /*SCROLL TO*/
  $('a.scr[href^="#"]').on('click', function(event) {
   var target = $( $(this).attr('href') );
   if( target.length ) {
     event.preventDefault();
     $('html, body').animate({
       scrollTop: target.offset().top
     }, 700);
   }
  });



// var upBtn = document.querySelectorAll('.top-btn')[0];
// if (upBtn) {
//  upBtn.addEventListener('click', function() {
//    $('body').velocity('scroll', {duration: 800});
//  })



// $('.up-button').on('click', function(e) {
//   e.preventDefault(); 
//   $('html, body').animate({
//     scrollTop: 0
//   }, 700);
// });

// if ( $('.up-button').length ) {
//   window.onscroll = function() {
//     var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
//     if (topToDocument > 800) {
//       $('.up-button').addClass('up-button_show');
//     } else {
//       $('.up-button').removeClass('up-button_show');
//     }
//   }
// }



    // var scr = $(".main-wrapper").height() > $('body').height();

  // var flsm1 = true; 
  // var flsm2 = true; 







  // $('.js-hamburger').on('click', function() {
  //  $(this).toggleClass('is-active');
  //  $('.nav').slideToggle();
  // });


  /* SLICK_SLIDER */
  // if ($('.your-class').length) {
  //  $('.your-class').slick({
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    dots: true,
  //    centerMode: false,
  //    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
  //    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>',
  //    centerPadding: '30px',
  //    touchMove: false,
  //    draggable: false,
  //    responsive: [
  //    {
  //      breakpoint: 992,
  //      settings: {
  //        dots: false,
  //        slidesToShow: 2,
  //        slidesToScroll: 1
  //      }
  //    },
  //    {
  //      breakpoint: 668,
  //      settings: {
  //        dots: false,
  //        slidesToShow: 1,
  //        slidesToScroll: 1
  //      }
  //    }
  //    ]
  //  });
  // };






  /*MATCHHEIGHT*/
  // $('.your-class').matchHeight()

  /*FANCYBOX*/
  // $(".fancybox").fancybox({
  //  'hideOnContentClick': true,
  //  minWidth : 230,
  //  padding : 0,
  //  closeBtn : true
  // });





  /*MASK JQUERY*/
  //  $('input[type=tel]').mask("+7 (999) 999-99-99");


  /*HIDE PLACEHOLDER*/
  // $('input,textarea').focus(function(){
  //  $(this).data('placeholder',$(this).attr('placeholder'))
  //  .attr('placeholder','');
  // }).blur(function(){
  //  $(this).attr('placeholder',$(this).data('placeholder'));
  // });


  // $('.checked').on('click', function(e) {
  //  e.preventDefault(); 
  //  var button = $(this).closest('form').find('button');
  //  var buttonVal = $(this).closest('form').find('button').prop('disabled');
  //  $(this).toggleClass('active');
  //  if (!buttonVal) {
  //    button.prop('disabled', true);
  //  } else {
  //    button.prop('disabled', false);
  //  }
  // });



  /*  wordpress regexp tel: */  
  // if ($('a[href^="tel:"]').length > 1) {

  //  $('a[href^="tel:"]').each(function() {

  //    var phone = $(this).text();
  //    phone = phone.replace(/\D+/g,"");

  //    $(this).attr('href', 'tel:+'+phone);
  //  });
  // } else {
  //  var phone = $('a[href^="tel:"]').text();
  //  phone = phone.replace(/\D+/g,"");
  //  $('a[href^="tel:"').attr('href', 'tel:+'+phone);
  // }



  /*YANDEX MAP*/
  // if ($('#map-canvas').length) {
  //  ymaps.ready(init);
  //  function init(){
  //    var myMap=new ymaps.Map("map-canvas",{
  //      center:[55.854661, 37.585736],
  //      zoom:13,
  //      controls:['zoomControl']
  //    }),
  //    Placemark1=new ymaps.Placemark([55.854661, 37.585736],{
  //      balloonContent:'',
  //      hintContent:'',
  //    },{
  //      preset:'islands#redDotIcon'
  //    })
  //    myMap.geoObjects.add(Placemark1);
  //    myMap.behaviors.disable('scrollZoom');
  //  }
  // };



  /*deletecookie*/
  // $(document).on('click', 'a', function() {
  //  if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
  //    eraseCookie('txt-c');
  //    eraseCookie('select-c');
  //  }
  // });


  /*check-form*/
  // $('#feedback-valid-1').validate({
  //  rules:{
  //    "phone":{required:true}
  //  },
  //  messages:{
  //    "phone":{required:""}
  //  },
  //  submitHandler: function(form){
  //    $(form).ajaxSubmit({
  //      success: function(data) {
  //        if (data == "true")
  //        {
  //          $(':input','#feedback-valid-1')
  //          .not(':button, :submit, :reset, :hidden')
  //          .val('')
  //          .removeAttr('checked')
  //          .removeAttr('selected');
  //            // window.location.href = "thx1.html";
  //            $.fancybox.close()
  //            var message = $('.modal');
  //            $.fancybox(message);

  //          }
  //        }  
  //      }); 
  //  }
  // });


  // function createCookie(name,value,days) {
  //  var expires = "";
  //  if (days) {
  //    var date = new Date();
  //    date.setTime(date.getTime() + (days*24*60*60*1000));
  //    expires = "; expires=" + date.toUTCString();
  //  }
  //  document.cookie = name + "=" + value + expires + "; path=/";
  // }

  // function readCookie(name) {
  //  var nameEQ = name + "=";
  //  var ca = document.cookie.split(';');
  //  for(var i=0;i < ca.length;i++) {
  //    var c = ca[i];
  //    while (c.charAt(0)==' ') c = c.substring(1,c.length);
  //    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  //  }
  //  return undefined;
  // }

  // function eraseCookie(name) {
  //  createCookie(name,"",-1);
  // }





  /*  ripple effect */
//  $(".button").on('click', function (e) {

//  // Remove any old one
//  $(".ripple").remove();

//  // Setup
//  var posX = $(this).offset().left,
//  posY = $(this).offset().top,
//  buttonWidth = $(this).width(),
//  buttonHeight =  $(this).height();

//  // Add the element
//  $(this).prepend("<span class='ripple'></span>");

//  // Make it round!
//  if(buttonWidth >= buttonHeight) {
//    buttonHeight = buttonWidth;
//  } else {
//    buttonWidth = buttonHeight; 
//  }

//  // Get the center of the element
//  var x = e.pageX - posX - buttonWidth / 2;
//  var y = e.pageY - posY - buttonHeight / 2;

//  // Add the ripples CSS and start the animation
//  $(".ripple").css({
//    width: buttonWidth,
//    height: buttonHeight,
//    top: y + 'px',
//    left: x + 'px'
//  }).addClass("rippleEffect");
// });




});