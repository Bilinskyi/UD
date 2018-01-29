// Plugin: jQuery.scrollSpeed
// Source: github.com/nathco/jQuery.scrollSpeed
// Author: Nathan Rutzky
// Update: 1.0.2

(function($) {

    var scrollTopNew;

    jQuery.scrollSpeed = function(step, speed, easing) {

        var $document = $(document),
        flag = true,
        $window = $(window),
        $body = $('html, body'),
        option = easing || 'default',
        root = 0,
        scroll = false,
        scrollY,
        scrollX,
        view;

        if (window.navigator.msPointerEnabled)

            return false;

        $window.on('mousewheel DOMMouseScroll', function(e) {

           var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;

            if (scrollY) {

                view = $window.height();
                var hh = $('.header').outerHeight();
                if (deltaY < 0 || detail > 0) {

                    root = (root + view) >= $document.height() ? root : root += step;
                    if ( root < hh ) {
                        console.log('ddd');
                        root = hh;
                        console.log(root);
                        
                    } 
                    else {
                        root = (root + view) >= $document.height() ? root : root += step;
                    }
                    }

                     $body.stop().animate({
                            scrollTop: root
                        }, speed, option, function() {
                            scroll = false;
                        });

                


                if (deltaY > 0 || detail < 0) {
                    if (root <= $('.header').outerHeight() && root > 0 ) {
                        root = 0;
                        $body.stop().animate({
                            scrollTop: root
                        }, speed, option, function() {
                            scroll = false;
                        });
                    } else {
                        root = root <= 0 ? 0 : root -= step;
                        $body.stop().animate({
                            scrollTop: root
                        }, speed, option, function() {
                            scroll = false;
                        });
                    }

                }

            }



            if (scrollX) {

                view = $window.width();

                if (deltaY < 0 || detail > 0)

                    root = (root + view) >= $document.width() ? root : root += step;

                if (deltaY > 0 || detail < 0)

                    root = root <= 0 ? 0 : root -= step;


                $body.stop().animate({

                    scrollLeft: root

                }, speed, option, function() {

                    scroll = false;

                });
            }

            return false;

        }).on('scroll', function() {

            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();




        }).on('resize', function() {

            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();

        });       
    };

    jQuery.easing.default = function (x,t,b,c,d) {

        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };



})(jQuery);



