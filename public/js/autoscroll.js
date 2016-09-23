
/* SCROLL Y NAVEGACION EN PAGINA ************************************************** */
/* ASPECTO MENU INICIO ************************************************************ */
/* ASPECTO BOTON SUBIR INICIO ***************************************************** */
/* ANIMACION INICIO *************************************************************** */
/* ANIMACION AVISO COOKIES ******************************************************** */
/* BOTONES E IMAGENES DE LOS PERFILES RRHH **************************************** */

    $(document).ready(function() {

        var iScroll = $(window).scrollTop(),
            aviso_cookies = true,
            sections = $('section'),
            nav = $('nav[role="navigation"]');

        $(window).scroll(function() {

            iScroll = $(window).scrollTop();                                            /* animacion aviso cookies */
            if ((iScroll > 200) && (aviso_cookies)) {
                $('.alerta-cookies').removeClass('animated bounceInLeft');
                $('.alerta-cookies').toggleClass('animated bounceOutLeft');
                aviso_cookies = false;
            };

            $('.ocultar').each(function(i) {                                            // .ocultar fadeIn() cuando visible en pantalla
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();    // Check the location of each desired element .ocultar
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > bottom_of_object) {                              // If the object is completely visible in the window, fade it it
                    $(this).animate({
                        'opacity': '1'
                    }, 1000);
                };
            });

            $('#subir-inicio-icon').css('opacity', '0.8');                                  // control de opacity/visibility del icono subir
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                $('#subir-inicio-icon').css('opacity', '0.3');
            }, 250));
            if ($(window).scrollTop() === 0) {
                $('#subir-inicio').css('visibility', 'hidden');
            } else {
                $('#subir-inicio').css('visibility', 'visible');
            };

            if (($(window).scrollTop() === 0) && ($(window).width() > 768)) {               // control aspecto menu-inicio
                $('#menu-inicio').css('height', '70px');
                $('.menu-inicio-item').css('padding-top', '20px');
            } else {
                if ($(window).width() > 768) {
                    $('#menu-inicio').css('height', '50px');
                    $('.menu-inicio-item').css('padding-top', '12px');
                }
            }

        });

/*        nav.find('a').on('click', function() {                         // control de la navegacion en pagina de cada <nav>
			var $el = $(this),
		    	id = $el.attr('href');
			$('html, body').animate({
				scrollTop: $(id).offset().top // +76
			}, 800);
			$('#subir-inicio a').css('background-color', 'transparent');
			return false;
		});

        $('.nav a').on('click', function() {							// cierra .nav cuando click
			var $el = $(this),
		    	id = $el.attr('id');
			if (id !== 'pais-selecionado') {							// evita cierre si id='pais-selecionado'
    			$('.btn-navbar').click();
    			$('.navbar-toggle').click();
			}
		});

		$('.btn-ir-contacto').click(function() {						// cierra el modal cuando click
			$('#panel-modal-seguir-leyendo').modal('hide');
		}); */

        $('img.bgfade').hide();                                         // transicion inico
        $('#wrap').css({'height':'100vh','width':'100%'});
        function anim() {
            $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(8000);
            $("#wrap img").first().fadeIn(8000);
            setTimeout(anim, 14000);
        }
        anim();

        $('.persona a img').hover(                                                  // boton e imagen de perfiles rrhh
            function() {
                $(this).attr("src", "/images/btn/btn-ver-mas-a-over.jpg");
            },
            function() {
                $(this).attr("src","/images/btn/btn-ver-mas-a.jpg");
            });

        $('#persona-1').hover(
            function() {
                $(this).attr("src", "/images/rrhh/antonio.jpg");
            },
            function() {
                $(this).attr("src","/images/rrhh/antonio-ByN.jpg");
            });

        $('#persona-2').hover(
            function() {
                $(this).attr("src", "/images/rrhh/rodrigo.jpg");
            },
            function() {
                $(this).attr("src","/images/rrhh/rodrigo-ByN.jpg");
            });

        $('#persona-3').hover(
            function() {
                $(this).attr("src", "/images/rrhh/francisco-color.jpg");
            },
            function() {
                $(this).attr("src","/images/rrhh/francisco-BN.jpg");
            });

    });


/* =============================================================================================== */





/*        var myInterval = false; */

/*        myInterval = setInterval(AutoScroll, 5000);

        function AutoScroll() {
            var iScroll = $(window).scrollTop();
            iScroll = iScroll + $(window).height();
            $('html, body').animate({
                scrollTop: iScroll
            }, 1000);
        }; */


        /*            var iScroll = $(window).scrollTop();

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
                    }); */













//            $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(2000, function() {
/*                $("#wrap").css({
                    width: '110%',
                    height: '110%',
//                    top: 0,

//                    opacity: 0.3
                })
                .animate({
                    width: '100%',
                    height: '100%',
//                    top: 0,
//                    opacity: 1
                }, 14000)

            }); */

/*            $(function(){
                $("#wrap").css({
                    width: '110%',
                    height: '110%',
//                    top: 0,

//                    opacity: 0.3
                })
                .animate({
                    width: '100%',
                    height: '100%',
//                    top: 0,
//                    opacity: 1
                }, 14000)
            }); */
