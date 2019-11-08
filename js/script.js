
$(document).ready(function () { // вся магия после загрузки страницы

	/* heder-menue*/
	$(".hamburger").click(function () {
		$(".main-nav-mob").toggleClass("move");
		$(this).toggleClass("close-menu");
	});
	$(".main-nav-mob a").click(function () {
		setTimeout(function () {
			$(".main-nav-mob").toggleClass("move").fade(800);
		}, 400);
		// alert(2);
		// $(".main-nav-mob").toggleClass("move").fade(800);
	});


	$('button#go').click(function (event) { // ловим клик по ссылки с id="go"
		event.preventDefault(); // выключаем стандартную роль элемента
		$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
			function () { // после выполнения предъидущей анимации
				$('#modal_form')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '50%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
			});
	});
	/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
	$('#modal_close, #overlay').click(function () { // ловим клик по крестику или подложке
		$('#modal_form')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				}
			);
	});
// спасибо ваша заявка принята
	var mod = $(".mod");
	$('.close').on('click', function () {
		mod.fadeOut();
	});
	// на проверку
	$('.cc').on('click', function () {
		mod.fadeIn(200);
	});

	
	// отправка формы аяксом
	$("form").submit(function (event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			mod.fadeIn();
			setTimeout(function () {
				mod.fadeOut();
			}, 2500);
			// alert("Спасибо заявка принята");
			$("form").trigger("reset");
			$('#modal_form').animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				});
		});
		return false; 
	});
	
	$("#Phone").mask("+7 (999) 999-99-99");
	$("#Phone2").mask("+7 (999) 999-99-99");
	$(function () {
		var top = $('.sidebar').offset().top - parseFloat($('.sidebar').css('marginTop').replace(/auto/, 0));
		var footTop = $('.work').offset().top - parseFloat($('.work').css('marginTop').replace(/auto/, 0));

		var maxY = footTop - $('.sidebar').outerHeight();

		$(window).scroll(function (evt) {
			var y = $(this).scrollTop();
			if (y > top) {
				if (y < maxY) {
					$('.sidebar').addClass('fixed').removeAttr('style');
				} else {
					$('.sidebar').removeClass('fixed').css({
						position: 'absolute',
						top: (maxY - top - 20) + 'px'
					});
				}
			} else {
				$('.sidebar').removeClass('fixed');
			}
		});
	});


	// var sidebar = $('.sidebar');
	// var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

	// $(window).scroll(function (event) {
	// 	var scroll = $(this).scrollTop();
	// 	if (scroll >= top) {
	// 		sidebar.addClass('fixed');
	// 	} else {
	// 		sidebar.removeClass('fixed');
	// 	}
	// });
	$('.mobile-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
		]
	});
});
