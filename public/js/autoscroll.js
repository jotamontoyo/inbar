
    $(document).ready(function() {
        var myInterval = false;
        myInterval = setInterval(AutoScroll, 5000);

        function AutoScroll() {
            var iScroll = $(window).scrollTop();
            iScroll = iScroll + $(window).height();
            $('html, body').animate({
                scrollTop: iScroll
            }, 1000);

//            $('#elegir').fadeIn('slow');
//            $('#elegir').css('visibility', 'visible');


        };

        $(window).scroll(function() {
            var iScroll = $(window).scrollTop();
/*            if (iScroll == 0) {
                myInterval = setInterval(AutoScroll, 5000);
            }; */

            if (iScroll + $(window).height() == $(document).height()) {
                clearInterval(myInterval);


/*                clearTimeout($.data(this, 'inicioTimer'));
                $.data(this, 'inicioTimer', setTimeout(function() {
                    $(window).scrollTop(0);
                }, 5000); */




/*                clearTimeout($.data(this, 'inicioTimer'));
                $.data(this, 'inicioTimer', setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $(window).scrollTop(0)
                    }, 5000)

                }, 5000)); */


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

/*        function Animar(id) {
            alert('si');
            $('#elegir').fadeIn(3000, function() {
                $( "span" ).fadeIn( 100 );
                $('#elegir').css('visibility', 'visible');
            });
        }; */




    });
