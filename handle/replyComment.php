<?php 
session_start() ;
include "connectDB.php" ;
include "addScore.php" ;

$Uid = $_SESSION['id'] ;
$Vid = $_POST['vid'] ;
$msg = test_input($_POST['msg']) ;
$time = time() ;
$CID = $_POST['cid'] ;
$table = "reply_".$Vid ;

$sql = "INSERT INTO $table(comment_id,reply_time,msg,replier) VALUES('$CID','$time','$msg','$Uid') " ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//回复者加分 1
scoreUp($Uid,1) ;

$table = "comment_".$Vid ;
$sql = "SELECT commenter FROM $table WHERE comment_id = '$CID'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
//被回复者加分 1
scoreUp($data[0]['commenter'],1) ;

$sql = "SELECT uploader FROM video WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
//投稿者加分 1
scoreUp($data[0]['uploader'],1) ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
 ?>