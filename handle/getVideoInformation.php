<?php 
include "connectDB.php" ;
$id = $_POST['id'] ;
//获取视频信息
$sql = "SELECT * FROM video INNER JOIN user ON video.uploader = user.user_id WHERE video_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data[0]['upload_time'] = date('Y-m-d H:i:s',$data[0]['upload_time']+3600*8) ; //转换时间格式

echo json_encode($data[0]) ;
 ?>