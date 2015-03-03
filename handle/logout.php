<?php 
session_start() ;
session_unset() ; //重置session达到退出的目的
echo "<script>alert('退出成功!');</script>" ;
echo "<script>location.href='../index.html';</script>" ;
 ?>