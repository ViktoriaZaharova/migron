// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').toggleClass('open');
});

$('.sales-slider').slick({
	slidesToShow: 1,
	fade: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.video-reviews-wrapper').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false,
	infinite: false,
	// swipe: false,
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

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.reviews-slider__nav',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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

$('.video-mass-media-wrapper').slick({
	slidesToShow: 2,
	variableWidth: true,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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


$('.form-survey-slider').slick({
	slidesToShow: 1,
	fade: true,
	infinite: false,
	appendArrows: '.form-survey-slider__nav',
	nextArrow: '<button type="button" class="slick-next btn btn-md btn-accent"><span>следующий вопрос</span><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev btn btn-md btn-border-accent"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg><span>назад</span></button>'
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
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',	
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
			prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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