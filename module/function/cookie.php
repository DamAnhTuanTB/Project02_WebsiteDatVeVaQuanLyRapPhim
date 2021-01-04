<?php
	session_start();
	if(isset($_COOKIE["name"]) && isset($_COOKIE["email"])){
		$_SESSION["name"] = $_COOKIE["name"];
		$_SESSION["email"] = $_COOKIE["email"];
		die("success");
	}
?>