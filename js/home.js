$(document).ready(function(){
	$.ajax({
		url: "module/function/house.php",
		type: "post",
		dataType: "text",
		success: function(result){
	//		console.log(result);
			$("#hot-film").html(result);
		}
	})
});
$('.carousel').carousel({
    interval: 3000
});
$(window).on('load', function(){
	$("#load").fadeOut('fast');
});

// Hieu ung click vao anh va trailer
$("body").on("mouseenter", "#group-image img", function(){
	$($(this).nextAll()[1]).css("display", "block");
	let _left = ($("#group-image .img-fluid").width() - $("#group-image .row .col-6 i").width()) / 2 + 14;
	let _top = ($("#group-image .img-fluid").height() - $("#group-image .row .col-6 i").height()) / 2 + 14;
	$("#group-image .row .col-6 i").css("left", _left);
	$("#group-image .row .col-6 i").css("top", _top);	
})
$("body").on("mouseleave", "#group-image img", function(){
	$(this).removeClass('shadow');
    $($(this).nextAll()[1]).css("display", "none");
});
$("body").on("mouseenter", "#group-image .row .col-6 i", function(){
	$($(this).siblings()[0]).addClass('shadow');
	$(this).css("display", "block");
});
$("body").on("mouseleave", "#group-image .row .col-6 i", function(){
	$(this).css("display", "none");
});
$("body").on("click", "#group-image .row .col-6 i", function(){
	$("#youtobe").css("display", "flex");
	$("#youtobe iframe").attr("src", $(this).attr("trailer"));
});
$("body").on("click", ".fa-times", function(){
	$("#youtobe").css("display", "none");
	$("#youtobe iframe").removeAttr("src");
});

// FILE JS CỦA FILE HOME.HTML -  KHI NGƯỜI DÙNG CLICK VÀO TÊN PHIM SẼ LƯU TÊN PHIM LẠI Ỏ TRANG SAVE-INFO-FILM
$("body").on("click", "#group-image .row .col-6 a", function(){
	$.ajax({
		url: "module/function/save-info-film.php",
		type: "post",
		dataType:"text",
		data:{
			ten_phim: $(this).text()
		},
		success: function(result){
			if(result == "success"){
				return true;
			};
			
		}
	});
});
