
    $(document).ready(function() {

        $('#enviar').prop('disabled', true );
        $("#captcha-invisible").value = 0;

        // Captcha invisible

/*        $('#enviar').on('click', function() {
//            $("#captcha-invisible").change(function () {
                if ($("#captcha-invisible").length === 0) {
                    console.log('No eres un robot. Has enviado correctamente la solicitud');
                }

        }); */

        $("#captcha-invisible").change(function () {
            if ($(this).length > 0){
                //qué hacemos si un bot rellena el campo
                $("#enviar").prop( "disabled", true );
            };
        });

        var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";



        //Generates the captcha function
        var a = Math.ceil(Math.random() * 9) + '';
        var b = Math.ceil(Math.random() * 9) + '';
        var c = char[Math.ceil(Math.random() * 52)] +'';
        var d = Math.ceil(Math.random() * 9) + '';
        var e = Math.ceil(Math.random() * 9) + '';
        var f = char[Math.ceil(Math.random() * 52)] +'';

        var code = a + b + c + d + e + f;

        $('#codigo-captcha').text('Introduce: ' + code);

        var textocaptcha = $('#texto-captcha').val();

        $('#texto-captcha').change(function() {
            $('#soy-persona').prop("disabled", false);          // deshabilita el boton soy-persona
            textocaptcha = $('#texto-captcha').val();           // captura el valor introducido
            if (textocaptcha === code) {
                $("#enviar").prop("disabled", false);           // si coincide habilita el boton enviar
                $('#soy-persona').prop("disabled", true);       // deshabilita el boton soy-persona
            } else {
                $("#enviar").prop("disabled", true);
                swal({title: "No coincide", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
            };
        });


/*        $('#btn-recargar').click(function() {

            var a = Math.ceil(Math.random() * 9) + '';
            var b = Math.ceil(Math.random() * 9) + '';
            var c = char[Math.ceil(Math.random() * 52)] +'';
            var d = Math.ceil(Math.random() * 9) + '';
            var e = Math.ceil(Math.random() * 9) + '';
            var f = char[Math.ceil(Math.random() * 52)] +'';

            var code = a + b + c + d + e + f;

            $('#codigo-captcha').text('Introduce: ' + code);

        }); */





    });
