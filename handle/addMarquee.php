<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$Vid = $_POST['vid'] ;
$time = $_POST['time'] ;
$table = "marquee_".$Vid ;
$msg = test_input($_POST['msg']) ;
$speed = $_POST['sp'] ;
$size = $_POST['level'] ;
//添加弹幕信息
$sql = "INSERT INTO $table(time,msg,user,size,speed) VALUES('$time','$msg','$Uid','$size','$speed')" ;
$res = $dbh->prepare($sql) ;
$do = $res->execute() ;
echo $do == true ;
//更新弹幕数
$sql = "UPDATE video SET marquee = marquee + 1 WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}	

 ?>