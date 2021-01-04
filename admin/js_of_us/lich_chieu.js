$.ajax({
		url:"php_of_us/hien_thi_lich_chieu.php",
		type: "GET",
		dataType: "text",
		success: function(result){
			$("#ket_qua_thong_tin_lich_chieu").html(result);
		}
});

$.ajax({
	url:"php_of_us/tao_lich_chieu.php",
	type: "GET",
	dataType: "json",
	success: function(result){
		var option_id = "";
		$.each(result.id, (index, value) => {
			option_id += `<option>${value}</option>`
		});
		var option_ten_phim = "";
		$.each(result.ten_phim, (index, value) => {
			option_ten_phim += `<option>${value}</option>`
		});
		$("#_id").append(option_id);
		$("#_phim").append(option_ten_phim);

	}
})

$("#_id").click(function(){
	$.ajax({
		url:"php_of_us/tao_lich_chieu.php",
		type: "GET",
		dataType: "json",
		success: function(result){
			var option_id = "";
			$.each(result.id, (index, value) => {
				option_id += `<option>${value}</option>`
			});
			var option_ten_phim = "";
			$.each(result.ten_phim, (index, value) => {
				option_ten_phim += `<option>${value}</option>`
			});
			$("#_id option:not(option:selected)").remove();
			$("#_id").append(option_id);
			$("#_phim option:not(option:selected)").remove();
			$("#_phim").append(option_ten_phim);

		}
	})
});

$("#_phim").click(function(){
	$.ajax({
		url:"php_of_us/tao_lich_chieu.php",
		type: "GET",
		dataType: "json",
		success: function(result){
			var option_id = "";
			$.each(result.id, (index, value) => {
				option_id += `<option>${value}</option>`
			});
			var option_ten_phim = "";
			$.each(result.ten_phim, (index, value) => {
				option_ten_phim += `<option>${value}</option>`
			});
			$("#_id option:not(option:selected)").remove();
			$("#_id").append(option_id);
			$("#_phim option:not(option:selected)").remove();
			$("#_phim").append(option_ten_phim);
		}
	})
});

$("#_id").change(function(){
	var id = $(this).find(":selected").val();
	$.ajax({
		url:"php_of_us/lay_thong_tin_lich_chieu.php",
		type: "GET",
		dataType: "text",
		data: {id},
		success: function(result){
			$("#_phim").html(`<option selected='selected'>${result}</option>`);

			if(
				$("#_ngay_chieu").val() !== "" && $("#_id").find(":selected").val() !== "Danh sách id" 
				&& $("#_phim").find(":selected").val() !== "Danh sách phim"
				&& $("#_gio_chieu").find(":selected").val() !== "Danh sách giờ chiếu" 
				&& $("#_dinh_dang").find(":selected").val() !== "Danh sách định dạng"
			){
				
				$("#_ma_lich").val($("#_ngay_chieu").val() + "/" + $("#_id").find(":selected").val() + "/"
				 + $("#_phim").find(":selected").val() + "/" + $("#_gio_chieu").find(":selected").val() + "/" 
				 + $("#_dinh_dang").find(":selected").val());
			}

		}
	});
});

$("#_phim").change(function(){
	var ten_phim = $(this).find(":selected").val();
	$.ajax({
		url:"php_of_us/lay_thong_tin_lich_chieu.php",
		type: "GET",
		dataType: "text",
		data: {ten_phim},
		success: function(result){
			$("#_id").html(`<option selected='selected'>${result}</option>`);

			if(
				$("#_ngay_chieu").val() !== "" && $("#_id").find(":selected").val() !== "Danh sách id" 
				&& $("#_phim").find(":selected").val() !== "Danh sách phim"
				&& $("#_gio_chieu").find(":selected").val() !== "Danh sách giờ chiếu" 
				&& $("#_dinh_dang").find(":selected").val() !== "Danh sách định dạng"
			){
				
				$("#_ma_lich").val($("#_ngay_chieu").val() + "/" + $("#_id").find(":selected").val() + "/"
				 + $("#_phim").find(":selected").val() + "/" + $("#_gio_chieu").find(":selected").val() + "/" 
				 + $("#_dinh_dang").find(":selected").val());
			}
		}
	})
});

$("#_ngay_chieu").change(function(){
	if(
		$("#_ngay_chieu").val() !== "" && $("#_id").find(":selected").val() !== "Danh sách id" 
		&& $("#_phim").find(":selected").val() !== "Danh sách phim"
		&& $("#_gio_chieu").find(":selected").val() !== "Danh sách giờ chiếu" 
		&& $("#_dinh_dang").find(":selected").val() !== "Danh sách định dạng"
	){
		
		$("#_ma_lich").val($("#_ngay_chieu").val() + "/" + $("#_id").find(":selected").val() + "/"
		 + $("#_phim").find(":selected").val() + "/" + $("#_gio_chieu").find(":selected").val() + "/" 
		 + $("#_dinh_dang").find(":selected").val());
	}
});

$("#_gio_chieu").change(function(){

	if(
		$("#_ngay_chieu").val() !== "" && $("#_id").find(":selected").val() !== "Danh sách id" 
		&& $("#_phim").find(":selected").val() !== "Danh sách phim"
		&& $("#_gio_chieu").find(":selected").val() !== "Danh sách giờ chiếu" 
		&& $("#_dinh_dang").find(":selected").val() !== "Danh sách định dạng"
	){
		
		$("#_ma_lich").val($("#_ngay_chieu").val() + "/" + $("#_id").find(":selected").val() + "/"
		 + $("#_phim").find(":selected").val() + "/" + $("#_gio_chieu").find(":selected").val() + "/" 
		 + $("#_dinh_dang").find(":selected").val());
	}
});

$("#_dinh_dang").change(function(){

	if(
		$("#_ngay_chieu").val() !== "" && $("#_id").find(":selected").val() !== "Danh sách id" 
		&& $("#_phim").find(":selected").val() !== "Danh sách phim"
		&& $("#_gio_chieu").find(":selected").val() !== "Danh sách giờ chiếu" 
		&& $("#_dinh_dang").find(":selected").val() !== "Danh sách định dạng"
	){
		
		$("#_ma_lich").val($("#_ngay_chieu").val() + "/" + $("#_id").find(":selected").val() + "/"
		 + $("#_phim").find(":selected").val() + "/" + $("#_gio_chieu").find(":selected").val() + "/" 
		 + $("#_dinh_dang").find(":selected").val());
	}
});

$("#luu_lich_chieu").click(function(){
	if($("#_ma_lich").val() === ""){
		alert("Bạn chưa tạo lịch chiếu.")
	}
	else{
		$.ajax({
			url:"php_of_us/luu_lich_chieu.php",
			type: "GET",
			dataType: "text",
			data:{
				ngay_chieu: $("#_ngay_chieu").val(),
				id: $("#_id").find(":selected").val(),
				ten_phim: $("#_phim").find(":selected").val(),
				gio_chieu: $("#_gio_chieu").find(":selected").val(),
				dinh_dang: $("#_dinh_dang").find(":selected").val(),
				ma_lich: $("#_ma_lich").val()
			},
			success: function(result){
				$.ajax({
					url:"php_of_us/hien_thi_lich_chieu.php",
					type: "GET",
					dataType: "text",
					success: function(result){
					$("#ket_qua_thong_tin_lich_chieu").html(result);
					}
				});
				alert(result);


			}
		});
	}
});