<?php 
// TRANG LẤY THÔNG TIN PHIM TỪ TÊN PHIM ĐÃ ĐƯỢC LƯU RỒI TRẢ DỮ LIỆU VỀ CHO TRANG THÔNG TIN PHIM
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	$arr = array();
 	$ten_phim = isset($_SESSION["ten_phim"]) ? $_SESSION["ten_phim"] : "";
 	$sql = "SELECT dao_dien, dien_vien, the_loai, thoi_luong, ngon_ngu, ngay_khoi_chieu, anh, mo_ta, trailer, phim_dang_hot, phim_dang_chieu, id FROM phim WHERE ten_phim = '$ten_phim'";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result)>0){
		$row = mysqli_fetch_assoc($result);
		$arr["ten_phim"] = $ten_phim;
		$arr["anh"] = $row["anh"];
		$arr["trailer"] = $row["trailer"];
		$arr["dao_dien"] = $row["dao_dien"];
		$arr["dien_vien"] = $row["dien_vien"];
		$arr["the_loai"] = $row["the_loai"];
		$arr["thoi_luong"] = $row["thoi_luong"];
		$arr["ngon_ngu"] = $row["ngon_ngu"];
		$arr["ngay_khoi_chieu"] = $row["ngay_khoi_chieu"];
		$arr["mo_ta"] = $row["mo_ta"];
		$arr["phim_dang_hot"] = $row["phim_dang_hot"];
		$arr["id"] = $row["id"];
		$arr["phim_dang_chieu"] = $row["phim_dang_chieu"];
	}
	mysqli_close($conn);
	die(json_encode($arr));

?>
