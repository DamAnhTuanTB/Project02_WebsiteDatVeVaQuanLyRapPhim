<?php
	session_start();
    header('Content-Type: text/html; charset=UTF-8');
    include_once("config.php");
    $email = addslashes($_POST["email"]);
    $password = md5(addslashes($_POST["password"]));
    $remember_me = addslashes($_POST["remember_me"]);
    $result = mysqli_query($conn, "SELECT ho_ten, email, mat_khau FROM thanh_vien WHERE email = '$email' AND mat_khau = '$password'");
    if(mysqli_num_rows($result) > 0){
		$row = mysqli_fetch_assoc($result);
		$_SESSION["name"] = $row["ho_ten"];
		$_SESSION["email"] = $row["email"];
		if($remember_me === "true"){
			setcookie("name", $row["ho_ten"], time() + 3600*24);
			setcookie("email", $row["email"], time() + 3600*24);
		}
		die("success");
	}else{
		die("Tên đăng nhập hoặc mật khẩu không đúng.");
	}
	mysqli_close($conn);
?>
