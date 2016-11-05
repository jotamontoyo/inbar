
// Control de captcha
// Control de email y emailok
// Aviso formunario enviado cuando submit()

    $(document).ready(function() {

        $('#enviar').prop('disabled', true);
        $('.subir-fichero').attr('disabled', 'disabled');
        $('.subir-fichero').text('Adjuntar');

        $("#captcha-invisible").val('');

        $('#texto-captcha').prop('readonly', false);
        $('#texto-captcha').val('');
        $('#codigo-captcha').bind('cut copy paste', function(e) {                       // anula funcion cut, copy y paste del elemento
            e.preventDefault();
        });

        $("#captcha-invisible").change(function() {                                     // Captcha invisible
            if ($(this).length > 0){
                $("#enviar").prop('disabled', true);
                $('.subir-fichero').attr('disabled', 'disabled');
            };
        });

        $('#formulario_contacto').submit(function() {                                   // sweetalert cuando submit() correcto
            swal("Formulario enviado!", "Gracias por tu solicitud!", "success");
        });

        var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",              // captcha formulario
            code = '',
            textocaptcha = '';

        function obtenerChaptca() {
            var a = Math.ceil(Math.random() * 9) + '';                                  // genera caracteres
            var b = Math.ceil(Math.random() * 9) + '';
            var c = char[Math.ceil(Math.random() * 51)] + '';
            var d = Math.ceil(Math.random() * 9) + '';
            var e = Math.ceil(Math.random() * 9) + '';
            var f = char[Math.ceil(Math.random() * 51)];
            code = a + b + c + d + e + f;
            $('#codigo-captcha').text(code);
            return code;
        };
        obtenerChaptca();

        $('#soy-persona').click(function() {
            $('#soy-persona').prop("disabled", false);                  // habilita el boton soy-persona
            textocaptcha = $('#texto-captcha').val();                   // captura el valor introducido
            if (textocaptcha === code) {
                $("#enviar").prop("disabled", false);                   // si coincide habilita el boton enviar
                $('.subir-fichero').removeAttr('disabled');
                $('#soy-persona').css('color', 'green');
                $('#soy-persona').prop("disabled", true);               // deshabilita el boton soy-persona
                $('#texto-captcha').prop('readonly', true);
            } else {
                $("#enviar").prop("disabled", true);
                $('.subir-fichero').attr('disabled', 'disabled');
                if (textocaptcha.length) {
                    swal({title: "El captcha no coincide", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
                };
                $('#texto-captcha').val('');
            };
        });

        $('#recargar-captcha').click(function() {
            $("#enviar").prop("disabled", true);
            $('.subir-fichero').attr('disabled', 'disabled');
            $('#soy-persona').css('color', 'white');
            $('#soy-persona').prop("disabled", false);          // habilita el boton soy-persona
            $('#texto-captcha').prop('readonly', false);
            $('#texto-captcha').val('');
            obtenerChaptca();
        });


        // anulado para no borrar los campos del formulario edit/contacto
//        var email = $('#email').val('');                        // control coinciden emails
//        var emailok = $('#emailok').val('');

        $('#emailok').change(function() {
            var email = $('#email').val();
            var emailok = $('#emailok').val();
            if ( email !== emailok ) {
                $("label[for='emailok']").css('color', 'red');
                $('#enviar').prop('disabled', true);
                $('.subir-fichero').attr('disabled', 'disabled');
                swal({title: "Los email no coinciden", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
            } else {
                $("label[for='email']").css('color', 'white');
                $("label[for='emailok']").css('color', 'white');
                if (textocaptcha === code) {
                    $('#enviar').prop('disabled', false);
                    $('.subir-fichero').removeAttr('disabled');
                };
            };
        });

        $('#email').change(function() {
            var email = $('#email').val();
            var emailok = $('#emailok').val();
            if (emailok.length) {
                if ( email !== emailok ) {
                    $("label[for='email']").css('color', 'red');
                    $('#enviar').prop('disabled', true);
                    $('.subir-fichero').attr('disabled', 'disabled');
                    swal({title: "Los email no coinciden", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
                } else {
                    $("label[for='email']").css('color', 'white');
                    $("label[for='emailok']").css('color', 'white');
                    if (textocaptcha === code) {
                        $('#enviar').prop('disabled', false);
                        $('.subir-fichero').removeAttr('disabled');
                    };
                };
            };
        });

    });
