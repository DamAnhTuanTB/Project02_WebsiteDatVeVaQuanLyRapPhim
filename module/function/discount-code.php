<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$arr = array();

	$ma_giam_gia = addslashes($_POST["ma_giam_gia"]);
	$email = $_SESSION["email"];

	$sql0 = "SELECT ma_giam_gia FROM thanh_vien_da_su_dung_ma_giam_gia WHERE email = '$email' AND ma_giam_gia = '$ma_giam_gia'";
	$result0 = mysqli_query($conn, $sql0);


	if(mysqli_num_rows($result0) <= 0){
		$sql = "SELECT tien_duoc_giam FROM ma_giam_gia WHERE ma = '$ma_giam_gia' AND NOW() >= ngay_bat_dau AND NOW() <= ngay_ket_thuc";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) > 0){
			$row = mysqli_fetch_assoc($result);
			$arr["tien_duoc_giam"] = $row["tien_duoc_giam"];
			$_SESSION["tien_giam_ma_giam_gia"] += $row["tien_duoc_giam"];
			mysqli_query($conn, "INSERT INTO thanh_vien_da_su_dung_ma_giam_gia (email, ma_giam_gia) VALUES
				('$email', '$ma_giam_gia')");
		}else{
			$arr["loi"] = "Mã giảm giá không hợp lệ.";
		}
	}else{
		$arr["loi"] = "Mã giảm giá đã được dùng.";
	}
	echo json_encode($arr);

?>