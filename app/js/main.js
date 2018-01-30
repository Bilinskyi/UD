


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
      // pt1 = parseInt( $('.header-inside').css('paddingTop') ) + parseInt( $('.header-inside').css('paddingBottom') ) + parseInt( $('.header').css('paddingTop')  ) + parseInt( $('.header').css('paddingTop')  ) ;
      pt1 = parseInt( $('.header').css('paddingTop')  ) + parseInt( $('.header').css('paddingBottom')  ) ;
      console.log(pt1);
      // paddingsTop = pt1;
      contentHeight = pt1 + $('.header-inside .container').outerHeight();
      // console.log(contentHeight);
      // contentAllHeight = paddingsTop + contentHeight;
      // contentAllHeight = contentHeight;

      if ( wH < contentHeight ) {
        if (flag) {
          console.log('less');
          $('body').addClass('not-full');
          flag = false;
        }
      } else if ( wH >= contentHeight ) {
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


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $('div.animated.fadeIn').removeClass('animated fadeIn')
     $('html, body').css('min-width', '1280px').addClass('mobile');
     $('html').css('width', window.innerWidth + 'px');
   }


   var checkF = headerScreen();
   // checkF();
   $(window).on('load resize', function() {

    checkF();
    checkFixedForm();
  });

   function checkFixedForm() {

    var hForm = $('.form-fixed .form').outerHeight();
    var wHeight = $(window).outerHeight();
    console.log(hForm);
    if ( wHeight <  hForm ) {
      $('.form-fixed').addClass('form-fixed_scroll');
    } else {
      $('.form-fixed').removeClass('form-fixed_scroll');
    }
  }


  $('.main-title__highlight').addClass('main-title__highlight_show-bg');

  jQuery.scrollSpeed(100, 800);

  $(window).on('load', function() {


  });


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



  $('.tab-form').on('click', '.tab-form__item:not(.tab-form__item_active)', function() {
    $(this)
    .addClass('tab-form__item_active').siblings().removeClass('tab-form__item_active')
    .closest('.tab-form').find('.tab-form__content').removeClass('tab-form__content_active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('tab-form__content_active').css('display', 'block').animate({opacity: '1'}, 300);
    $(this).closest('.tab-form').find('.tab-form__content').find('input').removeClass('error').removeAttr('data-req');
    $(this).closest('.tab-form').find('.tab-form__content').eq($(this).index()).find('input').attr('data-req', '1');

  })


  $('.js-show-modal').on('click', function(e) {
   e.preventDefault(); 
   $('body').css({
    overflow: 'hidden'
  })
   $('.form-fixed').addClass('form-fixed_show');
 });

  $('.js-close').on('click', function(e) {
   e.preventDefault(); 
   $('body').removeAttr('style');
   $('.form-fixed').removeClass('form-fixed_show');
 });



  $('.js-val').on('click', function(e) {
   e.preventDefault(); 
   $('.js-val-input').val($(this).data('form'));
  });
  
  


  var elemAll = document.querySelectorAll('.scrollbar-outer');
  for ( var i = 0; i < elemAll.length; i++) {
    var elem = elemAll[i];

    if (elem.addEventListener) {
      if ('onwheel' in document) {
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        elem.addEventListener("mousewheel", onWheel);
      } else {
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { 
      elem.attachEvent("onmousewheel", onWheel);
    }
  };

  function onWheel(e) {
    e = e || window.event;
    e.stopPropagation();
  }


  jQuery('.scrollbar-outer').scrollbar();




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


    $(".send").on('click', function (e) {
     e.preventDefault();
     var form = $(this).parents("form");
     form.find("input").each(function () {

       var inp = $(this);
       var req = $(this).data("req");

       if ( inp.hasClass('js-email') ) {
        var em = $(this).val();
        if ( !validateEmail(em) ) {
          inp.addClass("error");
        } else {
          inp.removeClass("error");
        }
      } else if (req === 1 && !inp.val().length ) {
        inp.addClass("error");
      } else {
        inp.removeClass("error");
      }

    });

     if (form.find(".error").length) {
       return false;
     } else {
       $.ajax({
         type: "POST",
         url: form.attr('action'),
         data: form.serialize(),
         success: function (response) {

           $(':input')
           .not(':button, :submit, :reset, :hidden')
           .val('')
           .removeAttr('checked')
           .removeAttr('selected');

           $.fancybox.close();
           var message = $('.modal');
           $.fancybox(message);

         }
       });
     }

   });
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }





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





  $('.up-button').on('click', function(e) {
    e.preventDefault(); 
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });

  if ( $('.up-button').length ) {
    window.onscroll = function() {
      var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
      if (topToDocument > 1000) {
        $('.up-button').addClass('up-button_show');
      } else {
        $('.up-button').removeClass('up-button_show');
      }
    }
  }



    // var scr = $(".main-wrapper").height() > $('body').height();

  // var flsm1 = true; 
  // var flsm2 = true; 




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




  $('.js-close-fancybox').on('click', function(e) {
   e.preventDefault(); 
   $.fancybox.close();
 });


  /*FANCYBOX*/
  $(".fancybox").fancybox({
   'hideOnContentClick': true,
   minWidth : 230,
   padding : 0,
   closeBtn : false,
   helpers: {
    overlay: {
      locked: false
    }
  }
});





  /*MASK JQUERY*/
  //  $('input[type=tel]').mask("+7 (999) 999-99-99");


  /*HIDE PLACEHOLDER*/
  $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   .attr('placeholder','');
 }).blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });


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





});