<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT ht.phim, p.tien_von, SUM(tien_ve) as tong_tien
			FROM hanh_trinh_dien_anh ht 
			JOIN phim p ON ht.phim = p.ten_phim
			WHERE p.phim_dang_chieu = 'yes'
			GROUP BY p.ten_phim
			ORDER BY p.id";
	$result = mysqli_query($conn, $sql);
	$arr = array();

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			$arr[] = array('phim' => $row['phim'],
							'tien_von' => $row['tien_von'],
							'tong_tien' => $row['tong_tien']);
		}
	}
	mysqli_close($conn);
	die(json_encode($arr));

?>