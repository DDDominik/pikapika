<?php 
include "connectDB.php" ;
$id = $_POST['id'] ;
$table = "comment_".$id ;
$k = $table.".commenter" ;
//获取视频评论信息
$sql = "SELECT * FROM $table INNER JOIN user ON $k = user.user_id";
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data = array_reverse($data) ; //反转，以达到按时间倒序排序的目的
$n = count($data,COUNT_NORMAL) ; //获取评论总数
for($i = 0 ; $i < $n ; $i++) //转换时间格式
{
	$data[$i]['publish_time'] = date('Y-m-d H:i:s',$data[$i]['publish_time']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}" ;
 ?>