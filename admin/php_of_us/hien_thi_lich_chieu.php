<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	
	$sql = "SELECT DISTINCT lc.ngay_chieu, lc.id, lc.ten_phim, lc.gio_chieu, lc.dinh_dang, lc.ma_lich, dg.phong
		FROM lich_chieu lc 
		LEFT JOIN dat_ghe dg ON lc.ma_lich = dg.ma_lich
		ORDER BY lc.ngay_chieu DESC";
	$result = mysqli_query($conn, $sql);
	

	if(mysqli_num_rows($result) > 0){
		while ($row = mysqli_fetch_assoc($result)){ 
			echo "<tr>
					<td>".$row["ngay_chieu"]."</td>
					<td>".$row["id"]."</td>
					<td>".$row["ten_phim"]."</td>
					<td>".$row["gio_chieu"]."</td>
					<td>".$row["dinh_dang"]."</td>
					<td>".$row["ma_lich"]."</td>
					<td>".$row["phong"]."</td>
				</tr>";
		}
	}
	mysqli_close($conn);

?>