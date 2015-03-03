$(document).ready(function(){
	var url = window.location.href ;
	var c_id = url.substring(url.lastIndexOf("=") + 1) ;
	$c = $(".index").parent().children().eq(c_id).find("a") ;
	$c.addClass("focus") ;
	$(".category_name").text($c.text()) ;
	$.get("../handle/isLogin.php",function(data){
		if(data=="")
		{
			hideit() ;
		}
		else
		{
			$.post("../handle/getInformation.php",{},function(data){
				var user = eval("("+data+")") ;
				$("#user").html(user.username) ;
				var icon = "../pic/" ;
				switch(user.level)
				{
				case "1" : icon += "poke.jpg"   ; break ;
				case "2" : icon += "safari.jpg" ; break ;
				case "3" : icon += "great.jpg"  ; break ;
				case "4" : icon += "ultra.jpg"  ; break ;
				case "5" : icon += "master.jpg" ; break ;
				}
				$(".level").attr("src",icon) ;
				if(user.face!=null&&user.face!="")
				{
					$("#face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
				}
			});
			showit() ;
		}		
	});
	$.post("../handle/loadScroll.php",{cid:c_id},function(data){
		var list = eval("("+data+")") ;
		$(".video_container").empty() ;
		for(var i = 0 ; i < list.message.length ; i++)
		{
			var info = list.message[i] ;
			$(".video_container").append('<li class="video_list"><a href="../html/play.html?id='+info.video_id+'"><div><span class="v_name">'+info.name+'</span></div><img src="'+'../info/video/'+info.video_id+'/'+info.picture+'"></a></li>') ;
		}
	});
	$.post("../handle/loadIndex.php",{cid:c_id},function(data){
		var list = eval("("+data+")") ;
		for(var i = 0 ; i < list.message.length ; i++)
		{
			var info = list.message[i] ;
			$(".click_top").append('<li id='+info.video_id+'><a href="../html/play.html?id='+info.video_id+'"><div class="vl_list"><div><span class="vl_name" >'+info.name+'</span></div><img src="'+'../info/video/'+info.video_id+'/'+info.picture+'"></div></a></li>') ;
			var top = $(".click_top").find("#"+info.video_id).offset().top - 170 ;
			var left = $(".click_top").find("#"+info.video_id).offset().left - 60 ;
			$("#"+info.video_id).append( '<div class="box" style="left:'+left+';top:'+top+';"><div class="small_box"><div class="name">'+info.name+'</div><br><span><div></div></span><span class="list"><span><i class="iconfont">&#xe633; </i>'+info.clicked+'</span><span><i class="iconfont">&#xe601; </i>'+info.collected+'</span><span><i class="iconfont">&#xe6b8; </i>'+info.commented+'</span><span><i class="iconfont">&#x343f; </i>'+info.greated+'</span><span><i class="iconfont">&#xe60b; </i>'+info.marquee+'</span></span><br><div class="introduce">'+info.description+'</div><br><span class="yanse"><i class="iconfont">&#xe630; </i>'+info.author+'</span><span class="yanse"><i class="iconfont">&#x3435; </i>'+info.upload_time+'</span></div></div>' ) ;
		}
		$(".click_top li").hover(function(){
			$(this).find(".box").show() ;
		},function(){
			$(this).find(".box").hide() ;
		});
	});
	$.post("../handle/getAllVideoByCategory.php",{cid:c_id},function(data){
		var list = eval("("+data+")") ;
		for(var i = 0 ; i < list.message.length ; i++)
		{
			var info = list.message[i] ;
			$(".category_info").append('<li id="v_'+info.video_id+'"><a href="../html/play.html?id='+info.video_id+'"><div class="vt_list"><div><span class="vt_name" >'+info.name+'</span></div><img src="'+'../info/video/'+info.video_id+'/'+info.picture+'"></div></a></li>') ;
			var top = $(".category_info").find("#v_"+info.video_id).offset().top - 150 ;
			var left = $(".category_info").find("#v_"+info.video_id).offset().left - 50 ;
			$("#v_"+info.video_id).append( '<div class="box" style="left:'+left+';top:'+top+';"><div class="small_box"><div class="name">'+info.name+'</div><br><span><div></div></span><span class="list"><span><i class="iconfont">&#xe633; </i>'+info.clicked+'</span><span><i class="iconfont">&#xe601; </i>'+info.collected+'</span><span><i class="iconfont">&#xe6b8; </i>'+info.commented+'</span><span><i class="iconfont">&#x343f; </i>'+info.greated+'</span><span><i class="iconfont">&#xe60b; </i>'+info.marquee+'</span></span><br><div class="introduce">'+info.description+'</div><br><span class="yanse"><i class="iconfont">&#xe630; </i>'+info.author+'</span><span class="yanse"><i class="iconfont">&#x3435; </i>'+info.upload_time+'</span></div></div>' ) ;
		}
		$(".category_info li").hover(function(){
			$(this).find(".box").show() ;
		},function(){
			$(this).find(".box").hide() ;
		});
	});
	$("#search_button").click(function(){
		if(trim($("#search").val())!="")
			window.open("../html/search.html?keyword=" + $("#search").val()); 
	});
	$("#show").hover(function(){
		$("#items").show() ;
	},
	function(){
		$("#items").hide() ;
	});
	$("#items").hover(function(){
		$("#items").show() ;
	},
	function(){
		$("#items").hide() ;
	});
});

function showit()
{
	$(".t1").hide() ;
	$(".t2").show() ;
}

function hideit()
{
	$(".t1").show() ;
	$(".t2").hide() ;
}

function trim(str)
{ 
　　 return str.replace(/(^\s*)|(\s*$)/g, "");
}

var total = 5 ;
var now = 1 ;
$(document).ready(function(){
	$(".btn").click(function(){		
		$(".btn").attr("class","btn") ;
		$(this).addClass("now") ;
		var r = $(this).index() * 500 + "px" ;
		$(".video_list").animate({right:r},"fast") ;
		now = ( $(this).index() + 1 ) % total ;
	});
});	

function PicNumClick()
{
	$(".btn").eq(now).trigger("click") ;
	setTimeout("PicNumClick()",3000) ;
}

setTimeout("PicNumClick()",3000) ;