$(document).ready(function(){
	$("#name").keyup(function(){
		var name = $("#name").val() ;
		if( name == "" )
		{
			$("#nameCheck").html("*用户名不能为空").css("color","red") ;
		}
		else if( name.length > 8 )
		{
			$("#nameCheck").html("*用户名不能超过8个字符").css("color","red") ;
		}
		else
		{
			$.post("../handle/judgeUsername.php",
			{
				username: name 
			},	
			function(data){
				var color = data.indexOf("*")==-1 ? "green" : "red" ;
				$("#nameCheck").html(data).css("color",color) ;
			});
		}
		appear() ;
	});
	$("#password").keyup(function(){
		var str = $("#password").val() ;
		if(str.length < 6)
			$("#passwordCheck").html("*密码不能少于6位").css("color","red") ;
		else
			$("#passwordCheck").html("√").css("color","green") ;
		check() ;
		appear() ;
	});
	$("#cpassword").keyup(function(){
		if($("#cpassword").val()=="")
			$("#cpasswordCheck").html("*不能为空").css("color","red") ;
		check() ;
		appear() ;
	});
});

function check()
{
	var msg = $("#cpassword").val()==$("#password").val() ? "√" : "*密码不同" ;
	var color = msg.indexOf("*")==-1 ? "green" : "red" ;
	$("#cpasswordCheck").html(msg).css("color",color) ;
}

function appear()
{
	var a = $("#nameCheck").css("color") == "rgb(0, 128, 0)" ;
	var b = $("#passwordCheck").css("color") == "rgb(0, 128, 0)" ;
	var c = $("#cpasswordCheck").css("color") == "rgb(0, 128, 0)" ;
	( a & b & c ) ? $(".button").show() : $(".button").hide() ;
}