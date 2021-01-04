<?php  

	header('Content-Type: text/html; charset=UTF-8');
    include_once("config.php");

    #lech sql
    $sql = "SELECT * FROM tinmoi";
    
    #tra ve ket qua
    $result = mysqli_query($conn, $sql);

    echo '<div class="container" id="tin-tuc">
		<p style="font-size:50px; font-family: VT323">TIN TỨC</p>
		<div class= "row">';

    if (mysqli_num_rows($result) > 0) {
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            # code...
            echo '<div class="col-md-3">
				<img src="'.$row["poster"].'" class="uudai1" style="border-radius:30px" >
				<a href="news.html" value="'.$row["ten_tin"].'"><p style="margin:20px">'.$row["ten_tin"].'</p></a>
			</div>';
        }
    }

    echo "</div> 
	</div>";
	echo '<hr />
		<div class="container" id="uu-dai">
			<p style="font-size:50px; font-family: VT323">SỰ KIỆN</p>
			<div class= "row">';

	#lech sql
    $sql = "SELECT * FROM uu_dai";
    
    #tra ve ket qua
    $result = mysqli_query($conn, $sql);


    if (mysqli_num_rows($result) > 0) {
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            # code...
            echo '<div class="col-md-3">
				<img src="'.$row["anh"].'" class="uudai1" style="border-radius:30px" >
				<a href="events.html" value="'.$row["ten"].'"><p style="margin:20px">'.$row["ten"].'</p></a>
			</div>';
        }
    }

    echo "</div> 
	</div>";

?>

