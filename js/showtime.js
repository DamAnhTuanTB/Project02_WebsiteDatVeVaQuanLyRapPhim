$('.carousel').carousel({
    interval: 3000
});
$("body").on("click", ".nav-tabs .nav-item", function(){
	$(this).siblings().removeClass('click-active');
	$(this).addClass('click-active');
});
$("body").on("click", ".showtime img", function(){
	location.assign("movies-playing.html");
})
$.ajax({
	url: "module/function/showtime.php",
	type: "post",
	dataType: "json",
	success: function(result){
		console.log(result);
		let id = 0;
		$.each(result, (day, films) => {
			let _day = day;
			id++;
			let nav_item = "";
			day = day.replace(/(\w+)\-(\w+)\-(\w+)/,'$3/$2-$1').replace(/\-\w+$/, "");
			if(id===1){
				nav_item =
					`<li class="nav-item  click-active">
		                <a class="nav-link active" id="_${id}-tab" data-toggle="tab" href="#_${id}" role="tab" aria-controls="_${id}" aria-selected="true">${day}</a>
		             </li>`;
			}else{
				nav_item =
					`<li class="nav-item">
		                <a class="nav-link" id="_${id}-tab" data-toggle="tab" href="#_${id}" role="tab" aria-controls="_${id}" aria-selected="true">${day}</a>
		             </li>`;
			};
            $(".nav-tabs").append(nav_item);
            let tab_pane = "";
            if(id===1){
            	   tab_pane = `<div class="tab-pane fade show active" id="_${id}" role="tabpanel" aria-labelledby="_${id}-tab">
            					 <div class="text-center">
                        			<h2 class="title">LỊCH CHIẾU PHIM</h2>
                    			 </div>`;
            }else{
            	   tab_pane = `<div class="tab-pane fade" id="_${id}" role="tabpanel" aria-labelledby="_${id}-tab">
            					 <div class="text-center">
                        			<h2 class="title">LỊCH CHIẾU PHIM</h2>
                    			 </div>`;
            };
            $.each(films, (film, format) => {
            		let id = format["id"];
            		tab_pane +=
            		`<div class="showtime">
                        <div class="image">
                            <img src="${format["anh"]}" alt="">
                        </div>
                        <div class="date-time">
                            <div class="name-film">${film}</div>
                            <div class="time">
                                <ul class="nav">
                     `;
                     if(format.hasOwnProperty("2D")){
	                     	tab_pane += `<div id="_2d" class="text-center px-4 py-2">
	                                        <div><h1>2D</h1></div>
	                                        <div>
	                                `;
                     	format["2D"].forEach((time, index) => {
                     			let showtime = _day + "/" + id + "/" +  film.toString() + "/" + time.toString() + "/" + "2D";
                     			showtime = showtime.replace(/\s/g, "");
                     			film = film.replace(/\s/g, "");
	                     		tab_pane +=         `<li class="nav-item">
	                                                <a class="nav-link active" href="choose-chair.html" showtime=${showtime} film=${film} day=${_day} format="2D">${time}</a>
	                                            </li>
	                                    `;
                     	});
	                     	tab_pane +=         `</div>
	                     			</div>`;	
                     };
                      if(format.hasOwnProperty("3D")){
	                     	tab_pane += `<div id="_3d" class="text-center px-4 py-2">
	                                        <div><h1>3D</h1></div>
	                                        <div>
	                                `;
                     	format["3D"].forEach((time, index) => {
                     			let showtime = _day + "/" + id + "/" +  film.toString() + "/" + time.toString() + "/" + "3D";
                     			showtime = showtime.replace(/\s/g, "");
                     			film = film.replace(/\s/g, "");
	                     		tab_pane +=         `<li class="nav-item">
	                                                <a class="nav-link active" href="choose-chair.html" showtime=${showtime} film=${film} day=${_day} format="3D">${time}</a>
	                                            </li>
	                                    `;
                     	});
	                     	tab_pane +=         `</div>
	                     			</div>`;	
                     };
                     tab_pane +=  `</ul>
                            </div>
                        </div>
                     </div>`;
			});
				tab_pane += "</div>";
            	$(".tab-content").append(tab_pane);
		});
	}
});
$(document).on("click", ".time .nav-link", function(){
	let showtime = $(this).attr("showtime").toString();
	let film = $(this).attr("film").toString();
	let time = $(this).text();
	let day = $(this).attr("day").toString();
	let format = $(this).attr("format").toString();
	showtime = showtime.replace(/[A-Z]|Đ|Ô|Ư|Ê/g, function(result){
		return " " + result;
	});
	showtime = showtime.replace(/ D$/g, "D");
	showtime = showtime.replace(/\/ /,"/");
	film = film.replace(/[A-Z]|Đ|Ô|Ư|Ê/g, function(result){
		return " " + result;
	});
	console.log(showtime);

	
	film = film.trim();
	$.ajax({
		url: "module/function/save-showtime.php",
		type: "post",
		dataType: "text",
		data:{
			showtime: showtime,
			film: film,
			time: time,
			day: day,
			format: format
		},
		success: function(result){
			if(result === "fail"){
				alert("Vui lòng đăng nhập để tiến hành đặt vé.");
				location.assign("login.html");
			}else if(result === "success"){
				location.assign("choose-chair.html");
			}
		}
	});
	return false;
});
