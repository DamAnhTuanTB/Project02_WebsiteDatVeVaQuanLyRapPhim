<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once('config.php');
	$name = addslashes($_POST["name"]);
	$date = addslashes($_POST["date"]);
	$telephone = addslashes($_POST["telephone"]);
	$email = addslashes($_POST["email"]);
	$password = md5(addslashes($_POST["password"]));
	$announce = "";
	$result = array(
		"telephone" => "",
		"email" => ""
	);
	$validate = true;
	if(mysqli_num_rows(mysqli_query($conn, "SELECT dien_thoai FROM thanh_vien WHERE dien_thoai = '$telephone'")) > 0){
		$result["telephone"] = "SĐT đã tồn tại.";
		$validate = false;
	}
	if(mysqli_num_rows(mysqli_query($conn, "SELECT email FROM thanh_vien WHERE email = '$email'")) > 0){
		$result["email"] = "Email đã tồn tại.";
		$validate = false;
	}
	if($validate){
		mysqli_query($conn, "INSERT INTO thanh_vien (ho_ten, ngay_sinh, dien_thoai, email, mat_khau) VALUES ('$name', '$date', '$telephone', '$email', '$password')");
		$_SESSION["name"] = $name;
		$_SESSION["email"] = $email;
	};
	mysqli_close($conn);
	die(json_encode($result));
?>
