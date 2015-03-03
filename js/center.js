$(document).ready(function(){
	$.get("../handle/isLogin.php",function(data){
		if( data=="" )
		{
			alert("请先登录!") ;
			location.href = "../html/login.html" ;
		}
	});
	$("#control").click(function(){
		$(".son_shape").slideToggle("fast") ;
	});
	$.post("../handle/getInformation.php",{},function(data){
		var user = eval("("+data+")") ;
		var score = user.score ;
		var icon = "../pic/" ;
		var level ;
		var max ;
		switch(user.level)
		{
		case "1" : icon += "poke.jpg"   ; level = "LV1 精灵球" ; max = "50"    ; break ;
		case "2" : icon += "safari.jpg" ; level = "LV2 狩猎球" ; max = "400"   ; break ;
		case "3" : icon += "great.jpg"  ; level = "LV3 超级球" ; max = "2000"  ; break ;
		case "4" : icon += "ultra.jpg"  ; level = "LV4 高级球" ; max = "10000" ; break ;
		case "5" : icon += "master.jpg" ; level = "LV5 大师球" ; max = "max"   ; break ;
		}
		if( max == "max" )
		{
			score = max ;
			width = 100 ;
		} 
		else
		{
			score += "/" + max ;
			width = 100 * ( parseInt(score)/parseInt(max) ) ;
		} 
		$(".score_show").css("width",width) ;
		$(".level_icon").attr("src",icon) ;
		$(".level_info").html(level) ;
		$(".score_info").html(score) ;
		$(".name").html(user.username) ;
		if(user.face!=null&&user.face!="")
		{
			$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
		}
		$("#submit").html(avoidBigNum(user.submit)) ;
		$("#collect").html(avoidBigNum(user.collect)) ;
	});
	$.post("../handle/getClickSum.php",{},function(data){
		$("#sum_num").html(avoidBigNum(data)) ;
	});
	$(".touxiang_pic").hover(function(){
		$(".change").show() ;
	},function(){
		$(".change").hide() ;
	});
	$(".change").hover(function(){
		$(".change").show() ;
	},function(){
		$(".change").hide() ;
	});
	$(".pic").hover(function(){
		$("#menu").show() ;
	},
	function(){
		$("#menu").hide() ;
	});
	$("#menu").hover(function(){
		$("#menu").show() ;
	},
	function(){
		$("#menu").hide() ;
	});
});

function avoidBigNum(data)
{
	if(typeof(data)=="string") data = parseInt(data) ;
	if(data>9999)
	{
		data /= 10000 ;
		data += "万" ;
	}
	return data ;
}