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
			$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
		}
		showit() ;
	});
	var historyObj ;
	$.post("../handle/getHistory.php",{},function(data){
		var msg = eval("("+data+")") ;
		historyObj = new createHistoryObj(msg.message) ;
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

function trim(str)
{ 
　　 return str.replace(/(^\s*)|(\s*$)/g, "");
}

function createHistoryObj(msg){
	this.items = msg.length ;
	this.info = msg ;
	this.show = function() {
		if(this.items>0)
		{
			$(".result_container").empty() ;
			for(var i = 0 ; i < this.items ; i++)
			{
				var category = this.info[i].category_name ;
				var name = this.info[i].name ;
				var author = this.info[i].author ; 
				var click = avoidBigNum(this.info[i].clicked) ;
				var comment = avoidBigNum(this.info[i].commented) ;
				var collect = avoidBigNum(this.info[i].collected) ;
				var great = avoidBigNum(this.info[i].greated) ;
				var marquee = avoidBigNum(this.info[i].marquee) ;
				var time = this.info[i].last_play ;
				var vid = this.info[i].video_id ;
				var pic = "../info/video/"+vid+"/"+this.info[i].picture ;
				$(".result_container").append('<div class="result_list"><a target="_blank" href="../html/play.html?id='+vid+'"><img src="'+pic+'"></a><div class="result_info"><div class="info_top"><span class="info_type">'+category+'</span><span class="info_name"><a target="_blank" href="'+'play.html?id='+vid+'">'+name+'</a></span></div><div class="info_mid"><span class="info_uploader" title="作者"><i class="iconfont">&#xe630; </i>'+author+'</span><span class="info_click" title="点击"><i class="iconfont">&#xe633; </i>'+click+'</span><span class="info_comment" title="评论"><i class="iconfont">&#xe6b8; </i>'+comment+'</span><span class="info_great" title="赞"><i class="iconfont">&#x343f; </i>'+great+'</span><span class="info_collect" title="收藏"><i class="iconfont">&#xe601; </i>'+collect+'</span><span class="info_marquee" title="弹幕"><i class="exiconfont">&#xe60b; </i>'+marquee+'</span></div><div class="info_bottom"><span class="info_time"><i class="iconfont" style="font-size:14px">&#x3435;</i> Last Play: '+time+'</span></div></div></div>') ;
			}
		}
		else
		{

		}
	}
	this.show() ;
}