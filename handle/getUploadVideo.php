<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;

$sql = "SELECT * FROM video WHERE uploader = '$Uid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data = array_reverse($data) ; //反转
$n = count($data,COUNT_NORMAL) ; 
for($i = 0 ; $i < $n ; $i++) //转换时间格式
{
	$data[$i]['upload_time'] = date('Y-m-d H:i:s',$data[$i]['upload_time']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}" ;
 ?>