$(document).ready(function() {
	$("button").on("click", function() {
		$(".display").text($(this).text());
	})
});
