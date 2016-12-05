

    $(document).ready(function() {



        var verifyCallback = function( response ) {
            $("#enviar").prop("disabled", false);
        };




        var onloadCallback = function() {
            grecaptcha.render('recaptcha', {
                'sitekey' : '6Lce8iUTAAAAADIdTGyNkixxDY8p3LxUUAEJdf_i',
                'callback' : verifyCallback,
                'theme' : 'dark'
            });
        };

        onloadCallback();







    });
