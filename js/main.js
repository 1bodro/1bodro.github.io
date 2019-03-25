/* map */
$(document).ready(function() {
	$(".choice-button").click(function() {
		$(".button-south").toggleClass("button-south-2");
		$(".button-north").toggleClass("button-north-2");
		$(".choice-header-part-2-price-south").toggleClass("choice-header-part-2-price-north");
		$(".another-price-items-photo-south").toggleClass("another-price-items-photo-north");
		$(".another-price-items-video-south").toggleClass("another-price-items-video-north");
		$(".choice-island-south").toggleClass("choice-island-sourth-none");
		$(".choice-island-north-none").toggleClass("choice-island-north");
		return false;
	});
});
	/* FlexSlider */
$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		start: function(slider) {
			$('body').removeClass('loading');
		}
	});
});
	/* Parallax */
var rellax = new Rellax('.rellax', {
	center: true
});
/* back to top */
$(document).ready(function() {
	$("#back-top").hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

