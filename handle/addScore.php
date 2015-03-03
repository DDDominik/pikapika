<?php 
function scoreUp($id,$score)  //用户id , 加分数量
{
	include "connectDB.php" ;
	$sql = "SELECT score , level FROM user WHERE user_id = '$id' " ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
	$score += $data[0]['score'] ;
	switch($data[0]['level'])
	{
		case 1 : $max = 50     ; break ;
		case 2 : $max = 400    ; break ;
		case 3 : $max = 2000   ; break ;
		case 4 : $max = 10000  ; break ;
		default : return 0 ;
	}
	if( $score >= $max )
	{
		$score -= $max ;
		$sql = "UPDATE user SET level = level + 1 WHERE user_id = '$id'" ;
		$res = $dbh->prepare($sql) ;
		$res->execute() ;
	}
	$sql = "UPDATE user SET score = '$score' WHERE user_id = '$id'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	return 1 ;
} 
 ?>