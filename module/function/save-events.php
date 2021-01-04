<?php  
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	$_SESSION["ten_event"] = $_POST["ten_event"];
	die("success");
?>