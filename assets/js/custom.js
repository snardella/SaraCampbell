$(document).ready(function () {
	/*setTimeout(function () {
		if ($('dd.productView-info-value.stockinfo span').html() == '0') {
			$('.stockside').hide();
		}
	}, 2000);*/
	/*var textwidth = $('h4.card-title a').width();
	$('h4.card-title a').css('width' , textwidth+'px');*/
	//$('h4.card-title a').addClass('elipsis');
	if ($.trim($('.body_product .productView-reviewLink').html()) == '(No reviews yet)') {
		$('span.productView-reviewLink.writereviewcss').show();
	}

	$(document).on('mouseover', function (event) {
		/*if($('.body_category #facetedSearch-navList').next().hasClass('facetedSearch-refineFilters'))
		{
			//alert();
			$('.accordion-navigation.toggleLink').removeClass('is-open');
				$('.accordion-navigation.toggleLink').attr('aria-expanded', 'false');
			$('.accordion-content').removeClass('is-open');
				$('.accordion-content').attr('aria-hidden' , 'true');
		}*/
	});
	$('.navUser-item--mobile-search').on('click', function () {
		$('body header.header').toggleClass('searchactive');
		$('.quickSearchWrap').toggleClass('searchindex');
	});
	$(window).on('keyup blur focus mouseover', function () {
		if ($('dd.productView-info-value.stockinfo span').html() == '0') {
			$('.stockside').hide();
		} else {
			$('.stockside').show();
		}
	});




	$(document).on('click', '.body_category .accordion-navigation.toggleLink', function (e) {
		e.preventDefault();

		var thisdiv = $(this);

		$(this).parent('.accordion-block').parent('.accordion--navList').children('.accordion-block').each(function () {

			var innerdiv = $(this);
			if (innerdiv.children('.accordion-navigation.toggleLink').hasClass('is-open')) {

				innerdiv.children('.accordion-navigation.toggleLink').removeClass('is-open');
				innerdiv.children('.accordion-navigation.toggleLink').attr('aria-expanded', 'false');
				innerdiv.children('.accordion-content').removeClass('is-open');
				innerdiv.children('.accordion-content').attr('aria-hidden', 'true');
			}



		});
		thisdiv.addClass('is-open');
		thisdiv.attr('aria-expanded', 'true');
		thisdiv.next('.accordion-content').addClass('is-open');
		thisdiv.next('.accordion-content').attr('aria-hidden', 'false');


	});

	$(document).on('click', '.body_category', function (event) {

		if (!$(event.target).closest(".accordion--navList").length) {
			$('.accordion-navigation.toggleLink').removeClass('is-open');
			$('.accordion-navigation.toggleLink').attr('aria-expanded', 'false');
			$('.accordion-content').removeClass('is-open');
			$('.accordion-content').attr('aria-hidden', 'true');
		}

	});




	/*$('.body_category .accordion-navigation.toggleLink').on('click', function () {


		var thisdiv = $(this);

		$(this).parent('.accordion-block').parent('.accordion--navList').children('.accordion-block').each(function () {

			var innerdiv = $(this);
			innerdiv.children('.toggleLink').removeClass('is-open');
			innerdiv.children('.toggleLink').attr('aria-expanded', 'false');
			innerdiv.children('.accordion-content').removeClass('is-open');
			innerdiv.children('.accordion-content').attr('aria-hidden' , 'true');

		});

	});
	$('.body_category').on('click', function (event) {
		if(!$(event.target).closest(".accordion--navList").length){
		$('.toggleLink').removeClass('is-open');
			$('.toggleLink').attr('aria-expanded', 'false');
		$('.accordion-content').removeClass('is-open');
			$('.accordion-content').attr('aria-hidden' , 'true');
		}
});*/
});
/*
$('.body_category .accordion-navigation.toggleLink').on('click', function () {

alert();
		var thisdiv = $(this);

		$(this).parent('.accordion-block').parent('.accordion--navList').children('.accordion-block').each(function () {

			var innerdiv = $(this);
			innerdiv.children('.toggleLink').removeClass('is-open');
			innerdiv.children('.toggleLink').attr('aria-expanded', 'false');
			innerdiv.children('.accordion-content').removeClass('is-open');
			innerdiv.children('.accordion-content').attr('aria-hidden' , 'true');

		});

	});
	$('.body_category').on('click', function (event) {
		if(!$(event.target).closest(".accordion--navList").length){
		$('.toggleLink').removeClass('is-open');
			$('.toggleLink').attr('aria-expanded', 'false');
		$('.accordion-content').removeClass('is-open');
			$('.accordion-content').attr('aria-hidden' , 'true');
		}
});*/
