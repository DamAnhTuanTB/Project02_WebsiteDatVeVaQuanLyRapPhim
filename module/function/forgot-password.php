<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once('config.php');
	$telephone = addslashes($_POST["telephone"]);
	$email = addslashes($_POST["email"]);
	$password = md5(addslashes($_POST["password"]));
	$result = array(
		"error" => ""
	);
	$validate = true;
	if(mysqli_num_rows(mysqli_query($conn, "SELECT dien_thoai FROM thanh_vien WHERE dien_thoai = '$telephone' AND email = '$email'")) <= 0){
		$result["error"] = "SĐT và Email không trùng khớp.";
		$validate = false;
	}
	if($validate){
		mysqli_query($conn, "UPDATE thanh_vien SET mat_khau = '$password' WHERE dien_thoai = '$telephone' AND email = '$email'");
		$_result = mysqli_query($conn, "SELECT ho_ten, email FROM thanh_vien WHERE dien_thoai = '$telephone' AND email = '$email'");
		$row = mysqli_fetch_assoc($_result);
		$_SESSION["name"] = $row["ho_ten"];
		$_SESSION["email"] = $row["email"];

	};
	mysqli_close($conn);
	die(json_encode($result));
?>
