$(document).ready(function(){
	var timer = setInterval(clock, 1000);
	var minute = 10;
	var second = 00;
	var str_minute = "";
	var str_second = "";
	function clock(){
		if(second == 0){
			second = 59;
			minute = minute - 1;
		}else{
			second = second - 1;
		}

		if(minute < 10){
			str_minute = "0" + minute.toString();
		}else{
			str_minute = minute;
		}

		if(second < 10){
			str_second = "0" + second.toString();
		}else{
			str_second = second;
		}
	    $("#minute").text(str_minute);
	    $("#second").text(str_second);

	    if(minute == 0 && second == 0){
	    	clearInterval(timer);
	    	alert("Đã hết thời gian cho phép. Vui lòng chọn lại khung giờ để tiến hành đặt vé.");
	    	location.assign("showtime.html");
	    }
	}
})