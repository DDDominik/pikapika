<?php 
session_start() ;
include "connectDB.php" ;
include "addScore.php" ;

$Uid = $_SESSION['id'] ;
$table = "collection_".$Uid ;
$Vid = $_POST['vid'] ;
$time = time() ;
//检查是否已收藏
$sql = "SELECT * FROM $table WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;

if($res->rowCount()>0)
{
	echo 0 ;
}
else
{   //获取视频信息
	$sql = "SELECT collected , uploader FROM video WHERE video_id = '$Vid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
	$collect = $data[0]['collected'] + 1 ;
	//上传者加分 3
	scoreUp($data[0]['uploader'],3) ;
    //加入收藏夹
	$sql = "INSERT INTO $table(video_id,collect_time) VALUES('$Vid','$time')" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
    //更新用户收藏数
	$sql = "UPDATE user SET collect = collect + 1 WHERE user_id = '$Uid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//更新视频收藏数
	$sql = "UPDATE video SET collected = '$collect' WHERE video_id = '$Vid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//返回更新后的收藏数
	echo $collect ;
}
 ?>