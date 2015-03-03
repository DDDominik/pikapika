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
		$(".username").html("<span>"+user.username+"</span>") ;
		var email = user.email ;
		var telnum = user.telnum ;
		var src = user.face ;
		if(email==null) email = "无" ;
		if(telnum==null) telnum = "无" ;
		$(".myemail").html("<span>"+email+"</span>") ;
		$(".mytel").html("<span>"+telnum+"</span>") ;
		if(src!=null&&src!="")
		{
			src = "../info/face/"+user.user_id+"/"+src ;
			$(".pic").attr("src",src) ;
		}
	});
	$("#set_e").click(function(){
		$("#set_email").slideToggle() ;
	});
	$("#set_t").click(function(){
		$("#set_tel").slideToggle() ;
	});
	$("#change").click(function(){
		$("#change_psw").slideToggle() ;
	});
	$("#psw").keyup(function(){
		check() ;
	});
	$("#cpsw").keyup(function(){
		check() ;
	});
	$("#email").keyup(function(){
		if(isEmail($("#email").val()))
		{
			$("#eml_w").hide() ;
			$("#eml_sbm").show() ;
		} 
		else
		{
			$("#eml_w").show() ;
			$("#eml_sbm").hide() ;
		}   
	});
	$("#tel").keyup(function(){
		if(isTelnum($("#tel").val())) 
		{
			$("#tel_w").hide() ;
			$("#tel_sbm").show() ;
		}  
		else
		{
			$("#tel_w").show() ;
			$("#tel_sbm").hide() ;
		} 
	});
});

function check()
{
	var psw = $("#psw").val() ;
	var cpsw = $("#cpsw").val() ;
	if(psw.length<6)
		$("#pswCheck").html("少于6位").css("color","red") ;
	else
		$("#pswCheck").html("√").css("color","green") ;
	if(psw!=cpsw)
		$("#cpswCheck").html("两次不同").css("color","red") ;
	else
		$("#cpswCheck").html("√").css("color","green") ;
	if($("#cpswCheck").text()==$("#pswCheck").text())
		$("#submitpsw").show() ;
	else
		$("#submitpsw").hide() ;
}

function isTelnum(data)
{
	var rule = /^1[3,5,8]\d{9}$/ ;
	return rule.test(data) ;
}

function isEmail(data)
{
	var rule = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/ ;
	return rule.test(data) ;	
}