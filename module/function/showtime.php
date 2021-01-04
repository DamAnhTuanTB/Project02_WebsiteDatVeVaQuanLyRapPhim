<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	$days = mysqli_query($conn, "SELECT DISTINCT ngay_chieu FROM lich_chieu WHERE ngay_chieu >= '2020-10-7'");
	$result = array();
	if(mysqli_num_rows($days) > 0){
		while ($_day = mysqli_fetch_assoc($days)){ 
			$day = $_day["ngay_chieu"];
			$result[$day] = array();
			$films = mysqli_query($conn, "SELECT DISTINCT ten_phim FROM lich_chieu WHERE ngay_chieu = '$day'");
			while($_film = mysqli_fetch_assoc($films)){ 

				$film = $_film["ten_phim"];
				$result[$day][$film] = array();

				$id = mysqli_query($conn, "SELECT id FROM phim WHERE ten_phim = '$film'");
				if(mysqli_num_rows($id) > 0){
					$id = mysqli_fetch_assoc($id);
					$result[$day][$film]["id"] = $id["id"];
				}

				$image = mysqli_query($conn, "SELECT anh FROM phim WHERE ten_phim = '$film'");
				if(mysqli_num_rows($image) > 0){
					$anh = mysqli_fetch_assoc($image);
					$result[$day][$film]["anh"] = $anh["anh"];
				}

				$times2D = mysqli_query($conn, "SELECT gio_chieu FROM lich_chieu WHERE ten_phim = '$film' AND dinh_dang = '2D' AND ngay_chieu = '$day'"); 
				if(mysqli_num_rows($times2D) > 0){
				   	$result[$day][$film]["2D"] = array();
					while($time2D = mysqli_fetch_assoc($times2D)){
						array_push($result[$day][$film]["2D"], $time2D["gio_chieu"]);
					}
				}
				
				$times3D = mysqli_query($conn, "SELECT gio_chieu FROM lich_chieu WHERE ten_phim = '$film' AND dinh_dang = '3D' AND ngay_chieu = '$day'");
				if(mysqli_num_rows($times3D) > 0){
					$result[$day][$film]["3D"] = array();
					while($time3D = mysqli_fetch_assoc($times3D)){
						array_push($result[$day][$film]["3D"], $time3D["gio_chieu"]);
					}
				}
			}
		}
	}
	mysqli_close($conn);
	die(json_encode($result));

?>