$(document).ready(function(){
	$("#form").submit(function(){
		let announce = "";
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
			url: 'module/function/forgot-password.php',
			type: 'post',
			dataType: 'json',
			data:
			{
				telephone: $("#telephone").val(),
				email: $("#email").val(),
				password: $("#password").val()
			},
			success: function(result){
				let error = result["error"];
				if(error === ""){
					alert("Đổi mật khẩu thành công. Nhấn OK để về Trang chủ.");
					location.assign("home.html");
				}
				else{
					alert(error);
				}
			},
			fail: function(result){
			}
		});
		return false;
	});

})
		
	