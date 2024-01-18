jQuery(document).ready(function($) {
	if ($.isFunction($.fn.owlCarousel)) {
		$('.slider-home-1').owlCarousel({
			loop: true,
			items: 1
		});
		$('.dishes').owlCarousel({
			loop: true,
			dot: false,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				1200: {
					items: 3
				}
			}
		});
		$('.bratlee-slider').owlCarousel({
			loop: true,
			arrows: false,
			autoplay: true,
			autoplayTimeout: 4000,
			items: 1
		});
		$('.three-slider').owlCarousel({
			loop: true,
			arrows: true,
			items: 1,
			navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
		});
		$('.logodata').owlCarousel({
			loop: true,
			dot: false,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				800: {
					items: 3
				},
				1000: {
					items: 4
				},
				1200: {
					items: 5
				},
				1400: {
					items: 6
				}
			}
		});
		$('.choosecategory').owlCarousel({
			loop: true,
			dot: false,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				800: {
					items: 2
				},
				1000: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}

	jQuery(document).on('click', '.mobile-nav .menu-item-has-children', function($) {
		jQuery(this).toggleClass('active');
	});

	jQuery(document).on('click', '#nav-icon4', function($) {
		jQuery('#mobile-nav').toggleClass('open');
	});

	$(document).on('click', '.mobile-nav', function($) {
		jQuery('#mobile-nav').removeClass('open');
	});

	jQuery(document).on('click', '.bar-menu', function($) {
		jQuery('#mobile-nav').toggleClass('open');
		jQuery('#mobile-nav').toggleClass('hmburger-menu');
		jQuery('#mobile-nav').show();
	});
});

jQuery('.pr-cart').on('click', function() {
	jQuery('.cart-popup').toggleClass('show-cart');
});

if (jQuery("#days").length) {
	(function() {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		let today = new Date(),
			dd = String(today.getDate()).padStart(2, "0"),
			mm = String(today.getMonth() + 1).padStart(2, "0"),
			yyyy = today.getFullYear(),
			nextYear = yyyy + 1,
			dayMonth = "12/30/",
			birthday = dayMonth + yyyy;

		today = mm + "/" + dd + "/" + yyyy;
		if (today > birthday) {
			birthday = dayMonth + nextYear;
		}

		const countDown = new Date(birthday).getTime(),
			x = setInterval(function() {
				const now = new Date().getTime(),
					distance = countDown - now;

				document.getElementById("days").innerText = Math.floor(distance / (day)),
					document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
					document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
					document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

				if (distance < 0) {
					document.getElementById("headline").innerText = "It's my birthday!";
					document.getElementById("countdown").style.display = "none";
					document.getElementById("content").style.display = "block";
					clearInterval(x);
				}
			}, 0);
	}());
}

(function($) {
	$.fn.countTo = function(options) {
		options = options || {};

		return $(this).each(function() {
			var settings = $.extend({},
				$.fn.countTo.defaults, {
					from: $(this).data("from"),
					to: $(this).data("to"),
					speed: $(this).data("speed"),
					refreshInterval: $(this).data("refresh-interval"),
					decimals: $(this).data("decimals")
				},
				options
			);

			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data("countTo") || {};

			$self.data("countTo", data);

			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof settings.onUpdate == "function") {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					$self.removeData("countTo");
					clearInterval(data.interval);
					value = settings.to;

					if (typeof settings.onComplete == "function") {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1000,
		refreshInterval: 100,
		decimals: 0,
		formatter: formatter,
		onUpdate: null,
		onComplete: null
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
})(jQuery);

jQuery(function($) {
	$(".count-number").data("countToOptions", {
		formatter: function(value, options) {
			return value
				.toFixed(options.decimals)
				.replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		}
	});

	$(".timer").each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data("countToOptions") || {});
		$this.countTo(options);
	}
});

let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "grid";
	} else {
		scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#f3274c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;