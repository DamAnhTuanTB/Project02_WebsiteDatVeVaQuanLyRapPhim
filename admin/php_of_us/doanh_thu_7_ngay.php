<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT STR_TO_DATE(SUBSTRING(ngay_dat,1,10),'%Y/%m/%d') as thoi_gian_dat, SUM(tien_ve) as tien_ve
			FROM hanh_trinh_dien_anh 
			WHERE STR_TO_DATE(SUBSTRING(ngay_dat,1,10),'%Y/%m/%d') <= '2020-10-07'
			GROUP BY thoi_gian_dat
			ORDER BY thoi_gian_dat DESC
			LIMIT 7";
	$result = mysqli_query($conn, $sql);
	$arr = array();

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			$arr[] = array('ngay' => $row['thoi_gian_dat'],
							'tien' => $row['tien_ve']);
		}
	}
	mysqli_close($conn);
	die(json_encode($arr));

?>