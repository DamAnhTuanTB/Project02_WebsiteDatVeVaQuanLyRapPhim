<?php  
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	$_SESSION["ten_tin"] = $_POST["ten_tin"];
	die("success");
?>