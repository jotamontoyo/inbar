
    $(document).ready(function() {

        $('#enviar').prop('disabled', false );
        $("#captcha-invisible").value = 0;

        // Captcha invisible

        $('#enviar').on('click', function() {
//            $("#captcha-invisible").change(function () {
                if ($("#captcha-invisible").length === 0) {
                    console.log('No eres un robot. Has enviado correctamente la solicitud');
                }

        });

        $("#captcha-invisible").change(function () {
            if ($(this).length > 0){
                //qué hacemos si un bot rellena el campo
                $("#enviar").prop( "disabled", true );
            } else {
                console.log('No eres un robot. Has enviado correctamente la solicitud');
                $('alerta').css('visibility', 'visible');
            };
        });




    });
