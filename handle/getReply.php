<?php 
include "connectDB.php" ;

$Vid = $_POST['vid'] ;
$CID = $_POST['cid'] ;
$table = "reply_".$Vid ;
$k = $table.".replier" ;

$sql = "SELECT * FROM user INNER JOIN $table ON user.user_id = $k WHERE comment_id = '$CID' ORDER BY reply_time" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$n = count($data,COUNT_NORMAL) ; 
for($i = 0 ; $i < $n ; $i++) //转换时间格式
{
	$data[$i]['reply_time'] = date('Y-m-d H:i:s',$data[$i]['reply_time']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}".$CID ;
 ?>