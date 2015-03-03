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
		$(".name").html("<br/>"+user.username) ;
		if(user.face!=null&&user.face!="")
		{
			$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
		}
	});
	var url = window.location.href ;
	var vid = url.substring(url.indexOf("=")+1) ;
	$.post("../handle/getVideoInformation.php",
		{
			id: vid
		},function(data){
		$("#vid").val(vid) ;
		var video = eval("("+data+")") ;
		$("#name").val(video.name) ;
		$("#description").val(video.description) ;
		$("#tag").val(video.tag) ;
		$(".two").html(video.name).attr("href","../html/play.html?id="+video.video_id) ;
		$("#upload_face").attr("src","../info/video/"+video.video_id+"/"+video.picture) ;
		$("#picture").append("<style>input[type='file']::-webkit-file-upload-button{background-image:url(../info/video/"+video.video_id+"/"+video.picture+");") ;
	});
	var act = ["编辑","完成"] ;
	$(".ed").click(function(){
		if( $(this).text() == act[0] )
		{
			$(this).text(act[1]) ;
			$(this).prev().removeAttr("readonly").focus() ;
		}
		else
		{
			if($(this).next().css("color")=="rgb(0, 128, 0)")
			{
				$(this).next().hide() ;
				$(this).text(act[0]) ;
				$(this).prev().attr("readonly","readonly") ;
				check() ;
			}
			else
			{
				alert("信息有误！") ;
			}
		}
	});
	$("#name").keyup(function(){
		if($(this).next().text()==act[1])
		{
			$("#n_w").show() ;
			var str = $("#name").val() ;
			if( str == "" ) $("#n_w").html("必填").css("color","red") ;
			else
			{
				str.length > 20 ? $("#n_w").html("超出20字").css("color","red") : $("#n_w").html("√").css("color","green") ;
			}
		}
	});
	$("#description").keyup(function(){
		if($(this).next().text()==act[1])
		{
			$("#d_w").show() ;
			var str = $("#description").val() ;
			if( str == "" ) $("#d_w").html("必填").css("color","red") ;
			else
			{
				str.length > 200 ? $("#d_w").html("超出200字").css("color","red") : $("#d_w").html("√").css("color","green") ;
			}
		}
	});
	$("#tag").keyup(function(){
		if($(this).next().text()==act[1])
		{
			$("#tag").show() ;
			var str = $("#tag").val() ;
			if( str == "" ) $("#t_w").html("必填").css("color","red") ;
			else
			{
				var arr = str.split(",") ;
				for( var i = 0 ; i < arr.length ; i++ )
				{
					if(arr[i]=="")
					{
						$("#t_w").html("不能有空tag").css("color","red") ;
						break ;
					}
					else if( i == arr.length - 1 )
					{
						$("#t_w").html("√").css("color","green") ;
					}
				}
				if( isRepeat(arr) )
					$("#t_w").html("不能有重复tag").css("color","red") ;
			}
		}
	});
	$("#picture").change(function(){
		window.URL = window.URL || window.webkitURL ;	
		if(window.URL)
		{
			var img = document.getElementById("picture") ;
			var face = window.URL.createObjectURL(img.files[0]) ;
			var path = $("#picture").val() ;
			var format = path.substring(path.lastIndexOf(".") + 1).toLowerCase() ;
			switch(format)
			{
				case "jpg"  :
				case "gif"  :
				case "png"  :
				case "jpeg" : 
				{
					$("#preview").hide() ;
					break ;
				}	            
				default : 
				{
					face = "../pic/error.png" ; 
					$("#preview").show() ;
				}
			}
			$("#picture").append("<style>input[type='file']::-webkit-file-upload-button{background-image:url("+face+");") ;	
		}
		else
		{
			$("#preview").show() ;
		}
		check() ;
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
	$(".button").click(function(){
		$(this).hide() ;
	});
});

function isRepeat(arr)
{
    var hash = {} ;
    for(var i in arr) 
    {
        if(hash[arr[i]])
            return true ;
        hash[arr[i]] = true;
    }
    return false;
}

function check()
{
	var a = $("#n_w").css("display") == "none" || $("#n_w").css("display") == "inline" ;
	var b = $("#d_w").css("display") == "none" || $("#d_w").css("display") == "inline" ;
	var c = $("#t_w").css("display") == "none" || $("#t_w").css("display") == "inline" ;
	var d = $("#preview").css("display") == "none" || $("#preview").css("display") == "inline" ;
	( a & b & c & d ) ? $("#sbm").show() : $("#sbm").hide() ;
}