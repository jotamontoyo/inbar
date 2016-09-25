
	$(document).ready(function() {

		// Header Scroll
/*		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}); */

		// Fancybox
//		$('.work-box').fancybox();

		// Flexslider
/*		$('.flexslider').flexslider({
			animation: "fade",
			directionNav: false
		}); */

		// Page Scroll
		var sections = $('section'),
			nav = $('nav[role="navigation"]');


/*		$(window).on('scroll', function() {
			var cur_pos = $(this).scrollTop();
			sections.each(function() {
		    	var top = $(this).offset().top - 76
		        	bottom = top + $(this).outerHeight();
		    	if (cur_pos >= top && cur_pos <= bottom) {
					nav.find('a').removeClass('active');
					nav.find('a[href="#' + $(this).attr('id') +'"]').addClass('active');
		    	}
			});
		}); */



		nav.find('a').on('click', function() {

			var $el = $(this),
		    	id = $el.attr('href');

			$('html, body').animate({
				scrollTop: $(id).offset().top // +76
			}, 800);

			$('#subir-inicio a').css('background-color', 'transparent');

			return false;

		});

		// Mobile Navigation
/*		$('.nav-toggle').on('click', function() {
			$(this).toggleClass('close-nav');
			nav.toggleClass('open');
			return false;
		});

		nav.find('a').on('click', function() {
			$('.nav-toggle').toggleClass('close-nav');
			nav.toggleClass('open');
		}); */

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
		});

	});
