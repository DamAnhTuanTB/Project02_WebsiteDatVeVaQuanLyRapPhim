$("#thanh_toan div div").click(function(){
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
});

function xoa_ghe_dang_giu(){
    $.ajax({
        url: "module/function/update-state-chair.php",
        type: "post",
        data: {
            xoa_tat_ca_ghe_dang_giu: "1"
        }
    })
}

$.ajax({
	url: "module/function/pay.php",
	type: "post",
	dataType: "json",
	success: function(result){
		if(result.hasOwnProperty("login")){
			location.assign("login.html");
		}else if(result.hasOwnProperty("pay")){
			location.assign("home.html");
		}
		else{
			$("#ho_ten").text(result["ho_ten"]);
			$("#ngay_sinh").text(result["ngay_sinh"].replace(/(\w+)\-(\w+)\-(\w+)/, '$3/$2/$1'));
			$("#dien_thoai").text(result["dien_thoai"]);
			$("#email").text(result["email"]);
			let total_ghe_thuong = 0;
			let total_ghe_doi = 0;
			let total_ghe_vip = 0;
			let total_happy_combo = 0;
			let total_sweet_combo = 0;
			let total_fantastic_combo = 0;
			let ghe = "";
			if(result["ghe_thuong"]["so_luong"] > 0){
				total_ghe_thuong = result["ghe_thuong"]["so_luong"] * result["ghe_thuong"]["don_gia"];
				ghe +=  `
				<div id="thuong">
	                <div>Ghế Thường - ${result["dinh_dang"]}</div>
	                <div>${result["ghe_thuong"]["so_luong"]} x ${result["ghe_thuong"]["don_gia"]} = ${total_ghe_thuong} VNĐ</div>
	            </div>
	            `;
			}
			if(result["ghe_vip"]["so_luong"] > 0){
				total_ghe_vip = result["ghe_vip"]["so_luong"] * result["ghe_vip"]["don_gia"];
				ghe +=  `
				<div id="vip">
	                <div>Ghế Vip - ${result["dinh_dang"]}</div>
	                <div>${result["ghe_vip"]["so_luong"]} x ${result["ghe_vip"]["don_gia"]} = ${total_ghe_vip} VNĐ</div>
	            </div>
	            `;
			}
			if(result["ghe_doi"]["so_luong"] > 0){
				total_ghe_doi = result["ghe_doi"]["so_luong"] * result["ghe_doi"]["don_gia"];
				ghe +=  `
				<div id="doi">
	                <div>Ghế Đôi - ${result["dinh_dang"]}</div>
	                <div>${result["ghe_doi"]["so_luong"]} x ${result["ghe_doi"]["don_gia"]} = ${total_ghe_doi} VNĐ</div>
	            </div>
	            `;
			}
			$("#chair").append(ghe);

			let do_an = "";
			if(result["happy_combo"]["so_luong"] > 0){
				total_happy_combo = result["happy_combo"]["so_luong"] * result["happy_combo"]["don_gia"];
				do_an +=  `
				<div id="happy_combo">
	                <div>Happy Combo</div>
	                <div>${result["happy_combo"]["so_luong"]} x ${result["happy_combo"]["don_gia"]} = ${total_happy_combo} VNĐ</div>
	            </div>
	            `;
			}
			if(result["sweet_combo"]["so_luong"] > 0){
				total_sweet_combo = result["sweet_combo"]["so_luong"] * result["sweet_combo"]["don_gia"];
				do_an +=  `
				<div id="sweet_combo">
	                <div>Sweet Combo</div>
	                <div>${result["sweet_combo"]["so_luong"]} x ${result["sweet_combo"]["don_gia"]} = ${total_sweet_combo} VNĐ</div>
	            </div>
	            `;
			}
			if(result["fantastic_combo"]["so_luong"] > 0){
				total_fantastic_combo = result["fantastic_combo"]["so_luong"] * result["fantastic_combo"]["don_gia"];
				do_an +=  `
				<div id="fantastic_combo">
	                <div>Fantastic Combo</div>
	                <div>${result["fantastic_combo"]["so_luong"]} x ${result["fantastic_combo"]["don_gia"]} = ${total_fantastic_combo} VNĐ</div>
	            </div>
	            `;
			}

			$("#food").append(do_an);
			let total_money = total_ghe_doi + total_ghe_vip + total_ghe_thuong + total_happy_combo + total_sweet_combo + total_fantastic_combo;
			$("#_total_money").text(total_money + " VNĐ");
			
			let tien_duoc_giam = 0;
			$("#xac_nhan_ma_giam_gia").click(function(){
				if($("#ma_giam_gia").val() !== ""){
					$.ajax({
						url: "module/function/discount-code.php",
						type: "post",
						data: {
							ma_giam_gia: $("#ma_giam_gia").val()
						},
						dataType: "json",
						success: function(result){
							if(result.hasOwnProperty("tien_duoc_giam")){
								$("#result_ma_giam_gia").css("display", "block");
								tien_duoc_giam += Number(result["tien_duoc_giam"]);
								$("#result_ma_giam_gia").text("Bạn đã được giảm " + result["tien_duoc_giam"] + " VNĐ");
								let html_ma_giam_gia = ` 
									<div>Mã giảm giá</div>
									<div>- ${tien_duoc_giam} VNĐ</div>
								`;
								$("#code").html(html_ma_giam_gia);
								total_money -= Number(result["tien_duoc_giam"]);
								if(total_money > 0)
									$("#_total_money").text(total_money + " VNĐ");
								else 
									$("#_total_money").text(0 + " VNĐ");

							}else{
								$("#result_ma_giam_gia").css("display", "block");
								$("#result_ma_giam_gia").text(result["loi"]);
							}
							
						}
					}).always(function(result){
						console.log(result);
					})
				}else{
					$("#result_ma_giam_gia").css("display", "block");
					$("#result_ma_giam_gia").text("Vui lòng nhập mã giảm giá.");
				}
			});
			let is_xem_diem = true;
			$("#xem_diem_fantastic").click(function(){
				$.ajax({
					url: "module/function/point-fantastic.php",
					type: "post",
					dataType: "text",
					data:{
						xem_diem: "1"
					},
					success: function(result){
						
						if(is_xem_diem){
							$("#xem_diem").val(result);
						}else{
							$("#xem_diem").val(0);
						}
					}
				})
			});

			$("#su_dung_diem").click(function(){
				is_xem_diem = false;
				$.ajax({
					url: "module/function/point-fantastic.php",
					type: "post",
					dataType: "text",
					data: {
						su_dung_diem: "1"
					},
					success: function(result){
						$("#result_xem_diem").text("Bạn đã được giảm " + result + " VNĐ");
						$("#result_xem_diem").addClass("font-italic");
						if($("#xem_diem").val() != 0)
							$("#xem_diem").val(0);
						let html_diem_fantastic = ` 
									<div>Điểm Fantastic</div>
									<div>- ${result} VNĐ</div>
								`;
						$("#point").html(html_diem_fantastic);
						total_money -= Number(result);
						if(total_money > 0)
							$("#_total_money").text(total_money + " VNĐ");
						else 
							$("#_total_money").text(0 + " VNĐ");
					}
				});
				return false;
			});

			$("#button_thanh_toan").click(function(result){
				let is_the_ngan_hang = false;
				$.each($("#thanh_toan .row div"), (index, value) => {
					if($(value).hasClass('selected')){
						is_the_ngan_hang = true;
					}
				});
				if(is_the_ngan_hang){
					$.ajax({
						url: "module/function/finish-pay.php",
						type: "post",
						dataType: "text",
						success :function(result){
							alert(result);
							location.assign("account.html");
						}
					})

				}else{
					alert("Vui lòng chọn thẻ ngân hàng để thanh toán.")


				}
			})
		}
	}
});



