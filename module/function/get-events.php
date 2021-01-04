<?php 
// TRANG LẤY THÔNG TIN PHIM TỪ TÊN PHIM ĐÃ ĐƯỢC LƯU RỒI TRẢ DỮ LIỆU VỀ CHO TRANG THÔNG TIN PHIM
	session_start();
	header('Content-Type: text/html; charset=UTF-8');
	
	include_once("config.php");


 	$ten_event = isset($_SESSION["ten_event"]) ? $_SESSION["ten_event"] : "";
 	$sql = "SELECT * FROM uu_dai WHERE ten = '$ten_event'";
	$result = mysqli_query($conn, $sql);
	if(mysqli_num_rows($result)>0){
		$row = mysqli_fetch_assoc($result);
		echo '<div class="row">
            <div class="col-8">
              <h3 id="tieu-de">'.$row['ten'].'</h3>
              <img src="'.$row['anh'].'" alt="" border="0" style="width: 100%; padding: 10px 0px;" />
              <p class="content-font">'.$row['chi_tiet'].'</p>
            </div>';
	}

	echo '<div class="col-4" style="text-align: center; margin-top: 40px">
          <h4 style="margin-bottom: 20px">Các sự kiện khác</h4>';

	$sql = "SELECT * FROM uu_dai WHERE ten != '$ten_event'";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            echo '<div class="row"  style="text-align: center;  margin-bottom: 20px;">
                    <div class="card" style="width: 60%; margin: auto; border: 0; ">
                      <img class="card-img-top" src="'.$row['anh'].'" alt="" alt="Card image cap" style="border-radius: 30px; box-shadow: 3px 3px 1px 1px #AAAAAA;">
                      <div class="card-body">
                        <a href="events.html" value="'.$row['ten'].'">'.$row['ten'].'</a>
                      </div>
                    </div>
                  </div>';

         
        }
    }
    echo "</div>
    </div>";

	mysqli_close($conn);

?>