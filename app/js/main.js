


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
      // paddingsTop = pt1;
      contentHeight = pt1 + $('.header-inside .container').outerHeight();
      // console.log(contentHeight);
      // contentAllHeight = paddingsTop + contentHeight;
      // contentAllHeight = contentHeight;

      if ( wH < contentHeight ) {
        if (flag) {
          $('body').addClass('not-full');
          flag = false;
        }
      } else if ( wH >= contentHeight ) {
        if (!flag) {
          $('body').removeClass('not-full');
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






  $('.js-show-modal').on('click', function(e) {
   e.preventDefault(); 
   $('body').css({
    overflow: 'hidden'
  })

   $('body').on("mousewheel.impair DOMMouseScroll.impair", function() {
    return false;
  });

   $('.form-fixed').addClass('form-fixed_show');
 });

  $('.js-close').on('click', function(e) {
   e.preventDefault(); 
   $('body').off("mousewheel.impair DOMMouseScroll.impair");
   $('body').removeAttr('style');
   $('.form-fixed').removeClass('form-fixed_show');
   $('input').removeClass('error');
 });



  $('.js-val').on('click', function(e) {
   e.preventDefault(); 
   $('.js-val-input').val($(this).data('form'));
 });


  var priceBlocks = document.querySelectorAll('.price-content');
  for ( var i = 0; i < priceBlocks.length; i++ ) {
    new SimpleBar(priceBlocks[i], { autoHide: false });
  }
  


  /*FANCYBOX*/
  $(".fancybox").fancybox({
   'hideOnContentClick': true,
   minWidth : 230,
   padding : 0,
   closeBtn : false,
   fitToView: false,
   beforeShow: function() {

    $('body').on("mousewheel.impair DOMMouseScroll.impair", function() {
      return false;
    });

    var th = this.content[0];
    var scrollBlock = $(th).find('.price-content');

    if ( scrollBlock.length ) {
      var elemR = scrollBlock[0];
      var simpleBarRecalc = new SimpleBar(elemR, { autoHide: false });
      simpleBarRecalc.recalculate();
      $(elemR).on("mousewheel DOMMouseScroll", function(e) {
        e.stopPropagation();
        return true;
      });
    }




    // var elem = document.querySelector('#scroll1');
    // scrollBlock[0].addEventListener('wheel', function(e) {
    //   e.stopPropagation();
    //   // e = e || window.event;
    //   var delta = e.deltaY || e.detail || e.wheelDelta;
    //   console.log(scrollBlock[0].scrollTop);

    //   // if (delta < 0 && scrollBlock[0].scrollTop == 0) {
    //   //   e.preventDefault();
    //   // }

    //   if (delta > 0 && scrollBlock[0].scrollHeight - scrollBlock[0].clientHeight - scrollBlock[0].scrollTop <= 1) {
    //     e.preventDefault();
    //   }

    //   return true;
    // })

    // $('.price-content').on("mousewheel DOMMouseScroll", function(e) {
    //   e.stopPropagation();
    //   return true;
    // });

    


    // var el1 = new SimpleBar(document.getElementById('scroll1'), { autoHide: false });
    // var el2 = new SimpleBar(document.getElementById('scroll2'), { autoHide: false });
    // var el3 = new SimpleBar(document.getElementById('scroll3'), { autoHide: false });
    // el1.getScrollElement().addEventListener('wheel', function(e) {
    //   e.stopPropagation();
    //    console.log($(this).outerHeight());
    //    return true;
    // });
    // el1.recalculate()
    // el2.recalculate()
    // el3.recalculate()

  },
  afterClose: function() {
    $('body').off("mousewheel.impair DOMMouseScroll.impair");
    $('input').removeClass('error');
  },
  helpers: {
    overlay: {
      locked: false
    }
  }
});



  $('.tab-form').on('click', '.tab-form__item:not(.tab-form__item_active)', function() {
    $(this)
    .addClass('tab-form__item_active').siblings().removeClass('tab-form__item_active')
    .closest('.tab-form').find('.tab-form__content').removeClass('tab-form__content_active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('tab-form__content_active').css('display', 'block').animate({opacity: '1'}, 300);
    $(this).closest('.tab-form').find('.tab-form__content').find('input').removeClass('error').removeAttr('data-req');
    $(this).closest('.tab-form').find('.tab-form__content').eq($(this).index()).find('input').attr('data-req', '1');

  })




  $(document).on('click', '.send', function (e) {
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
         $('.form-fixed').removeClass('form-fixed_show')
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



  $('.js-close-fancybox').on('click', function(e) {
   e.preventDefault(); 
   $('input').removeClass('error');
   $.fancybox.close();
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




});