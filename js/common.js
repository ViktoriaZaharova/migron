if ($('#wpadminbar')[0]) { // fix admin bar
	$('header').css('margin-top', '32px')
	$('header').next().css('margin-top', '32px')
}


// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').toggleClass('open');
});

$('.sales-slider').slick({
	slidesToShow: 1,
	fade: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>'
});

$('.video-reviews-wrapper').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	infinite: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
	]
});

$('.video-reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	infinite: false,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',

});

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.reviews-slider__nav',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				appendArrows: '.reviews-slider',
			}
		},
		{
			breakpoint: 400,
			settings: {
				appendArrows: '.reviews-slider',
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-slider-social1').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	swipe: false,
	autoplay: true,
	autoplaySpeed: 2000,
	asNavFor: '.reviews-slider-social2',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-slider-social2').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	swipe: false,
	autoplay: true,
	autoplaySpeed: 2000,
	asNavFor: '.reviews-slider-social1',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

//progressbar
$(document).ready(function () {
	function setProgress1(index) {
		const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
		$progressBar.css('width', calc - 0.5 + '%').attr('aria-valuenow', calc);
	}

	const $slider = $('.reviews-slider-social2');
	const $progressBar = $slider.siblings().find('.progress-bg');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		setProgress1(nextSlide);
	});

	setProgress1(0);
});


$('.other-reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

$('.service-advantages-slider').slick({
	slidesToShow: 3,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$(document).ready(function () {
	function setProgress2(index) {
		const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
		$progressBar.css('width', calc - 0.5 + '%').attr('aria-valuenow', calc);
	}

	const $slider = $('.other-reviews-slider');
	const $progressBar = $slider.siblings().find('.progress-bg');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		setProgress2(nextSlide);
	});

	setProgress2(0);
});


$('.video-mass-media-wrapper').slick({
	slidesToShow: 2,
	variableWidth: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	infinite: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				infinite: true,
				slidesToShow: 1,
			}
		}
	]
});

$('.address-gallery').slick({
	slidesToShow: 2,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.cases-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				autoplay: true
			}
		}
	]
});

$('.driving-slider').slick({
	slidesToShow: 4,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});


$('.form-survey-slider').slick({
	slidesToShow: 1,
	fade: true,
	infinite: false,
	appendArrows: '.form-survey-slider__nav',
	nextArrow: '<button type="button" class="slick-next btn btn-md btn-accent"><span>следующий вопрос</span><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev btn btn-md btn-border-accent"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg><span>назад</span></button>'
});

$(".form-survey-slider").on("afterChange", function (event) {
	if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
		$('.form-survey').addClass('last-slide');
	}
});

$(".form-survey-slider").on("beforeChange", function (event) {
	if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
		$('.form-survey').removeClass('last-slide');
	}
});

// slick active
$(window).on('load resize', function () {
	if ($(window).width() < 992) {
		$('.news-slider:not(.slick-initialized)').slick({
			slidesToShow: 1,
			variableWidth: true,
			nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
			responsive: [
				{
					breakpoint: 390,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
					}
				}
			]
		});

		$('.articles-slider:not(.slick-initialized)').slick({
			slidesToShow: 1,
			variableWidth: true,
			nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
			responsive: [
				{
					breakpoint: 420,
					settings: {
						variableWidth: false,
						slidesToShow: 1,
					}
				}
			]
		});
	} else {
		$(".news-slider.slick-initialized").slick("unslick");
		$(".articles-slider.slick-initialized").slick("unslick");
	}
});
// slick active

$('.modal').on('shown.bs.modal', function () {
	$('.slick-slider').resize();
	$('.slick-slider').slick('setPosition');
});

$('.btn-burger').on('click', function () {
	$('.overlay-bg').fadeIn();
	$('.mobile-menu').addClass('open');
});

$('.mobile-menu__close, .overlay-bg').on('click', function () {
	$('.mobile-menu').removeClass('open');
	$('.overlay-bg').fadeOut();
});

$('.btn-toggle').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.documents-wrapper').find('.documents-card:hidden').slice(0, 5).slideDown();

	var onBlock = $(this).prev('.documents-wrapper').find('.documents-card:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.mediaModal').on('show.bs.modal', function () {
	$(this).find('iframe').attr('src', $(this).find('iframe').data('src'));
});


$(document).ready(function () {
	initMap();
});


function initMap() {
	if ($(document).scrollTop() > 300) {
		$('.contacts-map').find('iframe').attr('src', $('.contacts-map').find('iframe').data('src'));
		$(document).off("scroll", initMap);
	}
}

$(document).on("scroll", initMap);

if (typeof (Fancybox) != 'undefined') {
	Fancybox.bind("[data-fancybox]", {
		closeButton: true,
	});
}



$('.form-search').submit(function (e) {
	e.preventDefault();
	var val = $(this).find('input[name="query"]').val();

	window.location.href = "/search/" + val + '/';

});


if (typeof (hidden_blocks) != 'undefined') {
	var i = 0;
	$('section').not('.callback, .contacts').each(function (k, v) {
		i++;
		if (i % 2 == 0) {
			$(v).addClass('m-105');
		}
	});
}