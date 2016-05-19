
    $(document).ready(function() {
        var myInterval = false;
        myInterval = setInterval(AutoScroll, 5000);

        function AutoScroll() {
            var iScroll = $(window).scrollTop();
            iScroll = iScroll + $(window).height();
            $('html, body').animate({
                scrollTop: iScroll
            }, 1000);
        };

        $(window).scroll(function() {
            var iScroll = $(window).scrollTop();

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
            });

            $('#subir-inicio-icon').css('opacity', '0.8');                               // control de opacity del icono subir
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                $('#subir-inicio-icon').css('opacity', '0.4');
            }, 250));

            if ($(window).scrollTop() === 0) {
                $('#subir-inicio').css('visibility', 'hidden');
            } else {
                $('#subir-inicio').css('visibility', 'visible');
            };

        });

        $('a').on('click', function() {
            clearInterval(myInterval);
        });

        $('img.bgfade').hide();
//        var dg_H = $(window).height();
//        var dg_W = $(window).width();
//        $('#wrap').css({'height':dg_H,'width':dg_W});
        $('#wrap').css({'height':'100vh','width':'100%'});
        function anim() {
            $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(8000);
            $("#wrap img").first().fadeIn(8000);
            setTimeout(anim, 12000);
        }
        anim();

/*        function Animar(id) {
            alert('si');
            $('#elegir').fadeIn(3000, function() {
                $( "span" ).fadeIn( 100 );
                $('#elegir').css('visibility', 'visible');
            });
        }; */

    });
