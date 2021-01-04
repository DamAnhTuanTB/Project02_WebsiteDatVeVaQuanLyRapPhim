<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');

	$arr = array();
	$arr["id"] = array();
	$arr["ten_phim"] = array();

	$sql1 = "SELECT id, ten_phim FROM phim";
	$result1 = mysqli_query($conn, $sql1);
	if(mysqli_num_rows($result1) > 0){
		while ($row = mysqli_fetch_assoc($result1)){ 
			array_push($arr["id"], $row["id"]);
			array_push($arr["ten_phim"], $row["ten_phim"]);
		}
	}

	mysqli_close($conn);
	die(json_encode($arr));

?>