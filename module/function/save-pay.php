<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");

	if(isset($_POST["ma_ve"])){
		$_SESSION["ma_ve"] = $_POST["ma_ve"];
	}
	if(isset($_POST["ten_phim"])){
		$_SESSION["ten_phim"] = $_POST["ten_phim"];
	}
	if(isset($_POST["suat_chieu"])){
		$_SESSION["suat_chieu"] = $_POST["suat_chieu"];
	}
	if(isset($_POST["ngay_dat"])){
		$_SESSION["ngay_dat"] = $_POST["ngay_dat"];
	}
	if(isset($_POST["ghe_vip"])){
		$_SESSION["ghe_vip"] = $_POST["ghe_vip"];
	}
	if(isset($_POST["ghe_thuong"])){
		$_SESSION["ghe_thuong"] = $_POST["ghe_thuong"];
	}
	if(isset($_POST["ghe_doi"])){
		$_SESSION["ghe_doi"] = $_POST["ghe_doi"];
	}
	if(isset($_POST["happy_combo"])){
		$_SESSION["happy_combo"] = $_POST["happy_combo"];
	}
	if(isset($_POST["sweet_combo"])){
		$_SESSION["sweet_combo"] = $_POST["sweet_combo"];
	}
	if(isset($_POST["fantastic_combo"])){
		$_SESSION["fantastic_combo"] = $_POST["fantastic_combo"];
	}
	if(isset($_POST["cac_ghe"])){
		$_SESSION["cac_ghe"] = $_POST["cac_ghe"];
	}
	

	$_SESSION["pay"] = 1;
?>