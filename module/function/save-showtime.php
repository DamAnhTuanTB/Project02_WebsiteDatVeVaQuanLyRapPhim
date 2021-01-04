<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");


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
	}
?>