$.ajax({
		url:"php_of_us/phim.php",
		type: "GET",
		dataType: "text",
		success: function(result){
			$("#ket_qua_thong_tin_phim").html(result);
		}
});
$("#hien_thi_phim th").click(function(){
	$.ajax({
		url:"php_of_us/phim.php",
		type: "GET",
		dataType: "text",
		data: {
			cot: $(this).attr("id"),
			sap_xep: $(this).attr("name")
			},
		success: function(result){
			$("#ket_qua_thong_tin_phim").html(result);
		}
	});
	if($(this).attr("name") == "ASC"){
		$(this).attr("name", "DESC");
	}else{
		$(this).attr("name", "ASC");
	}
});