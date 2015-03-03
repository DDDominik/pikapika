<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$table = "collection_".$Uid ;
$k = $table.".video_id" ;

$sql = "SELECT * FROM $table INNER JOIN video ON $k = video.video_id ORDER BY collect_time" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data = array_reverse($data) ;
$n = count($data,COUNT_NORMAL) ; 
for($i = 0 ; $i < $n ; $i++)  //转换时间
{
	$data[$i]['collect_time'] = date('Y-m-d H:i:s',$data[$i]['collect_time']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}" ;
 ?>