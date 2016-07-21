
    $(document).ready(function() {

        $('#enviar').prop('disabled', true );
        $("#captcha-invisible").val('');


        $('#texto-captcha').prop('readonly', false);
        $('#texto-captcha').val('');
        $('#codigo-captcha').bind('cut copy paste', function(e) {                  // anula funcion cut, copy y paste del elemento
            e.preventDefault();
        });


        $("#captcha-invisible").change(function() {                                // Captcha invisible
            if ($(this).length > 0){
                $("#enviar").prop( "disabled", true );
            };
        });


        var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",          // captcha formulario
            code = '',
            textocaptcha = '';

        function obtenerChaptca() {
            var a = Math.ceil(Math.random() * 9) + '';                                  // genera caracteres
            var b = Math.ceil(Math.random() * 9) + '';
            var c = char[Math.ceil(Math.random() * 51)] +'';
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
                $('#soy-persona').css('color', 'green');
                $('#soy-persona').prop("disabled", true);               // deshabilita el boton soy-persona
                $('#texto-captcha').prop('readonly', true);
            } else {
                $("#enviar").prop("disabled", true);
                if (textocaptcha.length) {
                    swal({title: "No coincide", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
                };
                $('#texto-captcha').val('');
            };
        });

        $('#recargar-captcha').click(function() {
            $("#enviar").prop("disabled", true);
            $('#soy-persona').css('color', 'white');
            $('#soy-persona').prop("disabled", false);          // habilita el boton soy-persona
            $('#texto-captcha').prop('readonly', false);
            $('#texto-captcha').val('');
            obtenerChaptca();
        });

    });
