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