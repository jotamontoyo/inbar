
    $(document).ready(function() {

//        $(window).screen.lockOrientation('portrait');

/*        var myInterval = false;
        myInterval = setInterval(AutoScroll, 5000);

        function AutoScroll() {
            var iScroll = $(window).scrollTop();
            iScroll = iScroll + $(window).height();
            $('html, body').animate({
                scrollTop: iScroll
            }, 1000);
        }; */

        $(window).scroll(function() {

/*            var iScroll = $(window).scrollTop();

            if (iScroll + $(window).height() == $(document).height()) {
                clearInterval(myInterval);
            };

            $(window).on('click', function() {
                clearInterval(myInterval);
            });
            $(window).resize(function() {
                clearInterval(myInterval);
            });
            $(window).on('wheel', function() {
                clearInterval(myInterval);
            }); */


            $('.ocultar').each(function(i) {                                           /* Check the location of each desired element .ocultar */
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > bottom_of_object) {                             /* If the object is completely visible in the window, fade it it */
                    $(this).animate({
                        'opacity': '1'
                    }, 1000);
/*                    $('#header-contrata-franquicia').transition({
                        x: '50px'
                    }); */
                }
            });


            $('#subir-inicio-icon').css('opacity', '0.8');                               // control de opacity/visibility del icono subir
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                $('#subir-inicio-icon').css('opacity', '0.3');
            }, 250));
            if ($(window).scrollTop() === 0) {
                $('#subir-inicio').css('visibility', 'hidden');
            } else {
                $('#subir-inicio').css('visibility', 'visible');
            };

            if ($(window).scrollTop() === 0) {                                          // control aspecto menu-inicio
                $('#menu-inicio').css('height', '70px');
//                $('#menu-inicio').css('opacity', '0.8');
                $('.menu-inicio-item').css('padding-top', '20px');
            } else {
                $('#menu-inicio').css('height', '50px');
//                $('#menu-inicio').css('opacity', '1');
                $('.menu-inicio-item').css('padding-top', '12px');
            }

        });

        $('a').on('click', function() {
            clearInterval(myInterval);
        });

        $('img.bgfade').hide();                                                     // animacion transicion inicio
//        var dg_H = $(window).height();
//        var dg_W = $(window).width();
//        $('#wrap').css({'height':dg_H,'width':dg_W});
        $('#wrap').css({'height':'100vh','width':'100%'});

        function anim() {

            $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(000);



//            $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(2000, function()
/*                $("#wrap").css({
                    width: '110%',
                    height: '110%',
//                    top: 0,

//                    opacity: 0.3
                })
                .animate({
                    width: '100%',
                    height: '100%',
//                    top: 0,
//                    opacity: 1
                }, 14000)

            }); */

            $(function(){
                $("#wrap").css({
                    width: '110%',
                    height: '110%',
//                    top: 0,

//                    opacity: 0.3
                })
                .animate({
                    width: '100%',
                    height: '100%',
//                    top: 0,
//                    opacity: 1
                }, 14000)
            });



            $("#wrap img").first().fadeIn(3000);
            setTimeout(anim, 16000);
        }
        anim();


    });
