<?php
header('content-type:text/html;charset=utf-8;');
include "connectDB.php" ;
$username = test_input($_POST['username']) ;
$password = test_input($_POST['password']) ;
$confirm = test_input($_POST['cpassword']) ;
$msg = test_register_msg($username,$password,$confirm) ;
if($msg!='')
{
	echo "<script>alert('注册失败! '+'$msg');</script>" ;
}
else
{   //创建用户
	$password = base64_encode(md5($password.'pikaqiu')) ;
	$sql = "INSERT INTO user(username,password) VALUES('$username','$password')" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
    //获取ID
	$sql = "SELECT user_id FROM user WHERE username = '$username'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
	$id = $data[0]['user_id'] ;
	//创建用户资料文件夹
	$path = "../info/face/".$id ;
	create_folders($path) ;
    //创建用户collection
	$table = "collection_".$id ;
	$sql = "CREATE TABLE $table
	(
		video_id int(11) NOT NULL ,
		collect_time int(11) NOT NULL 
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建用户history
	$table = "history_".$id ;
	$sql = "CREATE TABLE $table
	(
		video_id int(11) NOT NULL ,
		last_play int(11) NOT NULL 
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建用户签到表
	$table = "sign_".$id ;
	$sql = "CREATE TABLE $table
	(
		date DATETIME NOT NULL
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	
	echo "<script>alert('注册成功!赶快登陆吧!');</script>" ;
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

function test_register_msg($name,$key1,$key2) //成功返回''失败返回原因
{
	include "connectDB.php" ;
	if($name=='')
	{
		return "用户名不能为空" ;
	}
	$sql = "SELECT * FROM user WHERE username = '$name'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	if($res->rowCount()>0)
	{
		return "用户名已存在" ;
	}
	if($key1!=$key2)
	{
		return "两次密码不同" ;
	}
	return '' ;
}

function create_folders($dir)
{  
	return is_dir($dir) or (create_folders(dirname($dir)) and mkdir($dir, 0777)) ;  
}  
 ?>