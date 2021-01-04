<?php
	header('Content-Type: text/html; charset=UTF-8');
	include_once('config.php');
	$sql = "SELECT ten_phim, anh, trailer FROM phim WHERE phim_dang_hot = 'yes'";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)){
			echo '<div class="col-6 py-3">';
			    echo '<img class="img-fluid border-radius-25" src="' . $row["anh"] . '">';
			    echo '<a href="info-film.html" class="text-center name-film mt-1">' . $row["ten_phim"] . '</a>';
			    echo '<i class="fas fa-play-circle" trailer="' .$row["trailer"] . '"></i>';
			echo '</div>';
		}
	}
	mysqli_close($conn);
?>

