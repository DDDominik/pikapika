<?php 
session_start() ;
include "addScore.php" ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;
$author = $_SESSION['name'] ;
$name = test_input($_POST['name']) ;
$tag = test_input($_POST['tag']) ;
$description = test_input($_POST['description']) ;
$category = $_POST['category'] ;
$picture = $_FILES['picture'] ;
$video = $_FILES['video'] ;

$time = time() ; // show : date('Y-m-d H:i:s',$time)

$Vname = base64_encode(time()).".".get_extension($video['name']) ;
$Vtype = $video['type'] ;
$Vsize = $video['size'] ;
$Vtmp = $video['tmp_name'] ;

$Pname = base64_encode(time()+1).".".get_extension($picture['name']) ;
$Ptmp = $picture['tmp_name'] ;
//获取类别ID
$sql = "SELECT * FROM category WHERE category_name = '$category'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$Cid = $data[0]['category_id'] ;
//添加视频信息
$sql = "INSERT INTO video(uploader,author,name,upload_time,src,size,description,picture,tag,category_id,category_name) 
			VALUES('$Uid','$author','$name','$time','$Vname','$Vsize','$description','$Pname','$tag','$Cid','$category')" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
//获取视频ID
$sql = "SELECT * FROM video WHERE upload_time = '$time' AND uploader = '$Uid'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$Vid = $data[0]['video_id'] ;

$path = "../info/video/".$Vid ;
if(create_folders($path))
{   //移动视频,封面源文件
	$Vdestination = $path."/".$Vname ;
	$Pdestination = $path."/".$Pname ;
	move_uploaded_file($Vtmp,$Vdestination) ;
	move_uploaded_file($Ptmp,$Pdestination) ;
	//增加该类视频数
	$sql = "UPDATE category SET amount = amount + 1 WHERE category_id = '$Cid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建评论表
	$table = "comment_".$Vid ;
	$sql = "CREATE TABLE $table
	(
		comment_id int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
		commenter int(11) NOT NULL ,
		comment_msg varchar(255) NOT NULL ,
		publish_time int(11) NOT NULL 
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建评论回复表
	$table = "reply_".$Vid ;
	$sql = "CREATE TABLE $table
	(
		reply_id int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
		comment_id int(11) NOT NULL ,
		reply_time int(11) NOT NULL ,
		msg varchar(255) NOT NULL ,
		replier int(11) NOT NULL
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建点赞表
	$table = "great_".$Vid ;
	$sql = "CREATE TABLE $table
	(
		user_id int(11) NOT NULL
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//创建弹幕表
	$table = "marquee_".$Vid ;
	$sql = "CREATE TABLE $table
	(
		id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT ,
		time int(11) NOT NULL ,
		msg varchar(255) NOT NULL ,
		user int(11) NOT NULL ,
		size int(11) NOT NULL ,
		speed int(11) NOT NULL 
	) DEFAULT CHARSET=utf8" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//更新用户投稿量
	$sql = "UPDATE user SET submit = submit + 1 WHERE user_id = '$Uid'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//加分 20
	scoreUp($Uid,20) ;
	echo "<script>alert('上传成功！');</script>" ;
}
else
{
	echo "<script>alert('上传失败！');</script>" ;
}

echo "<script>location.href='../html/center.html'</script>" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
function create_folders($dir)
{  
	return is_dir($dir) or (create_folders(dirname($dir)) and mkdir($dir, 0777)) ;  
}

function get_extension($file) 
{ 
	return pathinfo($file, PATHINFO_EXTENSION); 
}  
 ?>