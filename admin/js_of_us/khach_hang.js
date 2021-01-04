$(document).ready(function(){
	$.ajax({
		url:"php_of_us/khach_hang.php",
		type: "POST",
		dataType: "text",
		success: function(result){
			$("#ket_qua_thong_tin_khach_hang").html(result);
		}
	});
});

$("#reloadd").click(function(){
	location.reload();
});

$("#search_customer").submit(function(event) {
	
});

$(".add-arrange").click(function(){
	$("#arrange2").css("display", "inline-block");
	if($("#label1").find(":selected").val() === "tien_da_tra"){
		$("#label2").html("<option value='so_lan_thanh_toan'>Số lần thanh toán</option>")
	}else{
		$("#label2").html("<option value='tien_da_tra'>Tiền thanh toán</option>")
	};
});

$("#label1").change(function(){
	if($("#label1").find(":selected").val() === "tien_da_tra"){
		$("#label2").html("<option value='so_lan_thanh_toan'>Số lần thanh toán</option>")
	}else{
		$("#label2").html("<option value='tien_da_tra'>Tiền thanh toán</option>")
	};
});
$(".submit").click(function(){
	var data = {
		email: $("#email").val(),
		name: $("#name").val(),
		date_min: $("#date_min").val(),
		date_max: $("#date_max").val(),
		telephone: $("#telephone").val(),
		cmnd: $("#cmnd").val(),
		address: $("#address").val(),
		choose1: $("#choose1").find(":selected").val(),
		label1: $("#label1").find(":selected").val(),
		choose2: $("#arrange2").css("display") === "none" ? "" : $("#choose2").find(":selected").val(),
		label2: $("#arrange2").css("display") === "none" ? "" : $("#label2").find(":selected").val(),
	};
	$.ajax({
		url: "php_of_us/tim_kiem_sap_xep_khach_hang.php",
		type: "POST",
		dataType: "text",
		data,
		success: function(result){
			$("#ket_qua_thong_tin_khach_hang").html(result);
		}
	});
});


$("#question").change(function(){
	$.ajax({
		url: "php_of_us/answer.php",
		type: "POST",
		dataType: "text",
		data: {
			question: $("#question").find(":selected").val(),
		},
		success: function(result){
			$("#result_question").text(result);
		}
	}).always(function(result){
		console.log(result);
	})
})