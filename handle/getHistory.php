<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$table = "history_".$Uid ;
$k = $table.".video_id" ;
$order = $table.".last_play" ;

$sql = "SELECT * FROM $table INNER JOIN video ON $k = video.video_id ORDER BY $order DESC" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;

$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$n = count($data,COUNT_NORMAL) ; 
for($i = 0 ; $i < $n ; $i++) //转换时间格式
{
	$data[$i]['last_play'] = date('Y-m-d H:i:s',$data[$i]['last_play']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}" ;

 ?>