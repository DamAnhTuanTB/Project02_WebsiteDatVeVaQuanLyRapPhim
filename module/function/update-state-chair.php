<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$ma_lich = $_POST["ma_lich"];
	$email = $_SESSION["email"];
	$ghe = $_POST["ghe"];
	if(isset($_POST["xoa_ghe_dang_giu"])){
		mysqli_query($conn, "UPDATE dat_ghe SET trang_thai_ghe=NULL, email=NULL WHERE ma_lich = '$ma_lich' AND ghe='$ghe'");
	}
	if(isset($_POST["them_ghe_dang_giu"])){
		mysqli_query($conn, "UPDATE dat_ghe SET trang_thai_ghe='danggiu', email = '$email' WHERE ma_lich = '$ma_lich' AND ghe='$ghe'");
	}

	if(isset($_POST["xoa_tat_ca_ghe_dang_giu"])){
		mysqli_query($conn, "UPDATE dat_ghe SET trang_thai_ghe=NULL, email=NULL WHERE trang_thai_ghe = 'danggiu' AND email='$email'");
	}

?>