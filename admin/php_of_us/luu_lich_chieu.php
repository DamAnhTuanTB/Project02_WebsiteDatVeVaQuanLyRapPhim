<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	$ngay_chieu = $_GET["ngay_chieu"];
	$id = $_GET["id"];
	$ten_phim = $_GET["ten_phim"];
	$gio_chieu = $_GET["gio_chieu"];
	$dinh_dang = $_GET["dinh_dang"];
	$ma_lich = $_GET["ma_lich"];

	$sql = "INSERT INTO lich_chieu (ngay_chieu, id, ten_phim, gio_chieu, dinh_dang, ma_lich)
			VALUES ('$ngay_chieu', '$id', '$ten_phim', '$gio_chieu', '$dinh_dang', '$ma_lich')";
	$result = mysqli_query($conn, $sql);
	if($result){
		echo "Đã thêm lịch chiếu thành công. Phòng chiếu đã được hệ thống xử lý và chọn tự động.";
	}else{
		echo "Lịch chiếu đã tồn tại hoặc không phù hợp. Vui lòng kiểm tra lại lịch chiếu vừa tạo.";
	}

	mysqli_close($conn);

?>