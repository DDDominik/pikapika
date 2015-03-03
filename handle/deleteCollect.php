<?php 
session_start() ;
include "connectDB.php" ;

$Vid = $_POST['id'] ;
$Uid = $_SESSION['id'] ;
$table = "collection_".$Uid ;
//删除收藏
$sql = "DELETE FROM $table WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//减少用户收藏
$sql = "UPDATE user SET collect = collect - 1 WHERE user_id = '$Uid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//减少视频收藏
$sql = "UPDATE video SET collected = collected - 1 WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
 ?>