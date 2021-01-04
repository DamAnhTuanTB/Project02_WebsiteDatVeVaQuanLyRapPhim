<?php
	session_start();
	include_once("config.php");
	header('Content-Type: text/html; charset=UTF-8');
	$email = "%";
	$name = "%";
	$date_min = "1960-01-01";
	$date_max = "2020-12-31";
	$telephone = "%";
	$cmnd = "%";
	$address = "%";
	$choose1 = "";
	$label1 = "";
	$choose2 = "";
	$label2= "";
	if(!empty($_POST["email"])){
		$email = "%".$_POST["email"]."%";
	};
	if(!empty($_POST["name"])){
		$name =  "%".$_POST["name"]."%";
	};
	if(!empty($_POST["date_min"])){
		$date_min = $_POST["date_min"];
	};
	if(!empty($_POST["date_max"])){
		$date_max = $_POST["date_max"];
	};
	if(!empty($_POST["telephone"])){
		$telephone =  "%".$_POST["telephone"]."%";
	};
	if(!empty($_POST["cmnd"])){
		$cmnd = "%".$_POST["cmnd"]."%";
	};
	if(!empty($_POST["address"])){
		$address = "%".$_POST["address"]."%";
	};
	if(!empty($_POST["choose1"])){
		$choose1 = $_POST["choose1"];
	};
	if(!empty($_POST["label1"])){
		$label1 = $_POST["label1"];
	};
	if(!empty($_POST["choose2"])){
		$choose2 = $_POST["choose2"];
	};
	if(!empty($_POST["label2"])){
		$label2 = $_POST["label2"];
	};

	//echo $email . $name . $date_min . $date_max . $telephone . $cmnd . $address . $choose1 . $label1 . $choose2 . $label2;
	$sql = "";
	if($label2 == ""){
		$sql = "SELECT * FROM doanh_thu_khach_hang WHERE email LIKE '$email' AND ho_ten LIKE '$name' AND dien_thoai LIKE '$telephone' AND cmnd_hc LIKE '$cmnd' AND dia_chi LIKE '$address' AND ngay_sinh >= '$date_min' AND ngay_sinh <= '$date_max' ORDER BY ".$label1." ".$choose1;
	}else{
		$sql = "SELECT * FROM doanh_thu_khach_hang WHERE email LIKE '$email' AND ho_ten LIKE '$name' AND dien_thoai LIKE '$telephone' AND cmnd_hc LIKE '$cmnd' AND dia_chi LIKE '$address' AND ngay_sinh >= '$date_min' AND ngay_sinh <= '$date_max' ORDER BY ".$label1." ".$choose1.", ".$label2." ".$choose2;
	}
	

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