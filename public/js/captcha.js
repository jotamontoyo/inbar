
// Control de captcha
// Control de email y emailok
// filepicker

    $(document).ready(function() {

        $('#enviar').prop('disabled', true);

        $('.subir-fichero').text('Seleccionar archivo');            // boton filepicker

/*        $('.subir-fichero').click(function() {
            $('#panel-modal-adjuntar').removeClass('show');
            $('#panel-modal-adjuntar').toggleClass('fade');
        }); */

        $('.cerrar-modal').click(function() {                       // se usa para cerrar el modal adjuntar
            window.location = '/';
        });

        $("#captcha-invisible").val('');

        $('#texto-captcha').prop('readonly', false);
        $('#texto-captcha').val('');
        $('#codigo-captcha').bind('cut copy paste', function(e) {                       // anula funcion cut, copy y paste del elemento
            e.preventDefault();
        });

        $("#captcha-invisible").change(function() {                                     // Captcha invisible
            if ($(this).length > 0){
                $("#enviar").prop('disabled', true);

            };
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
                $('#soy-persona').css('color', 'green');
                $('#soy-persona').prop("disabled", true);               // deshabilita el boton soy-persona
                $('#texto-captcha').prop('readonly', true);
            } else {
                $("#enviar").prop("disabled", true);
                if (textocaptcha.length) {
                    swal({title: "El captcha no coincide", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
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


        // anulado para no borrar los campos del formulario edit/contacto
//        var email = $('#email').val('');                        // control coinciden emails
//        var emailok = $('#emailok').val('');

        $('#emailok').change(function() {
            var email = $('#email').val();
            var emailok = $('#emailok').val();
            if ( email !== emailok ) {
                $("label[for='emailok']").css('color', 'red');
                $('#enviar').prop('disabled', true);
                swal({title: "Los email no coinciden", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
            } else {
                $("label[for='email']").css('color', 'white');
                $("label[for='emailok']").css('color', 'white');
                if (textocaptcha === code) {
                    $('#enviar').prop('disabled', false);
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
                    swal({title: "Los email no coinciden", text: "Inténtalo de nuevo", timer: 2000, showConfirmButton: false });
                } else {
                    $("label[for='email']").css('color', 'white');
                    $("label[for='emailok']").css('color', 'white');
                    if (textocaptcha === code) {
                        $('#enviar').prop('disabled', false);
                    };
                };
            };
        });



        var arrow = 'down';                                             // control del icono del link añadir comentario
        $('#ver-textaera').click(function() {
            if(arrow == 'down') {
                $('#ver-textaera i').removeClass('fa-arrow-down');
                $('#ver-textaera i').toggleClass('fa-arrow-up');
                arrow = 'up';
//                $('#ver-textaera').prop('text', 'Ocultar comentarios');
            } else if(arrow == 'up') {
                $('#ver-textaera i').removeClass('fa-arrow-up');
                $('#ver-textaera i').toggleClass('fa-arrow-down');
                arrow = 'down';
//                $('#ver-textaera').prop('text', 'Añadir comentarios');
            };
        });


    });
