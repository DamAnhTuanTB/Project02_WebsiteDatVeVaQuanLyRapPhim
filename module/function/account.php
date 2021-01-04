<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$name = addslashes($_SESSION["name"]);
	$email = addslashes($_SESSION["email"]);
	$result = array(
		"name" => "",
		"date" => "",
		"address" => "",
		"card" => "",
		"telephone" => "",
		"email" => ""
	);
	$sql = "SELECT ho_ten, ngay_sinh, dia_chi, cmnd_hc, dien_thoai, email FROM thanh_vien WHERE email = '$email'";
	$_result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($_result) > 0){
		$row = mysqli_fetch_assoc($_result);
			$result["name"] = $row["ho_ten"];
			$result["date"] = $row["ngay_sinh"];
			$result["address"] = $row["dia_chi"];
			$result["card"] = $row["cmnd_hc"];
			$result["telephone"] = $row["dien_thoai"];
			$result["email"] = $row["email"];
	}
	mysqli_close($conn);
	die(json_encode($result));
?>