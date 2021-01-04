
$(".info-account").click(function(){
	$(this).addClass("active");
	$(".film").removeClass('active');
	$("#info-account").show('fast');
	$("#film").hide('fast');
});

$(".film").click(function(){
	$(this).addClass("active");
	$(".info-account").removeClass('active');
	$("#info-account").hide('fast');
	$("#film").show('fast')
});

$.ajax({
	url: "module/function/home.php",
	type: "post",
	dataType: "json",
	success: function(result){
		if(result.hasOwnProperty("name")){
			$("#account").css("display", "block");
			$.ajax({
				url: "module/function/account.php",
				type: "post",
				dataType: "json",
				success: function(result){
					$("#name").val(result["name"]);
					$("#date").val(result["date"]);
					$("#address").val(result["address"]);
					$("#card").val(result["card"]);
					$("#telephone").val(result["telephone"]);
					$("#email").val(result["email"]);
					$("#image").css("background-image", "url(upload/" + result["email"] + ".png" + ")" + ", url(https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png)");
				},
				fail: function(result){
					
				}
		    });
		}
		else if(result.hasOwnProperty("not_login")){
			$("#account").css("display", "none");
			$("#hide").css("display", "block");	
		}
	}
});

$("#upload-info").submit(function(){
	let announce = "";
	if(new Date($("#date").val()) > new Date()){
		announce += " Ngày sinh không hợp lệ.";
	}
	const isVNPhoneMobile = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
	if(!isVNPhoneMobile.test($("#telephone").val())){
		announce += " Số điện thoại không đúng.";
	};
	
	if(announce !== ""){
		alert(announce);
		return false;
	};
	$.ajax({
		url: 'module/function/update-info.php',
		type: 'post',
		dataType: 'text',
		data:
		{
			name: $("#name").val(),
			date: $("#date").val(),
			telephone: $("#telephone").val(),
			email: $("#email").val(),
			address: $("#address").val(),
			card: $("#card").val(),
		},
		success: function(result){
			alert(result);
			location.assign('account.html');
		},
		fail: function(result){
		}
	});
	return false;
});


$.ajax({
	url:"module/function/film-journey.php",
	type: "post",
	dataType: "json",
	success: function(result){
		let html = "";
		result.forEach((value, index) => {
			html += ` 
			 <tr>
                 <td>${value["ma_hoa_don"]}</td>
                 <td>${value["phim"]}</td>
                 <td>${value["suat_chieu"]}</td>
                 <td>${value["ngay_dat"]}</td>
             </tr>
			`
		});
		$("#film table tbody").html(html);
	}
})



