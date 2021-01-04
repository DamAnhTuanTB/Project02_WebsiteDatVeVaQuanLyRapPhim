$.ajax({
	url: "module/function/home.php",
	type: "post",
	dataType: "json",
	success: function(result){
		if(result.hasOwnProperty("name")){
		//	console.log(result);
			$("#login").text(result["name"]);
			$("#login").hover(function(){
				$(this).attr("href", "account.html");
				$(this).css("transform", "scale(1)");
			});
			$("#subcrible").text("Đăng xuất");
			$("#subcrible").attr("href","home.html");
		}
	}
});

$("#subcrible").click(function(){
	if($(this).text() === "Đăng xuất"){
		$.ajax({
			url: "module/function/logout.php",
			success: function(result){
			}
		});
	}
})