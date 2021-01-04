<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");

	$ten_phim ="";
	if(isset($_POST["ten_phim"])){
		$ten_phim = $_POST["ten_phim"];
	}
	$days = mysqli_query($conn, "SELECT DISTINCT ngay_chieu FROM lich_chieu WHERE ten_phim = '$ten_phim'");
	$result = array();
	if(mysqli_num_rows($days) > 0){
		while($_day = mysqli_fetch_assoc($days)){
			$day = $_day["ngay_chieu"];
			$result[$day] = array();

			$times2D = mysqli_query($conn, "SELECT gio_chieu FROM lich_chieu WHERE ten_phim = '$ten_phim' AND dinh_dang = '2D' AND ngay_chieu = '$day'"); 
			if(mysqli_num_rows($times2D) > 0){
				   	$result[$day]["2D"] = array();
					while($time2D = mysqli_fetch_assoc($times2D)){
						array_push($result[$day]["2D"], $time2D["gio_chieu"]);
					}
			}

			$times3D = mysqli_query($conn, "SELECT gio_chieu FROM lich_chieu WHERE ten_phim = '$ten_phim' AND dinh_dang = '3D' AND ngay_chieu = '$day'"); 
			if(mysqli_num_rows($times3D) > 0){
				   	$result[$day]["3D"] = array();
					while($time3D = mysqli_fetch_assoc($times3D)){
						array_push($result[$day]["3D"], $time3D["gio_chieu"]);
					}
			}
		}
	}
	mysqli_close($conn);
	die(json_encode($result));
	

/*
	if(isset($_SESSION["name"])){
		$email = $_SESSION["email"];
		echo "success";
		$_SESSION["choose_chair"] = 1;

		if(isset($_POST["showtime"])){
			$_SESSION["showtime"] = $_POST["showtime"];
		}
		if(isset($_POST["film"])){
			$_SESSION["ten_phim"] = $_POST["film"];
		}
		if(isset($_POST["time"])){
			$_SESSION["gio_chieu"] = $_POST["time"];
		}
		if(isset($_POST["day"])){
			$_SESSION["ngay_chieu"] = $_POST["day"];
		}
		if(isset($_POST["format"])){
			$_SESSION["dinh_dang"] = $_POST["format"];
		}
	}
	else{
		echo "fail";
	} */

?>