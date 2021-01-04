<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT (SELECT sum(doanh_thu_khach_hang.tien_da_tra) FROM doanh_thu_khach_hang WHERE YEAR(ngay_sinh) >= 2003) as '<18',
(SELECT sum(doanh_thu_khach_hang.tien_da_tra) FROM doanh_thu_khach_hang WHERE YEAR(ngay_sinh) >= 1996 AND YEAR(ngay_sinh) <= 2002) as '18-24',
(SELECT sum(doanh_thu_khach_hang.tien_da_tra) FROM doanh_thu_khach_hang WHERE YEAR(ngay_sinh) >= 1990 AND YEAR(ngay_sinh) <= 1995) as '25-30',
 (SELECT sum(doanh_thu_khach_hang.tien_da_tra) FROM doanh_thu_khach_hang WHERE YEAR(ngay_sinh) >= 1975 AND YEAR(ngay_sinh) <= 1989) as '31-45',
(SELECT sum(doanh_thu_khach_hang.tien_da_tra) FROM doanh_thu_khach_hang WHERE YEAR(ngay_sinh) <= 1974) as '>45' 
 FROM hanh_trinh_dien_anh LIMIT 1";

	$result = mysqli_query($conn, $sql);
	$arr = array();
	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			$arr[] = array('<18' => $row['<18'],
						    '18-24' => $row['18-24'],
							'25-30' => $row['25-30'],
							'31-45' => $row['31-45'],
							'>45' => $row['>45']);
		}
	}
	mysqli_close($conn);
	die(json_encode($arr));

?>