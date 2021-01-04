$(document).ready(function(){
	
	$("body").on("click", ".atime", function(){
		$(this).addClass("clicked");
		$(this).siblings().removeClass('clicked');
	});
	$("body").on("click", "#close", function(){
		$("#timeline").addClass('exit');
	})
})