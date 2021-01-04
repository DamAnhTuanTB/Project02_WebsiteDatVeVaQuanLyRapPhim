<?php

	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$arr = array();
	$ma_giam_gia = $_POST["ma_giam_gia"];
	$sql = "SELECT tien_duoc_giam FROM ma_giam_gia WHERE ma = '$ma_giam_gia' AND NOW() >= ngay_bat_dau AND NOW() <= ngay_ket_thuc";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result) > 0){
		$row = mysqli_fetch_assoc($result);
		$arr["tien_duoc_giam"] = $row["tien_duoc_giam"];
	}else{
		$arr["phan_hoi"] = "Mã giảm giá không hợp lệ.";
	}
	echo json_encode($arr);

?>