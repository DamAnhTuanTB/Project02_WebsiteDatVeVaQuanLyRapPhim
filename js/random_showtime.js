
var time2dme = [
				["08:00", "15:00"],
				["09:00", "16:00"],
				["10:00", "17:00"],
				["11:00", "18:00"],
				["12:00", "19:00"],
				["13:00", "20:00"],
				["14:00", "21:00"]
			];
var time3dme = [
				["10:00", "17:00"],
				["11:00", "18:00"],
				["12:00", "19:00"],
				["13:00", "20:00"],
				["14:00", "21:00"],
				["15:00", "22:00"],
				["16:00", "23:00"]
			];

var time2D = [];
var time3D = [];

var phim = [];
var id = [];


// INSERT INTO `lich_chieu` (`ngay_chieu`, `id`, `ten_phim`, `gio_chieu`, `dinh_dang`, `ma_lich`)
// VALUES ('2020/06/01', '1', 'abc', '10:00', '2D', '123');

// ('2020-06-01/1/Avengers: End Game/19:30/2D', 'P10', 'A1', 'thuong', NULL),

var showtime = "INSERT INTO lich_chieu (ngay_chieu, id, ten_phim, gio_chieu, dinh_dang) VALUES ";

var choose_chair = "INSERT INTO dat_ghe (ma_lich, phong, ghe, loai_ghe, trang_thai_ghe, email) VALUES" 

var thanh_toan = "INSERT INTO hanh_trinh_dien_anh (email_thanh_vien, ma_ve, ma_hoa_don, phim, suat_chieu, ngay_dat, tien_ve, tien_diem_fantastic, tong_tien) VALUES";
									
var sttphong = 0;
var trangthaime = [   
					[null, 'daban', null, null,null,null,'daban'],
					[null, 'daban', 'daban', null,'daban',null,'daban'],
					[null, 'daban', 'daban', null,null,null,'daban'],
					[null, 'daban', null, null,'daban',null,null],
				];

for(let ppp=0; ppp<=2; ppp++){
	if (ppp == 0) {
		phim = ["Avengers: End Game", "Aquaman: Đế Vương Atlantis", "Quái Vật Venom","Inside Out: Những Mảnh Ghép Cảm Xúc"];
		id = [1,2,3,4];
	}else if (ppp == 1){
		phim = ["Chuyện Kinh Dị Lúc Nửa Đêm", "Mắt Biếc", "Doraemon: Nobita và Chuyến thám hiểm Mặt Trăng", "Avatar: Thế Thân"];
		id = [5,6,7,8];
	}else if (ppp == 2){
		phim = ["Nữ Hoàng Băng Giá 2","Vùng Đất Câm Lặng", "The Flash", "Fast and Furious"];
		id = [9,10,11,12];
	};
	for(let day=1; day<=13; day++){
		var p = Math.floor(Math.random()*4);
		var rd_trangthai = Math.floor(Math.random()*4);
		var trangthai = trangthaime[rd_trangthai];
		var d="";
		if(day<10) d = "0" + day;
		else d = day;

		var rd_2d = Math.floor(Math.random()*2);
		for(let _2dd=0; _2dd<= rd_2d; _2dd++){
			var _2d = _2dd;

			var index_time2d = Math.floor(Math.random()*7);
			time2d=time2dme[index_time2d];

			showtime += `('2020/10/${d}',${id[p]},'${phim[p]}','${time2d[_2d]}','2D'),`
			sttphong += 1;
			for(let a=1; a<=12; a++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheThuong(A${a})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} A${a}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 45000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;

					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','A${a}','thuong','${tt}','${email}'),`;
				}
				else choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','A${a}','thuong',${tt}, null),`
				

			}
			for(let b=1; b<=12; b++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheThuong(B${b})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} B${b}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 45000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','B${b}','thuong','${tt}','${email}'),`
				}
				else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','B${b}','thuong',${tt},null),`
			}
			for(let c=1; c<=12; c++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheThuong(C${c})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} C${c}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 45000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','C${c}','thuong','${tt}','${email}'),`
				}
				else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','C${c}','thuong',${tt},null),`
			}
			for(let dd=1; dd<=12; dd++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheVip(D${dd})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} D${dd}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 45000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','D${dd}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','D${dd}','vip',${tt}, null),`
			}
			for(let e=1; e<=11; e++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheVip(E${e})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} E${e}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 65000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
						choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','E${e}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','E${e}','vip',${tt},null),`
			}
			for(let f=1; f<=12; f++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheVip(F${f})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} F${f}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 65000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','F${f}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','F${f}','vip',${tt},null),`
			}

			for(let g=1; g<=10; g=g+2){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D/P${sttphong}/gheDoi(G${g}-G${g+1})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time2d[_2d]} P${sttphong} G${g}-G${g+1}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 100000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
						choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','G${g}-G${g+1}','doi','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time2d[_2d]}/2D','P${sttphong}','G${g}-G${g+1}','doi',${tt},null),`
			}
		}

		var rd_3d = Math.floor(Math.random()*2);
		for(let _3dd=0; _3dd<= rd_3d; _3dd++){
			var _3d = _3dd;

			var index_time3d = Math.floor(Math.random()*7);
			time3d=time3dme[index_time3d];

			showtime += `('2020/10/${d}',${id[p]},'${phim[p]}','${time3d[_3d]}','3D'),`
			sttphong += 1;
			for(let a=1; a<=12; a++){

				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheThuong(A${a})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} A${a}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 70000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','A${a}','thuong','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','A${a}','thuong',${tt},null),`
			}
			for(let b=1; b<=12; b++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheThuong(B${b})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} B${b}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 70000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','B${b}','thuong','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','B${b}','thuong',${tt},null),`
			}
			for(let c=1; c<=12; c++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheThuong(C${c})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} C${c}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 70000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','C${c}','thuong','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','C${c}','thuong',${tt},null),`
			}
			for(let dd=1; dd<=12; dd++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheVip(D${dd})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} D${dd}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 70000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','D${dd}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','D${dd}','vip',${tt},null),`
			}
			for(let e=1; e<=11; e++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheVip(E${e})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} E${e}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 90000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','E${e}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','E${e}','vip',${tt},null),`
			}
			for(let f=1; f<=12; f++){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheVip(F${f})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} F${f}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 90000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','F${f}','vip','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','F${f}','vip',${tt},null),`
			}

			for(let g=1; g<=10; g=g+2){
				let tt = trangthai[Math.floor(Math.random() * 7)];
				
				if (tt == 'daban'){
					let email = "_" + Math.floor(Math.random() * 4000 + 1) + "@gmail.com";
					//2020-06-01/1/Avengers: End Game/15:30/2D/P9/gheThuong(A5)
					let mave = `2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D/P${sttphong}/gheDoi(G${g}-G${g+1})`;
					let mahoadon = Math.floor(Math.random() * 10000000) + Math.floor(Math.random() * 10000000);
					let _phim = `${phim[p]}`;
					let suatchieu = `2020/10/${d} ${time3d[_3d]} P${sttphong} G${g}-G${g+1}`;
					let ngaydat = `2020/10/${d}`;
					let tienve = 160000;
					let tiendiem = tienve * 0.05;
					let tongtien = tienve;

					thanh_toan += `('${email}','${mave}','${mahoadon}','${_phim}','${suatchieu}','${ngaydat}','${tienve}','${tiendiem}','${tongtien}'),`;
					choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','G${g}-G${g+1}','doi','${tt}','${email}'),`
				}else
				choose_chair += `('2020-10-${d}/${id[p]}/${phim[p]}/${time3d[_3d]}/3D','P${sttphong}','G${g}-G${g+1}','doi',${tt},null),`
			}
		}

		sttphong -= 5;
	}
	sttphong += 5;
}

console.log(showtime);

console.log(choose_chair);

console.log(thanh_toan);