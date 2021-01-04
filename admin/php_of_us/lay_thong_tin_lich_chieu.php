<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');

	if(isset($_GET["id"])){
		$id = $_GET["id"];
		$sql = "SELECT ten_phim FROM phim WHERE id = '$id'";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) > 0){
			while ($row = mysqli_fetch_assoc($result)){ 
				echo $row["ten_phim"];
			}
		}
	}

	if(isset($_GET["ten_phim"])){
		$ten_phim = $_GET["ten_phim"];
		$sql = "SELECT id FROM phim WHERE ten_phim = '$ten_phim'";
		$result = mysqli_query($conn, $sql);
		if(mysqli_num_rows($result) > 0){
			while ($row = mysqli_fetch_assoc($result)){ 
				echo $row["id"];
			}
		}
	}
	

	mysqli_close($conn);

?>