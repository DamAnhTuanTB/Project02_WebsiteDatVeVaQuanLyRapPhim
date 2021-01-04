<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");

	if(!isset($_SESSION["name"])){
		die(json_encode(["login" => "false"]));
	}

	if(!isset($_SESSION["pay"])){
		die(json_encode(["pay" => "false"]));
	}

	$email_thanh_vien = $_SESSION["email"];
	$ghe_ngoi = $_SESSION["cac_ghe"];
	$ma_lich = $_SESSION["showtime"];
	$arr = array();
	$arr = explode(' ', $ghe_ngoi);
	foreach($arr as $ghe){
		mysqli_query($conn, "UPDATE dat_ghe SET trang_thai_ghe='danggiu', email='$email_thanh_vien' WHERE ma_lich = '$ma_lich' AND ghe='$ghe'");
	}


	$_SESSION["tien_giam_ma_giam_gia"] = 0;
	$_SESSION["tien_giam_diem_fantastic"] = 0;
	$arr = array();
	$ho_ten = $_SESSION["name"];
	$arr["ho_ten"] = $ho_ten;
	$sql1 = "SELECT ngay_sinh, dien_thoai, email FROM thanh_vien WHERE ho_ten = '$ho_ten'";
	$result1 = mysqli_query($conn, $sql1);
	if(mysqli_num_rows($result1) > 0){
		while($row = mysqli_fetch_assoc($result1)){
			$arr["ngay_sinh"] = $row["ngay_sinh"];
			$arr["dien_thoai"] = $row["dien_thoai"];
			$arr["email"] = $row["email"];
		}
	}

	$ghe_vip = $_SESSION["ghe_vip"];
	$ghe_thuong = $_SESSION["ghe_thuong"];
	$ghe_doi = $_SESSION["ghe_doi"];

	$happy_combo = $_SESSION["happy_combo"];
	$sweet_combo = $_SESSION["sweet_combo"];
	$fantastic_combo = $_SESSION["fantastic_combo"];

	$loai_phong = $_SESSION["dinh_dang"];


	$arr["ghe_thuong"] = array();
	$arr["ghe_thuong"]["so_luong"] = $ghe_thuong;
	$don_gia_ghe_thuong = mysqli_query($conn, "SELECT gia_ghe FROM don_gia_ghe WHERE loai_ghe = 'thuong' AND loai_phong = '$loai_phong'");
	$row = mysqli_fetch_assoc($don_gia_ghe_thuong);
	$arr["ghe_thuong"]["don_gia"]  = $row["gia_ghe"];
	$_SESSION["gia_ghe_thuong"] = $row["gia_ghe"];
	
	
	$arr["ghe_vip"] = array();
	$arr["ghe_vip"]["so_luong"] = $ghe_vip;
	$don_gia_ghe_vip = mysqli_query($conn, "SELECT gia_ghe FROM don_gia_ghe WHERE loai_ghe = 'vip' AND loai_phong = '$loai_phong'");
	$row = mysqli_fetch_assoc($don_gia_ghe_vip);
	$arr["ghe_vip"]["don_gia"]  = $row["gia_ghe"];
	$_SESSION["gia_ghe_vip"] = $row["gia_ghe"];
	
	
	$arr["ghe_doi"] = array();
	$arr["ghe_doi"]["so_luong"] = $ghe_doi;
	$don_gia_ghe_doi = mysqli_query($conn, "SELECT gia_ghe FROM don_gia_ghe WHERE loai_ghe = 'doi' AND loai_phong = '$loai_phong'");
	$row = mysqli_fetch_assoc($don_gia_ghe_doi);
	$arr["ghe_doi"]["don_gia"]  = $row["gia_ghe"];
	$_SESSION["gia_ghe_doi"] = $row["gia_ghe"];
	
	
	$arr["happy_combo"] = array();
	$arr["happy_combo"]["so_luong"] = $happy_combo;
	$don_gia_happy_combo = mysqli_query($conn, "SELECT gia_do_an FROM don_gia_do_an WHERE ten_combo = 'Happy Combo'");
	$row = mysqli_fetch_assoc($don_gia_happy_combo);
	$arr["happy_combo"]["don_gia"]  = $row["gia_do_an"];
	$_SESSION["gia_happy_combo"] = $row["gia_do_an"];
	
	
	$arr["sweet_combo"] = array();
	$arr["sweet_combo"]["so_luong"] = $sweet_combo;
	$don_gia_sweet_combo = mysqli_query($conn, "SELECT gia_do_an FROM don_gia_do_an WHERE ten_combo = 'sweet Combo'");
	$row = mysqli_fetch_assoc($don_gia_sweet_combo);
	$arr["sweet_combo"]["don_gia"]  = $row["gia_do_an"];
	$_SESSION["gia_sweet_combo"] = $row["gia_do_an"];
	
	
	$arr["fantastic_combo"] = array();
	$arr["fantastic_combo"]["so_luong"] = $fantastic_combo;
	$don_gia_fantastic_combo = mysqli_query($conn, "SELECT gia_do_an FROM don_gia_do_an WHERE ten_combo = 'fantastic Combo'");
	$row = mysqli_fetch_assoc($don_gia_fantastic_combo);
	$arr["fantastic_combo"]["don_gia"]  = $row["gia_do_an"];
	$_SESSION["gia_fantastic_combo"] = $row["gia_do_an"];

	$arr["dinh_dang"] = $loai_phong;

	echo json_encode($arr);
	
?>