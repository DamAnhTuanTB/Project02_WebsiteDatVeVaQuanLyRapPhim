<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT tv.email,ho_ten,ngay_sinh,dien_thoai,cmnd_hc,dia_chi, count(ht.ma_ve) as so_lan_thanh_toan, diem_fantastic, if(sum(ht.tong_tien) > 0,sum(ht.tong_tien),0) as tien_da_tra FROM thanh_vien tv LEFT JOIN hanh_trinh_dien_anh ht ON tv.email = ht.email_thanh_vien GROUP BY tv.email ORDER BY tien_da_tra DESC";
	$result = mysqli_query($conn, $sql);
	

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			echo "<tr>
					<td>".$row["email"]."</td>
					<td>".$row["ho_ten"]."</td>
					<td>".$row["ngay_sinh"]."</td>
					<td>".$row["dien_thoai"]."</td>
					<td>".$row["cmnd_hc"]."</td>
					<td>".$row["dia_chi"]."</td>
					<td>".$row["so_lan_thanh_toan"]."</td>
					<td>".$row["diem_fantastic"]."</td>
					<td>".$row["tien_da_tra"]."</td>
				</tr>";
		}
	}
	mysqli_close($conn);

?>