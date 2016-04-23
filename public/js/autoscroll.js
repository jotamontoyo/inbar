
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
            };
            $(window).on('click', function() {
                clearInterval(myInterval)
            });
            $(window).resize(function() {
                clearInterval(myInterval)
            });
            $(window).on('wheel', function() {
                clearInterval(myInterval)
            });
        });

        function Animar(id) {
            alert('si');
            $('#elegir').fadeIn(3000, function() {
                $( "span" ).fadeIn( 100 );
                $('#elegir').css('visibility', 'visible');
            });
        };




    });
