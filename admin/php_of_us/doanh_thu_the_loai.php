<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT 
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Hành động%') as hanh_dong,
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Phiêu lưu%') as phieu_luu,
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Viễn tưởng%') as vien_tuong,
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Hoạt hình%') as hoat_hinh,
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Lãng mạn%') as lang_man,
(SELECT SUM(tong_tien) FROM doanh_thu_phim WHERE the_loai LIKE '%Kinh dị%') as kinh_di
 FROM doanh_thu_phim
 LIMIT 1";

	$result = mysqli_query($conn, $sql);
	$arr = array();
	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			$arr[] = array('hanh_dong' => $row['hanh_dong'],
						    'phieu_luu' => $row['phieu_luu'],
							'vien_tuong' => $row['vien_tuong'],
							'hoat_hinh' => $row['hoat_hinh'],
							'lang_man' => $row['lang_man'],
							'kinh_di' => $row['kinh_di'],
						);
		}
	}
	mysqli_close($conn);
	die(json_encode($arr));

?>