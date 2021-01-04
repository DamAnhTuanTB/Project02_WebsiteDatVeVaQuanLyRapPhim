
$("#group-image img").hover(function(){
	$($(this).nextAll()[0]).css("display", "block");
	let _left = ($("#group-image .card-img-top").width() - $("#group-image .row .col-md-3 .card i").width()) / 2;
	let _top = ($("#group-image .card-img-top").height() - $("#group-image .row .col-md-3 .card i").height()) / 2;
	$("#group-image .row .col-md-3 .card i").css("left", _left);
	$("#group-image .row .col-md-3 .card i").css("top", _top);
});
$("#group-image img").mouseleave(function() {
	$(this).removeClass('shadow');
    $($(this).nextAll()[0]).css("display", "none");
});
$("#group-image .row .col-md-3 .card i").hover(function(){
	$($(this).siblings()[0]).addClass('shadow');
	$(this).css("display", "block");
});

$("#group-image .row .col-md-3 .card i").mouseleave(function(){
	$(this).css("display", "none");
});

$("#group-image .row .col-md-3 .card i").click(function(){
	$("#youtobe").css("display", "flex");
	$("#youtobe iframe").attr("src", $(this).attr("trailer"));
});

$(".fa-times").click(function(){
	$("#youtobe").css("display", "none");
	$("#youtobe iframe").removeAttr("src");
});


$(".pay-fare").click(function(){
	$("#timeline").removeClass("exit");
	let idd = $(this).attr("idfilm");
	var ten_phim = $($(this).siblings()[2]).text();
	$.ajax({
		url:"module/function/pay-fare.php",
		method: "POST",
		dataType: "json",
		data: {
			ten_phim: ten_phim
		},
		success: function(result){
			console.log(result);
			$("#name-film").text(ten_phim);
			var day_timeline = "";
			$.each(result, (day, film) => {
				var day_item = day.replace(/(\w+)\-(\w+)\-(\w+)/,'$3/$2-$1').replace(/\-\w+$/, "");
				day_timeline += 
				` 
					<div class="atime">${day_item}</div>
				`
			});
			$("#day-timeline").html(day_timeline);
			$("#day-timeline > .atime:first-child").addClass("clicked");

			let firstday= $("#day-timeline > .atime:first-child").text();
			let _firstday = "2020-" + firstday.replace(/(\w+)\/(\w+)/, '$2-$1');
			console.log(_firstday);
			var _2D = result[_firstday]["2D"];
			var _3D = result[_firstday]["3D"];
			var html2D = "";
			var html3D = "";
			$.each(_2D, (index, value) => {
				html2D += 
				` 
				<div class="time-item">${value}</div>
				`
			});
			$.each(_3D, (index, value) => {
				html3D += 
				` 
				<div class="time-item">${value}</div>
				`
			});
			$("#_2d .time").html(html2D);
			$("#_3d .time").html(html3D);

			let dayy = _firstday;


			$(document).on("click", ".atime", function(){
				var day_item = "2020-" + $(this).text().replace(/(\w+)\/(\w+)/, '$2-$1');
				console.log(day_item);
				dayy = day_item;
				var _2D = result[day_item]["2D"];
				var _3D = result[day_item]["3D"];
				console.log(_2D, _3D);
				var html2D = "";
				var html3D = "";
				$.each(_2D, (index, value) => {
					html2D += 
					` 
					<div class="time-item">${value}</div>
					`
				});
				$.each(_3D, (index, value) => {
					html3D += 
					` 
					<div class="time-item">${value}</div>
					`
				});
				$("#_2d .time").html(html2D);
				$("#_3d .time").html(html3D);
			});
		
			$(document).on("click", ".time-item", function(){
				let film = ten_phim;
				let time = $(this).text();
				let id = idd;
				let day = dayy;
				let format = $(this).parent().prev().attr("category");
				
				let showtime = day + "/" + id + "/" + film + "/" + time + "/" + format; 

				$.ajax({
					url: "module/function/save-showtime.php",
					method: "post",
					dataType: "text",
					data:{
						showtime: showtime,
						film: film,
						time: time,
						day: day,
						format: format
					},
					success: function(result){
						if(result === "fail"){
							alert("Vui lòng đăng nhập để tiến hành đặt vé.");
							location.assign("login.html");
						}else if(result === "success"){
							location.assign("choose-chair.html");
						}
					}
				})
			});

		}
	});
	
})