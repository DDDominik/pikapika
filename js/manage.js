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
	var manageObj ;
	$.post("../handle/getUploadVideo.php",{},function(data){
		var msg = eval("("+data+")") ;
		manageObj = new createManageObj(msg.message) ;
	})
	$("ul li a").click(function(){
		var id = $(this).attr("id") ;
		$("ul li a").attr("class","") ;
		$(this).attr("class","now") ;
		manageObj.change(id) ;
		manageObj.showVideo() ;
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

function createManageObj(msg){
	this.items = msg.length ;
	this.now = 0 ;                 // 0 全部  1 娱乐  2 动画  3 科技  4 其它 
	this.info = msg ;
	this.change = function(n){
		this.now = n ;
	}
	this.showVideo = function(){
		$(".manage_container").empty() ;
		for(var i = 0 , cnt = 0 ; i < this.items ; i++)
		{	
			var tid = this.info[i].category_id ; 
			if( this.now==0 || tid==this.now )
			{
				cnt++ ;
				var category = this.info[i].category_name ;
				var cid = this.info[i].category_id ;
				var name = this.info[i].name ;
				var click = avoidBigNum(this.info[i].clicked) ;
				var comment = avoidBigNum(this.info[i].commented) ;
				var collect = avoidBigNum(this.info[i].collected) ;
				var great = avoidBigNum(this.info[i].greated) ;
				var time = this.info[i].upload_time ;
				var vid = this.info[i].video_id ;
				var pic = "../info/video/"+vid+"/"+this.info[i].picture ;
				var marquee = avoidBigNum(this.info[i].marquee) ;
				$(".manage_container").append('<div class="manage"><img src="'+pic+'"><div class="co_r"><div class="co_t"><span class="tag"><a href="../html/category.html?c='+cid+'">'+category+'</a></span><span class="video_name"><a target="_blank" href="'+'play.html?id='+vid+'">'+name+'</a></span></div><div class="co_d"><span class="click" title="点击"><i class="iconfont">&#xe633; </i>'+click+'</span><span class="comment" title="评论"><i class="iconfont">&#xe6b8; </i>'+comment+'</span><span class="collect" title="收藏"><i class="iconfont">&#xe601; </i>'+collect+'</span><span class="great" title="赞"><i class="iconfont">&#x343f; </i>'+great+'</span><span class="marquee" title="弹幕"><i class="exiconfont">&#xe60b; </i>'+marquee+'</span><span title="上传时间"><i class="iconfont">&#x3435; </i>'+time+'</span><span class="delete" id="'+vid+'">X</span><br><br><span class="edit"><a href="edit.html?id='+vid+'">编辑信息</a></span></div></div></div>') ;
			}
		}
		if( cnt == 0 )
		{
			$(".manage_container").append("<div class='collections_no'><span class='no_msg'>没有相关数据</span></div>") ;
	 	}
	 	$(".manage").hover(function(){
			$(this).find(".delete").show() ;
		},function(){
			$(this).find(".delete").hide() ;
		});
		$(".delete").click(function(){
			if(confirm("确定删除?"))
			{
				var vid = $(this).attr("id") ;
				$.post("../handle/deleteVideo.php",{vid:vid},function(data){
					alert("删除成功!"+data) ;
					window.location.href = "../html/manage.html" ;
				});
			}
		});
	}
	this.showVideo() ; 
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