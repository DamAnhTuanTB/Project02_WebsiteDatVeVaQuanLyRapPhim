<?php  
    header('Content-Type: text/html; charset=UTF-8');
    include_once('config.php');
  
    #lech sql
    $sql = "SELECT DISTINCT p.ten_phim, p.anh, p.trailer, p.the_loai, p.thoi_luong, p.id
            FROM phim p
            WHERE phim_dang_chieu='yes'";
    
    #tra ve ket qua
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $count = 0;
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            # code...
            if($count % 4 == 0) {   
                echo "<div class='row'>";
            }
            echo '<div class="col-md-3 mb-sm-5 mb-4">
                <div class="card" style="border-radius:25px; border: none" >
                    <img src="'.$row['anh'].'" class="card-img-top" alt="first" style="border-radius:25px">
                    <i class="fas fa-play-circle" trailer="'.$row['trailer'].'"></i>
                    <a href="info-film.html" class="name-film" value="'.$row['ten_phim'].'">'.$row['ten_phim'].'</a>
                    <div class="title-film text-center" style="color: #1D1D1D"><b>Thể loại:</b> '.$row['the_loai'].'</div>
                    <div class="title-film text-center" style="color: #1D1D1D"><b>Thời lượng:</b> '.$row['thoi_luong'].'</div>
                    <div class="pay-fare" idfilm="'.$row['id'].'">MUA VÉ</div>       
                </div>
            </div>';

            if($count % 4 == 3) {   
                echo "</div>";
            }
            
            $count ++;
        }
        echo "</div>";
    }
    mysqli_close($conn);

?>
<script src="js/movie.js"></script>