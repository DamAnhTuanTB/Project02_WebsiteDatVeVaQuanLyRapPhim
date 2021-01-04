<?php 
// TRANG LẤY THÔNG TIN PHIM TỪ TÊN PHIM ĐÃ ĐƯỢC LƯU RỒI TRẢ DỮ LIỆU VỀ CHO TRANG THÔNG TIN PHIM
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	
	include_once("config.php");


	
 	$ten_tin = isset($_SESSION["ten_tin"]) ? $_SESSION["ten_tin"] : "";
 	$sql = "SELECT * FROM tinmoi WHERE ten_tin = '$ten_tin'";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result)>0){
		$row = mysqli_fetch_assoc($result);
		echo '<div class="row">
        
        <div class="col-8">
          <h3 id="tieu-de">'.$row['ten_tin'].'</h3>
          <img src="'.$row['anh_1'].'" alt="" border="0" style="width: 100%; padding: 10px 0px;" />
          <p>'.$row['noi_dung_1'].'</p>
          <img src="'.$row['anh_2'].'" alt="" border="0" style="width: 100%; padding: 10px 0px;" />
          <p>'.$row['noi_dung_2'].'</p>
        </div>';
	}

	echo '<div class="col-4" style="text-align: center; margin-top: 40px">
          <h4 style="margin-bottom: 20px">Tin tức khác</h4>';

	$sql = "SELECT * FROM tinmoi WHERE ten_tin != '$ten_tin'";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            echo '<div class="row"  style="text-align: center;  margin-bottom: 20px;">
            <div class="card" style="width: 60%; margin: auto; border: 0;">
              <img class="card-img-top" src="'.$row['poster'].'" alt="" alt="Card image cap" style="border-radius: 30px; box-shadow: 3px 3px 1px #AAAAAA;">
              <div class="card-body">
                <a href="news.html" value="'.$row['ten_tin'].'">'.$row['ten_tin'].'</a>
              </div>
            </div>
          </div>';

         
        }
    }
    echo "</div>
    </div>";

	mysqli_close($conn);

?>
