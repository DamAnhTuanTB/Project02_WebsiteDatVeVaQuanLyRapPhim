<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');

	$cot = "";
	$sap_xep = "";
	if(isset($_GET["sap_xep"])){
		$sap_xep = $_GET["sap_xep"];
	};

	if(isset($_GET["cot"])){
		$cot = $_GET["cot"];
	};

	$sql = "SELECT p.id, p.ten_phim, p.the_loai, IF(p.phim_dang_hot = 'yes' OR p.phim_dang_chieu = 'yes','Đang chiếu', IF(p.phim_sap_chieu = 'yes', 'Sắp chiếu', 'Ngừng chiếu')) tinh_trang_chieu, COUNT(DISTINCT (lc.ma_lich)) so_lich_chieu, COUNT(DISTINCT (htda.email_thanh_vien)) so_nguoi_dat_ve, COUNT(htda.ma_ve) so_ve_ban_duoc, p.tien_von, COALESCE(SUM(htda.tong_tien),0) tien_thu_duoc, COALESCE(SUM(htda.tong_tien) - p.tien_von, 0) tien_lai
		FROM phim p 
		LEFT JOIN lich_chieu lc ON p.id = lc.id 
		LEFT JOIN hanh_trinh_dien_anh htda ON lc.ma_lich = htda.ma_lich
		GROUP BY p.id";

	if($cot != "" && $sap_xep != ""){
		$sql = $sql." ORDER BY ".$cot." ".$sap_xep;
	};

	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			echo "<tr>
					<td>".$row["id"]."</td>
					<td>".$row["ten_phim"]."</td>
					<td>".$row["the_loai"]."</td>
					<td>".$row["tinh_trang_chieu"]."</td>
					<td>".$row["so_lich_chieu"]."</td>
					<td>".$row["so_nguoi_dat_ve"]."</td>
					<td>".$row["so_ve_ban_duoc"]."</td>
					<td>".$row["tien_von"]."</td>
					<td>".$row["tien_thu_duoc"]."</td>
					<td>".$row["tien_lai"]."</td>
				</tr>";
		}
	}
	mysqli_close($conn);

?>