<?php 
include "connectDB.php" ;
$name = test_input($_POST["username"]) ;
//查询用户名是否存在
$sql = "SELECT * FROM user WHERE username = '$name'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
echo ($res->rowCount() > 0 ? "*用户名已存在" : "√用户名可用") ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}	
 ?>