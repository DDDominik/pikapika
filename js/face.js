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
		var src = user.face ;
		$(".username").html("<span>"+user.username+"</span>") ;
		if(src!=null&&src!="")
		{
			src = "../info/face/"+user.user_id+"/"+src ;
			$(".pic").attr("src",src) ;
		}
	});
	$("#upface").change(function(){
		window.URL = window.URL || window.webkitURL ;	
		if(window.URL)
		{
			var img = document.getElementById("upface") ;
			var face = window.URL.createObjectURL(img.files[0]) ;
			var path = $("#upface").val() ;
			var format = path.substring(path.lastIndexOf(".") + 1).toLowerCase() ;
			var canCrop = false ;
			switch(format)
			{
				case "jpg" :
				case "gif" :
				case "png" :
				case "jpeg" : 
				{
					$(".button").show() ; 
					$("#warning").hide() ;
					canCrop = true ;	
					break ;
				}
				default : 
				{
					face = "../pic/error.png" ; 
					$(".button").hide() ;
					$("#warning").show() ;
					$("#crop").hide() ;
				}
			}
			$("#upload_face").attr("src",face) ;
			$("#preview").show() ;
			if(canCrop)
			{
				$("#crop_face").attr("src",face) ;
				$("#crop_face").Jcrop({
					onChange: showPreview ,
					onSelect: showPreview ,
					aspectRatio: 1
				}) ;	
				$("#crop").show() ;
			}
		}
		else
		{
			$("#crop").hide() ;
			$("#preview").hide() ;
			$(".button").hide() ;
			$("#warning").show() ;
		}
	});
	$(".button").click(function(){
		$(this).hide() ;
	});
});


function showPreview(coords)
{
	if (parseInt(coords.w) > 0)
	{
		var rx = 100 / coords.w;
		var ry = 100 / coords.h;

		$('#upload_face').css({
			width: Math.round(rx * 200) + 'px',
			height: Math.round(ry * 200) + 'px',
			marginLeft: '-' + Math.round(rx * coords.x) + 'px',
			marginTop: '-' + Math.round(ry * coords.y) + 'px'
		});

		$("#x").val(coords.x) ;
		$("#y").val(coords.y) ;
		$("#w").val(coords.w) ;
		$("#h").val(coords.h) ;
	}
}