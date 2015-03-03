<?php 
session_start() ;
include "connectDB.php" ;
include "addScore.php" ;

$Vid = $_POST['v_id'] ;

if(!isset($_SESSION['name']))
{
	echo "<script>alert('请先登录!');</script>" ;
	echo "<script>location.href='../html/play.html?id=".$Vid."';</script>" ;
}
else
{
	$time = time() ;
	$Uid = $_SESSION['id'] ;
	$msg = test_input($_POST['comment']) ;
	$table = "comment_".$Vid ;

	if($msg!="") //非空
	{   //更新评论数
		$sql = "UPDATE video SET commented = commented + 1 WHERE video_id = '$Vid'" ;
		$res = $dbh->prepare($sql) ;
		$res->execute() ;
		//添加评论
		$sql = "INSERT INTO $table(commenter,comment_msg,publish_time)
    	    	VALUES('$Uid','$msg','$time')" ;
		$res = $dbh->prepare($sql) ;
		$do = $res->execute() ;
		if($do)
		{	
			//评论者加分 1
			scoreUp($Uid,1) ;

			$sql = "SELECT uploader FROM video WHERE video_id = '$Vid'" ;
			$res = $dbh->prepare($sql) ;
			$res->execute() ;
			$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
			//被评论者加分2
			scoreUp($data[0]['uploader'],2) ;
			echo "<script>alert('发表成功!');</script>" ;
		}
		else
		{
			echo "<script>alert('发表失败!');</script>" ;
		}
	}
	else
	{
		echo "<script>alert('发表失败!内容不能为空');</script>" ;
	}
	echo "<script>location.href='../html/play.html?id=".$Vid."';</script>" ;
}
function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
 ?>