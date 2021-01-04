<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	if(isset($_POST["xem_diem"])){
		$email = addslashes($_SESSION["email"]);
		$result = mysqli_query($conn, "SELECT diem_fantastic FROM thanh_vien WHERE email = '$email'");
		$row = mysqli_fetch_assoc($result);
		die($row["diem_fantastic"]);
	}	

	if(isset($_POST["su_dung_diem"])){
		$email = addslashes($_SESSION["email"]);
		$result = mysqli_query($conn, "SELECT diem_fantastic FROM thanh_vien WHERE email = '$email'");
		$row = mysqli_fetch_assoc($result);
		$_SESSION["tien_giam_diem_fantastic"] = $row["diem_fantastic"];
		die ($row["diem_fantastic"]);
	}
?>