<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT MONTH(lc.ngay_chieu) as thang, SUM(htda.tong_tien) as tong_tien
			FROM lich_chieu lc
			JOIN hanh_trinh_dien_anh htda ON lc.ma_lich = htda.ma_lich 
			GROUP BY thang
			ORDER BY thang";
	$result = mysqli_query($conn, $sql);
	$arr = array();

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			$arr[] = array('thang' => $row['thang'],
							'tien' => $row['tong_tien']);
		}
	}

	$sql2 = "SELECT DISTINCT ngay_chieu FROM lich_chieu ORDER BY ngay_chieu DESC LIMIT 1";
	$result2 = mysqli_query($conn, $sql2);

	if(mysqli_num_rows($result2) > 0){
		while ($row = mysqli_fetch_assoc($result2)){ 
			$arr[] = array('max_day' => $row['ngay_chieu']);
		}
	}

	mysqli_close($conn);
	die(json_encode($arr));

?>