<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$Vid = $_POST['id'] ;
$table = "history_".$Uid ;
$time = time() ;

$sql = "SELECT * FROM $table WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;

if($res->rowCount()>0) //已观看，更新记录
{
	$sql = "UPDATE $table SET last_play = '$time' WHERE video_id = '$Vid' " ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
}
else //未观看，添加纪录
{
	$sql = "INSERT INTO $table(video_id,last_play) VALUES('$Vid','$time')" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
}
 ?>