
    $(document).ready(function() {

        $('#enviar').prop('disabled', true );
        $("#captcha-invisible").value = 0;
        $('#texto-captcha').val('');

        $("#captcha-invisible").change(function() {                                // Captcha invisible
            if ($(this).length > 0){
                $("#enviar").prop( "disabled", true );
            };
        });

        var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",          // captcha formulario
            code;

        function obtenerChaptca() {
            var a = Math.ceil(Math.random() * 9) + '';                                  // genera caracteres
            var b = Math.ceil(Math.random() * 9) + '';
            var c = char[Math.ceil(Math.random() * 51)] +'';
            var d = Math.ceil(Math.random() * 9) + '';
            var e = Math.ceil(Math.random() * 9) + '';
            var f = char[Math.ceil(Math.random() * 51)];
            code = a + b + c + d + e + f;
            $('#codigo-captcha').text('Introduce: ' + code);
            return code;
        };
        obtenerChaptca();

        $('#soy-persona').click(function() {
            $('#soy-persona').prop("disabled", false);                  // habilita el boton soy-persona
            textocaptcha = $('#texto-captcha').val();                   // captura el valor introducido
            if (textocaptcha === code) {
                $("#enviar").prop("disabled", false);                   // si coincide habilita el boton enviar
                $('#soy-persona').prop("disabled", true);               // deshabilita el boton soy-persona
            } else {
                $("#enviar").prop("disabled", true);
                swal({title: "No coincide", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
                $('#texto-captcha').val('');
            };
        });

        $('#recargar-captcha').click(function() {
            $("#enviar").prop("disabled", true);
            $('#soy-persona').prop("disabled", false);          // habilita el boton soy-persona
            $('#texto-captcha').val('');
            obtenerChaptca();
        });

    });
