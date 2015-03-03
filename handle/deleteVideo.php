<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$Vid = $_POST['vid'] ;
//获取视频类别
$sql = "SELECT category_id FROM video WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$Cid = $data[0]['category_id'] ;
//删除视频数据
$sql = "DELETE FROM video WHERE video_id = '$Vid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除视频源文件
deldir("../info/video/".$Vid) ;
//该类视频数减少
$sql = "UPDATE category SET amount = amount - 1 WHERE category_id = '$Cid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//用户上传数减少
$sql = "UPDATE user SET submit = submit - 1 WHERE user_id = '$Uid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除点赞表
$table = "great_".$Vid ;
$sql = "DROP TABLE $table" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除评论表
$table = "comment_".$Vid ;
$sql = "DROP TABLE $table" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除回复表
$table = "reply_".$Vid ;
$sql = "DROP TABLE $table" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除弹幕表
$table = "marquee_".$Vid ;
$sql = "DROP TABLE $table" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//删除相关用户信息
deleteInfo($Vid) ;

function deldir($dir) 
{
  	$dh = opendir($dir) ; 
  	while($file=readdir($dh)) 
  	{
   	 	  if($file!="." && $file!="..") 
   	 	  {
      		  $fullpath = $dir."/".$file ;
      		  if(!is_dir($fullpath)) 
        	  {
        	  	  unlink($fullpath);
            } 
     		    else 
     		    {
         	  	  deldir($fullpath) ;
      	  	}
   		  }
 	  }
  	closedir($dh);
 	  if(rmdir($dir)) 
    	  return true;
  	else 
    	  return false;
}

function deleteInfo($Vid)
{
    include "connectDB.php" ;
    $sql = "SELECT user_id FROM user" ;
    $res = $dbh->prepare($sql) ;
    $res->execute() ;
    $data = $res->fetchAll(PDO::FETCH_ASSOC) ;
    foreach ($data as $value) 
    {
        $Uid = $value['user_id'] ;

        $table = "collection_".$Uid ;
        $sql = "DELETE FROM $table WHERE video_id = '$Vid'" ;
        $res = $dbh->prepare($sql) ;
        $res->execute() ;
        if($res->rowCount()>0)
        {
            $sql = "UPDATE user SET collect = collect - 1 WHERE user_id = '$Uid'" ;
            $res = $dbh->prepare($sql) ;
            $res->execute() ;
        }

        $table = "history_".$Uid ;
        $sql = "DELETE FROM $table WHERE video_id = '$Vid'" ;
        $res = $dbh->prepare($sql) ;
        $res->execute() ;
    }
}
 ?>