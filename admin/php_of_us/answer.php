<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "";
	if($_POST["question"] == "1"){
		$sql = "SELECT COUNT(*) as kq FROM thanh_vien";
	}else if($_POST["question"] == "2"){
		$sql = "SELECT email as kq FROM doanh_thu_khach_hang ORDER BY so_lan_thanh_toan DESC LIMIT 1";
	}else if($_POST["question"] == "3"){
		$sql = "SELECT email as kq FROM doanh_thu_khach_hang ORDER BY tien_da_tra DESC LIMIT 1";
	}else if($_POST["question"] == "4"){
		$sql="SELECT COUNT(*) as kq FROM doanh_thu_khach_hang WHERE so_lan_thanh_toan >= 2";
	}else{
		die("Kết quả sẽ hiển thị ở đây");
	}
	
	$result = mysqli_query($conn, $sql);
	

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			echo $row["kq"];
		}
	}
	mysqli_close($conn);

?>