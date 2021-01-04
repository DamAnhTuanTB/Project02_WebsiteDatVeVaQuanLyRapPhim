<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$name = addslashes($_POST["name"]);
	$date = addslashes($_POST["date"]);
	$address = addslashes($_POST["address"]);
	$card = addslashes($_POST["card"]);
	$telephone = addslashes($_POST["telephone"]);
	$email = addslashes($_POST["email"]);
	$sql = "UPDATE thanh_vien SET ho_ten = '$name', ngay_sinh = '$date', dia_chi = '$address', cmnd_hc = '$card', dien_thoai = '$telephone' WHERE email = '$email'";
	$result = mysqli_query($conn, $sql);
	if($result){
		$_SESSION["name"] = $name;
		die("Cập nhật thành công.");
	}
	die("");
	mysqli_close($conn);
?>