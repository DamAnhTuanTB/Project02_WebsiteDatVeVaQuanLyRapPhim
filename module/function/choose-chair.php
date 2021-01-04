<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");

	if(!isset($_SESSION["name"])){
		die(json_encode(["login" => "false"]));
	}

	if(!isset($_SESSION["choose_chair"])){
		die(json_encode(["choose_chair" => "false"]));
	}


	$arr = array();
	if(isset($_SESSION["showtime"])){
		$showtime = $_SESSION["showtime"];
		$arr["chair"] = array();
		$arr["chair"]["thuong"] = array();	
		$arr["chair"]["vip"] = array();
		$arr["chair"]["doi"] = array();
		$arr["do_an"] = array();
		$arr["ten_phim"] = $_SESSION["ten_phim"];
		$arr["gio_chieu"] = $_SESSION["gio_chieu"];
		$arr["ngay_chieu"] = $_SESSION["ngay_chieu"];
		$arr["dinh_dang"] = $_SESSION["dinh_dang"];
		$ten_phim = $_SESSION["ten_phim"];
		$arr["ma_lich"] = $_SESSION["showtime"];

		$sql0 = "SELECT the_loai, ngon_ngu, thoi_luong, anh FROM phim WHERE ten_phim = '$ten_phim'";
		$result0 = mysqli_query($conn, $sql0);
		if(mysqli_num_rows($result0) > 0){
			while($row = mysqli_fetch_assoc($result0)){
				$arr["the_loai"] = $row["the_loai"];
				$arr["ngon_ngu"] = $row["ngon_ngu"];
				$arr["thoi_luong"] = $row["thoi_luong"];
				$arr["anh"] = $row["anh"];
			}
		}

		$sql1 = "SELECT phong, ghe, trang_thai_ghe FROM dat_ghe WHERE ma_lich = '$showtime' AND loai_ghe='thuong'";
		$result1 = mysqli_query($conn, $sql1);
		if(mysqli_num_rows($result1) > 0){
			while($row = mysqli_fetch_assoc($result1)){
				$arr["phong"] = $row["phong"];
				$chair = array("ghe" => $row["ghe"], "trang_thai_ghe" => $row["trang_thai_ghe"]);
				array_push($arr["chair"]["thuong"], $chair);
			}
		};

		$sql2 = "SELECT phong, ghe, trang_thai_ghe FROM dat_ghe WHERE ma_lich = '$showtime' AND loai_ghe='vip'";
		$result2 = mysqli_query($conn, $sql2);
		if(mysqli_num_rows($result2) > 0){
			while($row = mysqli_fetch_assoc($result2)){
				$arr["phong"] = $row["phong"];
				$chair = array("ghe" => $row["ghe"], "trang_thai_ghe" => $row["trang_thai_ghe"]);
				array_push($arr["chair"]["vip"], $chair);
			}
		};

		$sql3 = "SELECT phong, ghe, trang_thai_ghe FROM dat_ghe WHERE ma_lich = '$showtime' AND loai_ghe='doi'";
		$result3 = mysqli_query($conn, $sql3);
		if(mysqli_num_rows($result3) > 0){
			while($row = mysqli_fetch_assoc($result3)){
				$arr["phong"] = $row["phong"];
				$chair = array("ghe" => $row["ghe"], "trang_thai_ghe" => $row["trang_thai_ghe"]);
				array_push($arr["chair"]["doi"], $chair);
			}
		};

		$sql4 = "SELECT ten_combo, mo_ta, gia_do_an FROM don_gia_do_an";
		$result4 = mysqli_query($conn, $sql4);
		if(mysqli_num_rows($result4) > 0){
			
			while($row = mysqli_fetch_assoc($result4)){
				$do_an = array("ten_combo" => $row["ten_combo"], "mo_ta" => $row["mo_ta"], "gia" => $row["gia_do_an"]);
				array_push($arr["do_an"], $do_an);
			}
		}
		echo json_encode($arr);
	};
?>