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

$('.reviews-slider').slick({
	slidesToShow: 3,
	variableWidth: true,
	appendArrows: '.reviews-slider__nav',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.address-gallery').slick({
	slidesToShow: 2,
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
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

$('.modal').on('shown.bs.modal', function () {
	$('.slick-slider').resize();
	$('.slick-slider').slick('setPosition');
});