let ma_lich = "";
let ghe="";
let phong="";

function xoa_ghe_dang_giu(){
    $.ajax({
        url: "module/function/update-state-chair.php",
        type: "post",
        data: {
            xoa_tat_ca_ghe_dang_giu: "1"
        }
    })
}


setInterval(updateChooseChair,1000);
function updateChooseChair(){
	$.ajax({
		url: "module/function/choose-chair.php",
		type: "post",
		dataType: "json",
		success: function(result){
			if(result.hasOwnProperty("login")){
				location.assign("login.html");
			}else if(result.hasOwnProperty("choose_chair")){
				location.assign("home.html");
			}
			else{	
				console.log(result);
				phong = result['phong'];
				ten_phim = result["ten_phim"];
				ma_lich = result["ma_lich"];
				$.each(result, (index, value) => {
					if(index === "chair"){
						$.each(value, (index, chair) => {
		
							if(index === "thuong"){
								let ghe_thuong = "";
								chair.forEach((value, index) => {
									if(index === 0){
										ghe_thuong += "<div id='row-1'>";
									}
									if(index === 12){
										ghe_thuong += "</div>";
										ghe_thuong += "<div id='row-2'>";
									}
									if(index === 24){
										ghe_thuong += "</div>";
										ghe_thuong += "<div id='row-3'>";
									}
									ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
									if(index === 36){
										ghe_thuong += "</div>";
									}
								});
								$("#casual-chairs").html(ghe_thuong);
							}
							if(index === "vip"){
								let ghe_vip = "";
								chair.forEach((value, index) => {
									if(index === 0){
										ghe_vip += "<div id='row-4'>";
									}
									if(index === 12){
										ghe_vip += "</div>";
										ghe_vip += "<div id='row-5'>";
									}
									if(index === 23){
										ghe_vip += "</div>";
										ghe_vip += "<div id='row-6'>";
									}
									ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
									if(index === 35){
										ghe_vip += "</div>";
									}
								});
								$("#vip-chairs").html(ghe_vip);
							}
							if(index === "doi"){
								let ghe_doi = "";
								chair.forEach((value, index) => {
									if(index === 0){
										ghe_doi += "<div id='row-7'>";
									}
									ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
									if(index === 11){
										ghe_doi += "</div>";
									}
								});
								$("#double-chairs").html(ghe_doi);
							}
						});
					};

					let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
					$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
						if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
							$(this).removeClass("ghethuongdanggiu");
							$(this).addClass("active-ghe-thuong");
						}
					})
					$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
						if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
							$(this).removeClass("ghevipdanggiu");
							$(this).addClass("active-ghe-vip");
						}
					});
					$("#row-7 > div").each(function(){
						if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
							$(this).removeClass("ghedoidanggiu");
							$(this).addClass("active-ghe-doi");
						}
					})
				});
			}
		}
	})
}


$.ajax({
		url: "module/function/choose-chair.php",
		type: "post",
		dataType: "json",
		success: function(result){
			if(result.hasOwnProperty("login")){
				location.assign("login.html");
			}else if(result.hasOwnProperty("choose_chair")){
				location.assign("home.html");
			}
			else{	
				phong = result['phong'];
				ten_phim = result["ten_phim"];
				ma_lich = result["ma_lich"];
				$.each(result, (index, value) => {
					phong = result["phong"];
					$("#ten_phim").text(result["ten_phim"]);
					$("#the_loai").text(result["the_loai"]);
					$("#ngon_ngu").text(result["ngon_ngu"]);
					$("#thoi_luong").text(result["thoi_luong"]);
					ngay_chieu = result["ngay_chieu"].replace(/(\w+)\-(\w+)\-(\w+)/,'$3/$2/$1');
					gio_chieu = result["gio_chieu"];
					$("#ngay_chieu").text(ngay_chieu);
					$("#gio_chieu").text(gio_chieu);
					$("#phong_chieu").text(result["phong"]);
					$("#dinh_dang").text(result["dinh_dang"]);
					$("#anh").attr("src", result["anh"]);
					if(index === "do_an"){
						let do_an = "";
						let combo = ["happy_combo", "sweet_combo", "fantastic_combo"];
						value.forEach((value, index) => {
							do_an += `
						  	<div class="row text-center">
		                  	    <div class="col-3">${value["ten_combo"]}</div>
		                      	<div class="col-5 text-justify">${value["mo_ta"]}</div>
		                      	<div class="col-2">${value["gia"] + " VNĐ"}</div>
		                    	<div class="col-2"><input type="number" name="" min=0 value="0" id=${combo[index]}></div>
		               		</div>`
						});
						$("#combo").append(do_an);
					}	
					
				});
			}
		}
})


let ghe_ngoi = "";
$(document).on("click", "#row-1 > div, #row-2 > div, #row-3 > div", function(){
	if(!$(this).hasClass('ghethuongdaban') && !$(this).hasClass('ghethuongdanggiu')){
		if($(this).hasClass('active-ghe-thuong')){
			// xóa ghế
			ghe_ngoi = ghe_ngoi.replace($(this).text(), "");
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					xoa_ghe_dang_giu: "1"
				}
			});

			$.ajax({
				url: "module/function/choose-chair.php",
				type: "post",
				dataType: "json",
				success: function(result){
					if(result.hasOwnProperty("login")){
						location.assign("login.html");
					}else if(result.hasOwnProperty("choose_chair")){
						location.assign("home.html");
					}
					else{	
						phong = result['phong'];
						ten_phim = result["ten_phim"];
						ma_lich = result["ma_lich"];
						$.each(result, (index, value) => {
							if(index === "chair"){
								$.each(value, (index, chair) => {
				
									if(index === "thuong"){
										let ghe_thuong = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_thuong += "<div id='row-1'>";
											}
											if(index === 12){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-2'>";
											}
											if(index === 24){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-3'>";
											}
											ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 36){
												ghe_thuong += "</div>";
											}
										});
										$("#casual-chairs").html(ghe_thuong);
									}
									if(index === "vip"){
										let ghe_vip = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_vip += "<div id='row-4'>";
											}
											if(index === 12){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-5'>";
											}
											if(index === 23){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-6'>";
											}
											ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 35){
												ghe_vip += "</div>";
											}
										});
										$("#vip-chairs").html(ghe_vip);
									}
									if(index === "doi"){
										let ghe_doi = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_doi += "<div id='row-7'>";
											}
											ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 11){
												ghe_doi += "</div>";
											}
										});
										$("#double-chairs").html(ghe_doi);
									}
								});
							};

							let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
							$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghethuongdanggiu");
									$(this).addClass("active-ghe-thuong");
								}
							})
							$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghevipdanggiu");
									$(this).addClass("active-ghe-vip");
								}
							});
							$("#row-7 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghedoidanggiu");
									$(this).addClass("active-ghe-doi");
								}
							})
						});
					}
				}
			})
			
		}else{
			// thêm ghế
			ghe_ngoi += $(this).text() + " ";
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					them_ghe_dang_giu: "1"
				}
			});

			$.ajax({
				url: "module/function/choose-chair.php",
				type: "post",
				dataType: "json",
				success: function(result){
					if(result.hasOwnProperty("login")){
						location.assign("login.html");
					}else if(result.hasOwnProperty("choose_chair")){
						location.assign("home.html");
					}
					else{	
						phong = result['phong'];
						ten_phim = result["ten_phim"];
						ma_lich = result["ma_lich"];
						$.each(result, (index, value) => {
							if(index === "chair"){
								$.each(value, (index, chair) => {
				
									if(index === "thuong"){
										let ghe_thuong = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_thuong += "<div id='row-1'>";
											}
											if(index === 12){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-2'>";
											}
											if(index === 24){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-3'>";
											}
											ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 36){
												ghe_thuong += "</div>";
											}
										});
										$("#casual-chairs").html(ghe_thuong);
									}
									if(index === "vip"){
										let ghe_vip = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_vip += "<div id='row-4'>";
											}
											if(index === 12){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-5'>";
											}
											if(index === 23){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-6'>";
											}
											ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 35){
												ghe_vip += "</div>";
											}
										});
										$("#vip-chairs").html(ghe_vip);
									}
									if(index === "doi"){
										let ghe_doi = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_doi += "<div id='row-7'>";
											}
											ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 11){
												ghe_doi += "</div>";
											}
										});
										$("#double-chairs").html(ghe_doi);
									}
								});
							};

							let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
							$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghethuongdanggiu");
									$(this).addClass("active-ghe-thuong");
								}
							})
							$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghevipdanggiu");
									$(this).addClass("active-ghe-vip");
								}
							});
							$("#row-7 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghedoidanggiu");
									$(this).addClass("active-ghe-doi");
								}
							})
						});
					}
				}
			})
		}
		$(this).toggleClass("active-ghe-thuong");
		$(this).toggleClass("black-text");
		$("#ghe_ngoi").text(ghe_ngoi);
	}

});
$(document).on("click", "#row-4 > div, #row-5 > div, #row-6 > div", function(){
	if(!$(this).hasClass('ghevipdaban') && !$(this).hasClass('ghevipdanggiu')){
		if($(this).hasClass('active-ghe-vip')){
			// xóa ghế
			ghe_ngoi = ghe_ngoi.replace($(this).text(), "");
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					xoa_ghe_dang_giu: "1"
				}
			});


			$.ajax({
					url: "module/function/choose-chair.php",
					type: "post",
					dataType: "json",
					success: function(result){
						if(result.hasOwnProperty("login")){
							location.assign("login.html");
						}else if(result.hasOwnProperty("choose_chair")){
							location.assign("home.html");
						}
						else{	
							phong = result['phong'];
							ten_phim = result["ten_phim"];
							ma_lich = result["ma_lich"];
							$.each(result, (index, value) => {
								if(index === "chair"){
									$.each(value, (index, chair) => {
					
										if(index === "thuong"){
											let ghe_thuong = "";
											chair.forEach((value, index) => {
												if(index === 0){
													ghe_thuong += "<div id='row-1'>";
												}
												if(index === 12){
													ghe_thuong += "</div>";
													ghe_thuong += "<div id='row-2'>";
												}
												if(index === 24){
													ghe_thuong += "</div>";
													ghe_thuong += "<div id='row-3'>";
												}
												ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
												if(index === 36){
													ghe_thuong += "</div>";
												}
											});
											$("#casual-chairs").html(ghe_thuong);
										}
										if(index === "vip"){
											let ghe_vip = "";
											chair.forEach((value, index) => {
												if(index === 0){
													ghe_vip += "<div id='row-4'>";
												}
												if(index === 12){
													ghe_vip += "</div>";
													ghe_vip += "<div id='row-5'>";
												}
												if(index === 23){
													ghe_vip += "</div>";
													ghe_vip += "<div id='row-6'>";
												}
												ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
												if(index === 35){
													ghe_vip += "</div>";
												}
											});
											$("#vip-chairs").html(ghe_vip);
										}
										if(index === "doi"){
											let ghe_doi = "";
											chair.forEach((value, index) => {
												if(index === 0){
													ghe_doi += "<div id='row-7'>";
												}
												ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
												if(index === 11){
													ghe_doi += "</div>";
												}
											});
											$("#double-chairs").html(ghe_doi);
										}
									});
								};

								let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
								$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
									if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
										$(this).removeClass("ghethuongdanggiu");
										$(this).addClass("active-ghe-thuong");
									}
								})
								$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
									if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
										$(this).removeClass("ghevipdanggiu");
										$(this).addClass("active-ghe-vip");
									}
								});
								$("#row-7 > div").each(function(){
									if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
										$(this).removeClass("ghedoidanggiu");
										$(this).addClass("active-ghe-doi");
									}
								})
							});
						}
					}
				})


		}else{
			// thêm ghế
			ghe_ngoi += $(this).text() + " ";
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					them_ghe_dang_giu: "1"
				}
			});

			$.ajax({
				url: "module/function/choose-chair.php",
				type: "post",
				dataType: "json",
				success: function(result){
					if(result.hasOwnProperty("login")){
						location.assign("login.html");
					}else if(result.hasOwnProperty("choose_chair")){
						location.assign("home.html");
					}
					else{	
						phong = result['phong'];
						ten_phim = result["ten_phim"];
						ma_lich = result["ma_lich"];
						$.each(result, (index, value) => {
							if(index === "chair"){
								$.each(value, (index, chair) => {
				
									if(index === "thuong"){
										let ghe_thuong = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_thuong += "<div id='row-1'>";
											}
											if(index === 12){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-2'>";
											}
											if(index === 24){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-3'>";
											}
											ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 36){
												ghe_thuong += "</div>";
											}
										});
										$("#casual-chairs").html(ghe_thuong);
									}
									if(index === "vip"){
										let ghe_vip = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_vip += "<div id='row-4'>";
											}
											if(index === 12){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-5'>";
											}
											if(index === 23){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-6'>";
											}
											ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 35){
												ghe_vip += "</div>";
											}
										});
										$("#vip-chairs").html(ghe_vip);
									}
									if(index === "doi"){
										let ghe_doi = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_doi += "<div id='row-7'>";
											}
											ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 11){
												ghe_doi += "</div>";
											}
										});
										$("#double-chairs").html(ghe_doi);
									}
								});
							};

							let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
							$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghethuongdanggiu");
									$(this).addClass("active-ghe-thuong");
								}
							})
							$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghevipdanggiu");
									$(this).addClass("active-ghe-vip");
								}
							});
							$("#row-7 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghedoidanggiu");
									$(this).addClass("active-ghe-doi");
								}
							})
						});
					}
				}
			})

		}
		$(this).toggleClass("active-ghe-vip");
		$(this).toggleClass("black-text");
		$("#ghe_ngoi").text(ghe_ngoi);
	}
});
$(document).on("click", "#row-7 > div", function(){
	if(!$(this).hasClass('ghedoidaban') && !$(this).hasClass('ghedoidanggiu')){
		if($(this).hasClass('active-ghe-doi')){
			// xóa ghế
			ghe_ngoi = ghe_ngoi.replace($(this).text(), "");
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					xoa_ghe_dang_giu: "1"
				}
			});

			$.ajax({
				url: "module/function/choose-chair.php",
				type: "post",
				dataType: "json",
				success: function(result){
					if(result.hasOwnProperty("login")){
						location.assign("login.html");
					}else if(result.hasOwnProperty("choose_chair")){
						location.assign("home.html");
					}
					else{	
						phong = result['phong'];
						ten_phim = result["ten_phim"];
						ma_lich = result["ma_lich"];
						$.each(result, (index, value) => {
							if(index === "chair"){
								$.each(value, (index, chair) => {
				
									if(index === "thuong"){
										let ghe_thuong = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_thuong += "<div id='row-1'>";
											}
											if(index === 12){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-2'>";
											}
											if(index === 24){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-3'>";
											}
											ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 36){
												ghe_thuong += "</div>";
											}
										});
										$("#casual-chairs").html(ghe_thuong);
									}
									if(index === "vip"){
										let ghe_vip = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_vip += "<div id='row-4'>";
											}
											if(index === 12){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-5'>";
											}
											if(index === 23){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-6'>";
											}
											ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 35){
												ghe_vip += "</div>";
											}
										});
										$("#vip-chairs").html(ghe_vip);
									}
									if(index === "doi"){
										let ghe_doi = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_doi += "<div id='row-7'>";
											}
											ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 11){
												ghe_doi += "</div>";
											}
										});
										$("#double-chairs").html(ghe_doi);
									}
								});
							};

							let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
							$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghethuongdanggiu");
									$(this).addClass("active-ghe-thuong");
								}
							})
							$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghevipdanggiu");
									$(this).addClass("active-ghe-vip");
								}
							});
							$("#row-7 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghedoidanggiu");
									$(this).addClass("active-ghe-doi");
								}
							})
						});
					}
				}
			})


		}else{
			// thêm ghế
			ghe_ngoi += $(this).text() + " ";
			$.ajax({
				url: "module/function/update-state-chair.php",
				type: "post",
				data: {
					ma_lich: ma_lich,
					ghe: $(this).text(),
					them_ghe_dang_giu: "1"
				}
			});

			$.ajax({
				url: "module/function/choose-chair.php",
				type: "post",
				dataType: "json",
				success: function(result){
					if(result.hasOwnProperty("login")){
						location.assign("login.html");
					}else if(result.hasOwnProperty("choose_chair")){
						location.assign("home.html");
					}
					else{	
						phong = result['phong'];
						ten_phim = result["ten_phim"];
						ma_lich = result["ma_lich"];
						$.each(result, (index, value) => {
							if(index === "chair"){
								$.each(value, (index, chair) => {
				
									if(index === "thuong"){
										let ghe_thuong = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_thuong += "<div id='row-1'>";
											}
											if(index === 12){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-2'>";
											}
											if(index === 24){
												ghe_thuong += "</div>";
												ghe_thuong += "<div id='row-3'>";
											}
											ghe_thuong += `<div class=${"ghethuong" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 36){
												ghe_thuong += "</div>";
											}
										});
										$("#casual-chairs").html(ghe_thuong);
									}
									if(index === "vip"){
										let ghe_vip = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_vip += "<div id='row-4'>";
											}
											if(index === 12){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-5'>";
											}
											if(index === 23){
												ghe_vip += "</div>";
												ghe_vip += "<div id='row-6'>";
											}
											ghe_vip += `<div class=${"ghevip" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 35){
												ghe_vip += "</div>";
											}
										});
										$("#vip-chairs").html(ghe_vip);
									}
									if(index === "doi"){
										let ghe_doi = "";
										chair.forEach((value, index) => {
											if(index === 0){
												ghe_doi += "<div id='row-7'>";
											}
											ghe_doi += `<div class=${"ghedoi" + value["trang_thai_ghe"]}>${value["ghe"]}</div>`;
											if(index === 11){
												ghe_doi += "</div>";
											}
										});
										$("#double-chairs").html(ghe_doi);
									}
								});
							};

							let arr_ghe_ngoi = $("#ghe_ngoi").text().trim().split(" ");
							$("#row-1 > div, #row-2 > div, #row-3 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghethuongdanggiu");
									$(this).addClass("active-ghe-thuong");
								}
							})
							$("#row-4 > div, #row-5 > div, #row-6 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghevipdanggiu");
									$(this).addClass("active-ghe-vip");
								}
							});
							$("#row-7 > div").each(function(){
								if(arr_ghe_ngoi.indexOf($(this).text()) !== -1){
									$(this).removeClass("ghedoidanggiu");
									$(this).addClass("active-ghe-doi");
								}
							})
						});
					}
				}
			})

		}
		$(this).toggleClass("active-ghe-doi");
		$(this).toggleClass("black-text");
		$("#ghe_ngoi").text(ghe_ngoi);
	}
});

$("#thanh_toan").click(function(){

	if($("#ghe_ngoi").text().trim() === ""){
		alert("Vui lòng chọn ghế để tiến hành thanh toán");
		return false;
	}
	let arr_ghe_ngoi = ghe_ngoi.trim().split(" ");
	let arr_ghe_thuong = [];
	let arr_ghe_vip = [];
	let arr_ghe_doi = [];
	arr_ghe_ngoi.forEach((value, index) => {
		if(value.indexOf("A") != -1 || value.indexOf("B") != -1 || value.indexOf("C") != -1){
			arr_ghe_thuong.push(value);
		}
		if(value.indexOf("D") != -1 || value.indexOf("E") != -1 || value.indexOf("F") != -1){
			arr_ghe_vip.push(value);
		}
		if(value.indexOf("G") != -1){
			arr_ghe_doi.push(value);
		}
	});
	
	let str_ghe = "";
	if(arr_ghe_thuong.length > 0){
		str_ghe += "gheThuong(" + arr_ghe_thuong.join("+") + ")";
	}
	if(arr_ghe_vip.length > 0){
		str_ghe += "+";
		str_ghe += "gheVip(" + arr_ghe_vip.join("+") + ")";
	}
	if(arr_ghe_doi.length > 0){
		str_ghe += "+";
		str_ghe += "gheDoi(" + arr_ghe_doi.join("+") + ")";
	}
	let happy_combo = $("#happy_combo").val();
	let sweet_combo = $("#sweet_combo").val();
	let fantastic_combo = $("#fantastic_combo").val();
	let str_do_an = "";
	if(happy_combo > 0){
		str_do_an += "happyCombo(" + happy_combo + ")";
	}
	if(sweet_combo > 0){
		str_do_an += "+";
		str_do_an += "sweetCombo(" + sweet_combo + ")";
	}
	if(fantastic_combo > 0){
		str_do_an += "+";
		str_do_an += "fantasticCombo(" + fantastic_combo + ")";
	}

	//console.log(str_ghe_thuong, str_ghe_vip, str_ghe_doi);
	let ma_ve = "";
	str_ghe = str_ghe.replace(/^\+/, "");
	str_do_an = str_do_an.replace(/^\+/, "");
	if(str_do_an !== "")
		ma_ve = ma_lich + "/" + phong + "/" + str_ghe + "/" + str_do_an;
	else
		ma_ve = ma_lich + "/" + phong + "/" + str_ghe;
//	console.log(ma_ve);
	let date = new Date();
	let ngay = "";
	let thang = "";
	if(date.getDate() < 10){
		ngay = "0" + date.getDate().toString();
	}
	else{
		ngay = date.getDate();
	}
	if((date.getMonth() + 1) < 10){
		thang = "0" + (date.getMonth() + 1).toString();
	}else{
		thang = date.getMonth() + 1;
	}

	let ngay_dat = ngay + "/" + thang + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	$.ajax({
		url: "module/function/save-pay.php",
		type: "post",
		data: {
			ma_ve: ma_ve,
			ten_phim: ten_phim,
			suat_chieu: ngay_chieu + " " + gio_chieu + " " + phong + " " + $("#ghe_ngoi").text().trim().split(" ").join("&"),
			ngay_dat: ngay_dat,
			ghe_vip: arr_ghe_vip.length,
			ghe_thuong: arr_ghe_thuong.length,
			ghe_doi: arr_ghe_doi.length,
			happy_combo: happy_combo,
			sweet_combo: sweet_combo,
			fantastic_combo: fantastic_combo,
			cac_ghe: $("#ghe_ngoi").text().trim()
		},
		success: function(result){
			location.assign("pay.html");
		}
	})
	
})
