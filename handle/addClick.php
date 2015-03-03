<?php 
include "connectDB.php" ;
include "addScore.php" ;

$id = $_POST['id'] ;
//更新点击数
$sql = "UPDATE video SET clicked = clicked + 1 WHERE video_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//获取上传者ID
$sql = "SELECT uploader FROM video WHERE video_id = '$id' " ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
//加分 1
scoreUp($data[0]['uploader'],1) ;
 ?>