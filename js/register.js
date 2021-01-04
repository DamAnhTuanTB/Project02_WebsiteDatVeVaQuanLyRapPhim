$(document).ready(function(){
	$("#form").submit(function(){
		let announce = "";
		if(new Date($("#date").val()) > new Date()){
			announce += " Ngày sinh không hợp lệ.";
		}
		const isVNPhoneMobile = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
		if(!isVNPhoneMobile.test($("#telephone").val())){
			announce += " Số điện thoại không đúng.";
		};
		const isEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if(!isEmail.test($("#email").val())){
			announce += " Email không hợp lệ.";
		};
		if($("#password").val() !== $("#repeat-password").val()){
			announce += " Mật khẩu không trùng khớp.";
		};
		if(announce !== ""){
			alert(announce);
			return false;
		};
		$.ajax({
			url: 'module/function/register.php',
			type: 'post',
			dataType: 'json',
			data:
			{
				name: $("#name").val(),
				date: $("#date").val(),
				telephone: $("#telephone").val(),
				email: $("#email").val(),
				password: $("#password").val()
			},
			success: function(result){
				let error_telephone = result["telephone"];
				let error_email = result["email"];
				if(error_telephone === "" && error_email === ""){
					alert("Đăng ký thành công. Nhấn OK để về Trang chủ.");
					location.assign("home.html");
				}
				else{
					alert(error_telephone + " " + error_email);
				}
			},
			fail: function(result){
			}
		});
		return false;
	

	});





})
		
	