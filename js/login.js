$(document).ready(function(){
	$("#form").submit(function(){
		const isEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
		if(!isEmail.test($("#email").val())){
			alert("Email không hợp lệ.");
			return false;
		};
		$.ajax({
			url: "module/function/login.php",
			type: "post",
			dataType: "text",
			data:
			{
				email: $("#email").val(),
				password: $("#password").val(),
				remember_me: $("#remember-me").prop("checked")
			},
			success: function(result){
				if(result === "success"){
					location.assign("home.html");
				}else{
					alert(result);
				}
			}
		});
		return false;
	});
})