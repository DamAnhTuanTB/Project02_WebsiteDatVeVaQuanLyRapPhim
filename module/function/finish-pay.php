<?php 
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	include_once("config.php");
	
	$email_thanh_vien = $_SESSION["email"];
	$ma_ve = $_SESSION["ma_ve"];
	$ma_hoa_don = mt_rand() + mt_rand() + mt_rand();
	$phim = $_SESSION["ten_phim"];
	$suat_chieu = $_SESSION["suat_chieu"];
	$ngay_dat = $_SESSION["ngay_dat"];
	$tien_ve = (int)$_SESSION["ghe_thuong"] * (int)$_SESSION["gia_ghe_thuong"] + 
				(int)$_SESSION["ghe_vip"] * (int)$_SESSION["gia_ghe_vip"] +
				(int)$_SESSION["ghe_doi"] * (int)$_SESSION["gia_ghe_doi"];
	$tien_do_an = (int)$_SESSION["happy_combo"] * (int)$_SESSION["gia_happy_combo"] +
				(int)$_SESSION["sweet_combo"] * (int)$_SESSION["gia_sweet_combo"] +
				(int)$_SESSION["fantastic_combo"] * (int)$_SESSION["gia_fantastic_combo"];
	$tien_ma_giam_gia = (int)$_SESSION["tien_giam_ma_giam_gia"];
	$tien_diem_fantastic = 	(int)$_SESSION["tien_giam_diem_fantastic"];
	$tong_tien = (int)$_SESSION["ghe_thuong"] * (int)$_SESSION["gia_ghe_thuong"] + 
				(int)$_SESSION["ghe_vip"] * (int)$_SESSION["gia_ghe_vip"] +
				(int)$_SESSION["ghe_doi"] * (int)$_SESSION["gia_ghe_doi"] +
				(int)$_SESSION["happy_combo"] * (int)$_SESSION["gia_happy_combo"] +
				(int)$_SESSION["sweet_combo"] * (int)$_SESSION["gia_sweet_combo"] +
				(int)$_SESSION["fantastic_combo"] * (int)$_SESSION["gia_fantastic_combo"]
				- (int)$_SESSION["tien_giam_ma_giam_gia"]
				- (int)$_SESSION["tien_giam_diem_fantastic"];



	$ghe_ngoi = $_SESSION["cac_ghe"];
	$ma_lich = $_SESSION["showtime"];
	$arr = array();
	$arr = explode(' ', $ghe_ngoi);
	foreach($arr as $ghe){
		mysqli_query($conn, "UPDATE dat_ghe SET trang_thai_ghe='daban', email='$email_thanh_vien' WHERE ma_lich = '$ma_lich' AND ghe='$ghe'");
	}


 	$sql1 = "INSERT INTO hanh_trinh_dien_anh (email_thanh_vien, ma_lich, ma_ve, ma_hoa_don, phim, suat_chieu, ngay_dat, tien_ve, tien_do_an, tien_ma_giam_gia, tien_diem_fantastic, tong_tien) 
	VALUES ('$email_thanh_vien', '$ma_lich', '$ma_ve', '$ma_hoa_don', '$phim', '$suat_chieu', '$ngay_dat', '$tien_ve', '$tien_do_an', '$tien_ma_giam_gia', '$tien_diem_fantastic', '$tong_tien') ";
	
	$result1 = mysqli_query($conn, $sql1);

	if($result1){
		echo "Bạn đã thanh toán thành công. Vui lòng kiểm tra tại mục TÀI KHOẢN/Hành Trình Điện Ảnh để xem thông tin chi tiết.";
	}

    if($_SESSION["tien_giam_diem_fantastic"] != 0){
    	$diem_fantastic_duoc_cong_vao = $tong_tien * 0.05;
    	$sql2 = "UPDATE thanh_vien SET diem_fantastic = '$diem_fantastic_duoc_cong_vao' WHERE email = '$email_thanh_vien'";
    	$result2 = mysqli_query($conn, $sql2);
    }else{
    	$diem_fantastic_duoc_cong_vao = $tong_tien * 0.05;
		$sql3 = "UPDATE thanh_vien SET diem_fantastic = diem_fantastic + '$diem_fantastic_duoc_cong_vao' WHERE email = '$email_thanh_vien'";
    	$result3 = mysqli_query($conn, $sql3);
    }	

    unset($_SESSION["choose_chair"]);
    unset($_SESSION["pay"]);

?>

