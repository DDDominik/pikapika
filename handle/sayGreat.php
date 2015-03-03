<?php 
session_start() ;
include "connectDB.php" ;
include "addScore.php" ;

$Vid = $_POST['id'] ;
$Uid = $_SESSION['id'] ;
$table = "great_".$Vid ;
//获取点赞信息
$sql = "SELECT * FROM $table WHERE user_id = '$Uid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
if($res->rowCount()>0) //已赞
{
	echo 0 ;
}
else
{   //添加赞
	$sql = "INSERT INTO $table(user_id) VALUES('$Uid')" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
    //获取点赞数
	$sql = "SELECT greated , uploader FROM video WHERE video_id = '$Vid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
	$great = $data[0]['greated'] + 1 ;
	//上传者加分 2
	scoreUp($data[0]['uploader'],2) ;
	//更新点赞数
	$sql = "UPDATE video set greated = '$great' WHERE video_id = '$Vid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;

	//返回更新后的点赞数
	echo $great ;
}
 ?>