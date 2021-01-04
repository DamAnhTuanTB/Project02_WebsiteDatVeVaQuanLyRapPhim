let iddd = "";
let namefilm = "";
$.ajax({ // FILE JS CỦA FILE INFO-FILM.HTML
	// TRANG THÔNG TIN PHIM LẤY DỮ LIỆU TỪ TRANG GET-INFO.PHP
	url: "module/function/get-info-film.php",
	type: "post",
	dataType: "json",
	success: function(result){
		iddd = result["id"];
		namefilm = result["ten_phim"];

		$("#anh").attr("src", result["anh"]);
		$(".ten_phim").text(result["ten_phim"]);
		$("#mo_ta").text(result["mo_ta"]);
		$("#dao_dien").text(result["dao_dien"]);
		$("#dien_vien").text(result["dien_vien"]);
		$("#the_loai").text(result["the_loai"]);
		$("#thoi_luong").text(result["thoi_luong"]);
		$("#ngon_ngu").text(result["ngon_ngu"]);
		$("#ngay_khoi_chieu").text(result["ngay_khoi_chieu"].replace(/(\w+)\-(\w+)\-(\w+)/,'$3/$2/$1'));
	    $("#trailer").attr("src", result["trailer"].replace(/\?\w+\=\w/,""));
	    $("#hot").text(result["phim_dang_hot"] === "yes" ? "HOT" : "");
	  
	    if(result["phim_dang_chieu"] === "no"){
	    	$(".pay-fare").remove();
	    }
	}
});


/*Chức năng của nút Mua vé */

$(document).ready(function(){
	$("body").on("click", "#close", function(){
		$("#timeline").addClass('exit');
	})
});



$(".pay-fare").click(function(){
	$("#timeline").removeClass("exit");
	console.log(iddd);
	let idd = iddd;
	var ten_phim = namefilm;
	console.log(ten_phim);
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


			$(".atime").click(function(){
				var day_item = "2020-" + $(this).text().replace(/(\w+)\/(\w+)/, '$2-$1');
				dayy = day_item;
				var _2D = result[day_item]["2D"];
				var _3D = result[day_item]["3D"];
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