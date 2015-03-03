<?php 
session_start() ;
include "connectDB.php" ;
include "addScore.php" ;

$username = test_input($_POST['username']) ;
$password = test_input($_POST['password']) ;
//获取用户信息
$sql = "SELECT * FROM user WHERE username = '$username'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
if($res->rowCount()>0) //用户存在
{   
	$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
	if( $data[0]['password']==base64_encode(md5($password.'pikaqiu')) )
	{   //设置session
		$_SESSION['name'] = $username ;
		$_SESSION['id'] = $data[0]['user_id'] ;

		$table = "sign_".$_SESSION['id'] ;
		$date = date('Y-m-d') ;
		$sql = "SELECT * FROM $table WHERE date = '$date'" ;
		$res = $dbh->prepare($sql) ;
		$res->execute() ;
		if($res->rowCount()>0) ; //已经签到
		else
		{   	
			$sql = "INSERT INTO $table(date) VALUES('$date')" ;
			$res = $dbh->prepare($sql) ;
			$res->execute() ;
			//签到加分 5
			scoreUp($_SESSION['id'],5) ;
		}
		echo "<script>alert('登陆成功!');</script>" ;
		echo "<script>location.href='../index.html';</script>" ;
	}
	else //密码错误
	{
		echo "<script>alert('登陆失败!密码错误!');</script>" ;
	}
}
else //用户不存在
{
	echo "<script>alert('登陆失败!用户不存在,请检查用户名或注册!');</script>" ;
}
echo "<script>location.href='../html/login.html';</script>" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
 ?>