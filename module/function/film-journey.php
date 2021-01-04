<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$email = $_SESSION["email"];
	$arr = array();
	$sql = "SELECT ma_hoa_don, phim, suat_chieu, ngay_dat FROM hanh_trinh_dien_anh WHERE email_thanh_vien = '$email'";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)){
			array_push($arr, ["ma_hoa_don" => $row["ma_hoa_don"],
								"phim" => $row["phim"],
								"suat_chieu" => $row["suat_chieu"],
								"ngay_dat" => $row["ngay_dat"]
							 ]);
		}
	}
	mysqli_close($conn);
	die(json_encode($arr));
?>