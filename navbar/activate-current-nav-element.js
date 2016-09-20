$(document).ready(function() {
	function navbarAddActiveClass(navbarElementsSelector, classToAdd) {
		if(typeof classToAdd === "undefined") {
			classToAdd = "navbar-active";
		}

		if(typeof navbarElementsSelector === "undefined") {
			navbarElementsSelector = ".navbar a";
		}

		$(navbarElementsSelector).each(
			function() {
				var href = $(this).attr('href');
				var url = location.href;
				var trimmedUrl = url.replace(/\/$/, "");

				if(href === url || href === trimmedUrl) {
					var li = $(this).closest("li");

					if(li.length) {
						target = li;
					} else {
						target = this;
					}

					$(target).addClass(classToAdd);
					console.log("Added active class");
				};
		});
	}
	navbarAddActiveClass('.navbar a', 'navbar-active');
});