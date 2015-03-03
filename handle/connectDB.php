<?php //连接数据库
header('content-type:text/html;charset=utf-8;');
$dsn = 'mysql:host=localhost;dbname=pikapika' ;
$username = 'root' ;
$password = '' ;
try
{
	$dbh = new PDO($dsn,$username,$password) ;
	$dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION) ;
	$dbh->exec('set names utf8') ;
}
catch(PDOException $e)
{
	echo 'Connection failed : '.$e->getMessage() ;
}
 ?>