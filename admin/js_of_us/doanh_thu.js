
doanh_thu_7_ngay();
setInterval(doanh_thu_7_ngay, 600000);
function doanh_thu_7_ngay(){
	$.ajax({
		url: "php_of_us/doanh_thu_7_ngay.php",
		method: "post",
		dataType:"json",
		success: function(result){
			var ngay = result.map(function(value, index){
				return value['ngay'];
			})
			ngay = ngay.reverse();
			var tien = result.map(function(value, index){
				return value['tien'];
			});
			tien = tien.reverse();

			var lineChartData1 = {
				labels : ngay,
				datasets : [
					{
						label: "My dataset 1",
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 1)",
						pointColor : "rgba(48, 164, 255, 1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(48, 164, 255, 1)",
						data : tien
					}
				]	
			}
			var chart1 = document.getElementById("line-chart1").getContext("2d");
			window.myLine = new Chart(chart1).Line(lineChartData1, {
				responsive: true,
				scaleLineColor: "rgba(0,0,0,.2)",
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleFontColor: "#0060FF"
			});
			
		}
	})
}


doanh_thu_phim_dang_chieu();
setInterval(doanh_thu_phim_dang_chieu, 600000);
function doanh_thu_phim_dang_chieu(){
	$.ajax({
		url:"php_of_us/doanh_thu_phim_dang_chieu.php",
		method: "post",
		dataType: "json",
		success: function(result){
			console.log(result);
			var phim = result.map(function(value, index){
				return value["phim"];
			});
			
			var tien_von = result.map(function(value, index){
				return value["tien_von"];
			})
			var tong_tien = result.map(function(value, index){
				return value["tong_tien"];
			});

 			barChartData = {
				labels : phim,
				datasets : [
					{
						fillColor : "rgba(220,220,220)",
						strokeColor : "rgba(220,220,220,0.8)",
						highlightFill: "rgba(220,220,220,0.75)",
						highlightStroke: "rgba(220,220,220,1)",
						data : tien_von
					},
										{
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 0.8)",
						highlightFill : "rgba(48, 164, 255, 0.75)",
						highlightStroke : "rgba(48, 164, 255, 1)",
						data : tong_tien
					}
				]
			}
			var chart2 = document.getElementById("bar-chart").getContext("2d");
			window.myBar = new Chart(chart2).Bar(barChartData, {
				responsive: true,
				scaleLineColor: "rgba(0,0,0,.2)",
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleFontColor: "#0060FF"
			});

		}
	})
}

doanh_thu_theo_thang();
function doanh_thu_theo_thang(){
	$.ajax({
		url: "php_of_us/doanh_thu_theo_thang.php",
		method: "post",
		dataType:"json",
		success: function(result){
			console.log(result);
			var thang = result.map(function(value, index){
				return "Tháng " + value["thang"] + " năm 2020";
			});
			

			var tien = result.map(function(value, index){
				return value["tien"];
			});

			console.log(thang);
			console.log(tien);
			thang.pop();
			tien.pop();

			thang[thang.length-1] = result[result.length-1]["max_day"];
			console.log(thang);
			console.log(tien);
			
			var lineChartData2 = {
				labels : thang,
				datasets : [
					{
						label: "My dataset 2",
						fillColor : "rgba(48, 164, 255, 0.2)",
						strokeColor : "rgba(48, 164, 255, 1)",
						pointColor : "rgba(48, 164, 255, 1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(48, 164, 255, 1)",
						data : tien
					}
				]	
			}
			var chart2 = document.getElementById("line-chart2").getContext("2d");
			window.myLine = new Chart(chart2).Line(lineChartData2, {
				responsive: true,
				scaleLineColor: "rgba(0,0,0,.2)",
				scaleGridLineColor: "rgba(0,0,0,.05)",
				scaleFontColor: "#0060FF"
			});
		}
	}).always(function(result){
		console.log(result);
	});
}


doanh_thu_theo_do_tuoi();
function doanh_thu_theo_do_tuoi(){
	$.ajax({
		url: "php_of_us/doanh_thu_do_tuoi.php",
		method: "post",
		dataType:"json",
		success: function(result){
			let a = Number(result[0]["<18"]);
			let b = Number(result[0]["18-24"]);
			let c = Number(result[0]["25-30"]);
			let d = Number(result[0]["31-45"]);
			let e = Number(result[0][">45"]);
			var pieData = [
			{
				value: a,
				color:"#30a5ff",
				highlight: "#62b9fb",
				label: "<18 tuổi"
			},
			{
				value: b,
				color: "#ffb53e",
				highlight: "#fac878",
				label: "18-24 tuổi"
			},
			{
				value: c,
				color: "#1ebfae",
				highlight: "#3cdfce",
				label: "25-30 tuổi"
			},
			{
				value: d,
				color: "#f9243f",
				highlight: "#f6495f",
				label: "31-45 tuổi"
			},
			{
				value: e,
				color: "green",
				highlight: "#03B003",
				label: ">45 tuổi"
			}

			];
			var chart4 = document.getElementById("pie-chart").getContext("2d");
			window.myPie = new Chart(chart4).Pie(pieData, {
			responsive: true,
			segmentShowStroke: false
			});
		}
	});
}

doanh_thu_theo_the_loai();
function doanh_thu_theo_the_loai(){
	$.ajax({
		url: "php_of_us/doanh_thu_the_loai.php",
		method: "post",
		dataType:"json",
		success: function(result){
			let a = Number(result[0]["hanh_dong"]);
			let b = Number(result[0]["phieu_luu"]);
			let c = Number(result[0]["vien_tuong"]);
			let d = Number(result[0]["hoat_hinh"]);
			let e = Number(result[0]["lang_man"]);
			let f = Number(result[0]["kinh_di"]);
			var doughnutData = [
			{
				value: a,
				color:"#30a5ff",
				highlight: "#62b9fb",
				label: "Hành động"
			},
			{
				value: b,
				color: "#ffb53e",
				highlight: "#fac878",
				label: "Phiêu lưu"
			},
			{
				value: c,
				color: "#1ebfae",
				highlight: "#3cdfce",
				label: "Viễn tưởng"
			},
			{
				value: d,
				color: "#f9243f",
				highlight: "#f6495f",
				label: "Hoạt hình"
			},
			{
				value: e,
				color: "#780080",
				highlight: "#D152CD",
				label: "Lãng mạn"
			},
			{
				value: f,
				color: "green",
				highlight: "#03B003",
				label: "Kinh dị"
			}

			];
			var chart3 = document.getElementById("doughnut-chart").getContext("2d");
			window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {
			responsive: true,
			segmentShowStroke: false
			});
		}
	});
}


  