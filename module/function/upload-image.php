<?php
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	if(isset($_POST["save-image"])){
	//	echo $_POST["save-image"];
		if(isset($_FILES["image"])){
			if(strpos($_FILES["image"]["type"], "image") == 0){
				move_uploaded_file($_FILES['image']['tmp_name'], '../../upload/'.$_SESSION["email"].".png");
				header('Location: ../../account.html');
			}
		}
	}
?>