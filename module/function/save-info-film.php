<?php 
// Trang lưu tên phim khi người dùng click vào tên phim
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	$_SESSION["ten_phim"] = $_POST["ten_phim"];
	die("success");
?>