<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	if(isset($_COOKIE["name"])){
		$_SESSION["name"] = $_COOKIE["name"];
	}
	if(isset($_COOKIE["email"])){
		$_SESSION["email"] = $_COOKIE["email"];
	}
	if(isset($_SESSION["name"])){
		echo json_encode(array("name" => $_SESSION["name"]));
	}else{
		echo json_encode(array("not_login" => "true"));
	}
?>
