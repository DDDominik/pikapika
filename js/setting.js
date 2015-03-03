$(document).ready(function(){
	$.get("../handle/isLogin.php",function(data){
		if( data=="" )
		{
			alert("请先登录!") ;
			location.href = "../html/login.html" ;
		}
	});
	$.post("../handle/getInformation.php",{},function(data){
		var user = eval("("+data+")") ;
		var sex = user.sex == null || user.sex == "" ? "不明" : user.sex ;
		var src = user.face ;
		$(".username").html("<span>"+user.username+"</span>") ;
		$("#user").html(user.username) ;
		$("#signature").val(user.signature) ;
		$("#sex").val(sex) ;
		$("#address").val(user.address) ;
		if(src!=null&&src!="")
		{
			src = "../info/face/"+user.user_id+"/"+src ;
			$(".pic").attr("src",src) ;
		}
	});
});