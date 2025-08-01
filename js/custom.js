// HAMBURGER JS
$(document).ready(function () {
	$(".hamburger_btn").click(function () {
		$(".hamburger_btn , .header_links").toggleClass("open");
	});
});
// HAMBURGER JS
// tabs js
$(document).ready(function () {
	$(".tab-menu ul li a").on("click", function (event) {
		event.preventDefault();

		const clickedTab = $(this);
		const tabList = clickedTab.closest("ul");
		const tabContentContainer = tabList
			.closest(".tab-teaser")
			.find(".tab-main-box");

		// Remove active class from all tabs
		tabList.find("li a").removeClass("active");

		// Add active class to clicked tab
		clickedTab.addClass("active");

		// Hide all tab content boxes with a fade-out effect
		tabContentContainer.find(".tab-box").fadeOut("fast");

		// Show the corresponding tab content with a fade-in effect
		const tabContentId = clickedTab.attr("href").replace("#", "");
		tabContentContainer.find("#" + tabContentId).fadeIn("slow");
	});
});
// tabs js
