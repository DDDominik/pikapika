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
	$.post("../handle/getInformation.php",{},function(data){
		var user = eval("("+data+")") ;
		$(".name").html("<br/>"+user.username) ;
		if(user.face!=null&&user.face!="")
		{
			$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
		}
	});
	$("#name").keyup(function(){
		var str = $("#name").val() ;
		if( str == "" ) $("#n_w").html("必填").css("color","red") ;
		else
		{
			str.length > 20 ? $("#n_w").html("超出20字").css("color","red") : $("#n_w").html("√").css("color","green") ;
		}
		check() ;
	});
	$("#description").keyup(function(){
		var str = $("#description").val() ;
		if( str == "" ) $("#d_w").html("必填").css("color","red") ;
		else
		{
			str.length > 200 ? $("#d_w").html("超出200字").css("color","red") : $("#d_w").html("√").css("color","green") ;
		}
		check() ;
	});
	$("#tag").keyup(function(){
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
		check() ;
	});
	$("#video").change(function(){
		var path = $("#video").val() ;
		var format = path.substring(path.lastIndexOf(".") + 1).toLowerCase() ;
		switch(format)
		{
			case "avi" :
			case "mpg" :
			case "mpeg" :
			case "wmv" :
			case "wma" :
			case "asf" :
			case "mid" :
			case "mp4" :
			{
				$("#request").html("√").css("color","green") ;
				break ;
			}
			default : 
			{
				$("#request").html("格式错误,仅支持avi,mpg,mpeg,wmv,wma,asf,mid,mp4格式").css("color","red") ;
			}
		}
		check() ;
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
				case "jpg" :
				case "gif" :
				case "png" :
				case "jpeg" : 
				{
					$(".button").show() ; 
					$("#warning").hide() ;
					break ;
				}
				default : 
				{
					face = "../pic/error.png" ; 
					$(".button").hide() ;
					$("#warning").show() ;
				}
			}
			$("#upload_face").attr("src",face) ;
			$("#preview").show() ;		
		}
		else
		{
			$("#preview").hide() ;
			$(".button").hide() ;
			$("#warning").show() ;
		}
		check() ;
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
	var a = $("#request").css("color") == "rgb(0, 128, 0)" ;
	var b = $("#upload_face").attr("src") != "../pic/error.png" ;
	var c = $("#n_w").css("color") == "rgb(0, 128, 0)" ;
	var d = $("#d_w").css("color") == "rgb(0, 128, 0)" ;
	var e = $("#t_w").css("color") == "rgb(0, 128, 0)" ;
	if( a & b & c & d & e ) 
		$("#sbm").show() ;
	else
		$("#sbm").hide() ;
}