$(document).ready(function(){
	var url = window.location.href ;
	var v_id = url.substring(url.lastIndexOf("=") + 1) ;
	var isLogin = false ;
	var isAddClick = false ;
	var videoObj = document.getElementById("video_view") ;
	var currentTime = 0 ;
	var marqueeObj ;
	var _biu ;
	$("#video_id").val(v_id) ;
	$.get("../handle/isLogin.php",function(data){
		if(data=="")
		{
			hideit() ;
		}
		else
		{
			isLogin = true ;
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
				$(".user_level").val(user.level) ;
				$(".level").attr("src",icon) ;
				if(user.face!=null)
				{
					$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
				}
			});
			showit() ;
		}		
	});
	$.post("../handle/getVideoInformation.php",
		{
			id: v_id
		},
		function(data){
			var video = eval("("+data+")") ;
			var arr = video.tag.split(",") ;
			var src = video.face ;
			var tag = "" ;
			for(var i = 0 ; i < arr.length ; i++)
			{
				tag += " "+arr[i] ;
			}
			$("#category").html(video.category_name) ;
			$("#tag").html(tag) ;
			$("#video_name").html(video.name) ;
			$("#time").append(video.upload_time) ;
			$("#click").append(avoidBigNum(video.clicked)) ;
			$("#collect").append(avoidBigNum(video.collected)) ;
			$("#mq").append(avoidBigNum(video.marquee)) ;
			$("#say_great").append("("+avoidBigNum(video.greated)+")") ;
			$("#uploader_name").html(video.username) ;
			$("#description").html(video.description) ;
			$("#submit_amount").append(avoidBigNum(video.submit)) ;
			if(src!=null&&src!="")
			{
				$("#uploader_face").attr("src","../info/face/"+video.user_id+"/"+src) ;
			}
			$("#video_view").append("<source src='"+"../info/video/"+v_id+"/"+video.src+"'></source>") ;
	});
	$.post("../handle/getMarquee.php",
		{
			vid:v_id
		},function(data){
			var msg = eval("("+data+")") ;
			marqueeObj = new createMarqueeObj(msg.message) ;
	});
	videoObj.addEventListener("timeupdate", function(){
    	var Time = Math.floor(videoObj.currentTime) ; //获取当前播放时间
    	if(Time==currentTime+1)
    	{
    		marqueeObj.timePass() ;
    		marqueeObj.launch() ;
    	}
    	else if(Time != currentTime)
    	{
    		marqueeObj.goTime(Time) ;
    	}
    	currentTime = Time ;
	});
	videoObj.addEventListener("pause",function(){
		var ma = document.getElementsByTagName("marquee") ;
		for(var i = 0 ; i < ma.length ; i++)
		{
			ma[i].stop() ;
		}
	});
	videoObj.addEventListener("play",function(){
		var ma = document.getElementsByTagName("marquee") ;
		for(var i = 0 ; i < ma.length ; i++)
		{
			ma[i].start() ;
		}
		marqueeObj.launch() ;
	});
	videoObj.onplaying = function() {
		if(!isAddClick)
		{
			$.post("../handle/addClick.php",
			{
				id:v_id 
			});
			isAddClick = true ;
		}
		if(isLogin)
		{
			$.post("../handle/addHistory.php",
			{
				id: v_id
			});
		}
	}
	$(".danmu_launch").click(function(){
		var dan = trim($(".danmu_info").val()) ;
		if(!isLogin)
		{
			alert("请先登录") ;
			return ;
		}
		if(dan=="")
		{
			alert("不能发空弹哦!") ;
		}
		else if(dan.length<=30)
		{
			var cl = 'm' + rd(1,1000) ;
			var speed = rd(8,15) ;
			var size = 6 - parseInt($(".user_level").val()) ;
			$(".biubiubiu").append('<marquee id="'+cl+'" style="top:'+rd(10,440)+'" behavior="slide" direction="left" width="3000px"  scrollamount="'+speed+'"><h'+size+' style="color:white">'+dan+'</h'+size+'></marquee>') ;
			$.post("../handle/addMarquee.php",
			{
				sp: speed ,
				time: currentTime ,
				vid: v_id ,
				level: $(".user_level").val() ,
				msg: dan
			},function(){
				$(".danmu_info").val("") ;
			});
			if(videoObj.paused)
			{	
				biu = document.getElementById(cl) ;
				setTimeout("biu.stop()",10) ;
			}
		}
		else
		{
			alert("超过30字！") ;
		}
	});
	$("#search_button").click(function(){
		if(trim($("#search").val())!="")
			window.open("../html/search.html?keyword=" + $("#search").val()) ; 
	});
	$("#say_great").click(function(){
		$.get("../handle/isLogin.php",function(data){
			if( data=="" ) alert("请先登录!") ;
		    else
		    {
				$.post("../handle/sayGreat.php",
					{
						id: v_id
					},
					function(data){
					if(data=="0")
					{
						alert("您已经点过赞了哦!") ;
					}
					else
					{
						$("#say_great").html("<i class='iconfont'>&#x343f;</i>("+data+")") ;
					}
				});
			}
		});
	});
	$("#collect_it").click(function(){
		$.get("../handle/isLogin.php",function(data){
			if( data=="" ) alert("请先登录!") ;
		    else
		    {
				$.post("../handle/collectVideo.php",
				{
					vid: v_id
				},
				function(data){
					if(data=="0") 
					{
						alert("您已经收藏过了哦") ;
					} 
					else
					{
						alert("收藏成功！") ;
						$("#collect").html('<i class="iconfont">&#xe601; </i>'+data) ;
					} 
				});
			}
		});
	});
	var pageObj ;
	$.post("../handle/getComment.php",
		{
			id: v_id
		},
		function(data){
			var comment = eval("("+data+")") ;
			pageObj = new createPageObj(comment.message,v_id) ;
			$("#comment_amount").html(avoidBigNum(pageObj.items)) ;		
	});
	$(document).click(function(e){
		var p_id = $(e.target).attr("id") ;
		var cls = $(e.target).attr("class") ;
		if(p_id!=undefined)
		{
			if(p_id.substring(0,2)=="p_")
			{
				switch(p_id)
				{
				case "p_prev" : pageObj.prevPage() ; break ;
				case "p_next" : pageObj.nextPage() ; break ;
				case "p_top"  : pageObj.toPage(1)  ; break ;
				case "p_last" : pageObj.lastPage() ; break ;
				case "p_now"  :
				case "p_all"  : break ;
				default : pageObj.toPage(parseInt(p_id.substring(p_id.lastIndexOf("_") + 1))) ;
				} 
				pageObj.showPage() ;
				pageObj.showComment() ;
			}
		}
		switch(cls)
		{
		case "join_it" :
			$(e.target).parent().next().toggle() ; break ;
		case "reply" : 
			$(e.target).parent().next().toggle() ; break ;
		case "reply_button" :
		{
			var $list = $(e.target).parent().prev().prev() ;
			var msg = $(e.target).prev().val() ;
			if( trim(msg)=="" )
			{
				alert("回复内容不能为空！") ;
			}
			else
			{
				var url = window.location.href ;
				var v_id = url.substring(url.lastIndexOf("=") + 1) ;
				var c_id = $(e.target).parent().parent().parent().attr("id").substring(3) ;
				$.post("../handle/replyComment.php",
					{
						vid: v_id , 
						cid: c_id ,
						msg: msg
					},
					function(){
						location.reload(true) ;
				});
			}
			break ;
		}
		}
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
	// 测试开始
	// $(".join_it").click(function(){
	// 	$(this).parent().next().toggle() ;
	// });
	// $(".reply").click(function(){
	// 	$(this).parent().next().toggle() ;
	// });
	// $(".reply_button").click(function(){
	// 	var $list = $(this).parent().prev().prev() ;
	// 	var msg = $(this).prev().val() ;
	// 	if( trim(msg)=="" )
	// 	{
	// 		alert("回复内容不能为空！") ;
	// 	}
	// 	else
	// 	{
	// 		var url = window.location.href ;
	// 		var v_id = url.substring(url.lastIndexOf("=") + 1) ;
	// 		var c_id = $(this).parent().parent().parent().attr("id").substring(3) ;
	// 		$.post("../handle/replyComment.php",
	// 			{
	// 				vid: v_id , 
	// 				cid: c_id ,
	// 				msg: msg
	// 			},
	// 			function(data){
	// 				location.reload(true) ;
	// 		});
	// 		$(this).prev().val("") ;
	// 		$(this).parent().hide() ;
	// 		alert("回复成功！")
	// 	}
	// });
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

function createPageObj(msg,vid)
{
	this.id = vid ;
	this.per = 10 ;
	this.nowPage = 1 ;
	this.items = msg.length ;
	this.pages = Math.ceil( this.items / this.per ) ;
	this.info = msg ;
	this.isFirstPage = function() {
		return this.nowPage == 1 ;
	}
	this.isLastPage = function() {
		return this.nowPage == this.pages ;
	}	
	this.nextPage = function() {
		this.nowPage++ ;
	}
	this.prevPage = function() {
		this.nowPage-- ;
	}
	this.lastPage = function() {
		this.nowPage = this.pages ;
	}
	this.toPage = function(data) {
		this.nowPage = data ;
	}
	this.showPage = function() {
		if(this.pages==0) return ;
		$(".page").empty() ;
		$(".page").append("<span class='page_item' id='p_all'>共"+(this.pages)+"页</span>") ;
		if(!this.isFirstPage())
		{	
			$(".page").append("<a class='page_item' id='p_top'>首页</a>") ;
			$(".page").append("<a class='page_item' id='p_prev'>上页</a>") ;
		}
		var begin = ( this.nowPage - 2 > 0 && this.nowPage + 2 < this.pages) ? this.nowPage - 2 : 1 ;
		var end = ( this.nowPage - 2 > 0 && this.nowPage + 2 < this.pages ) ? this.nowPage + 2 : this.pages ;
		for(var i = begin ; i <= end ; i++)
		{
			if(i==this.nowPage)
				$(".page").append("<strong class='page_item' id='p_now'>"+i+"</strong>") ;
			else
				$(".page").append("<a class='page_item' id='p_"+i+"'>"+i+"</a>") ;
		}
		if(!this.isLastPage())
		{
			$(".page").append("<a class='page_item' id='p_next'>下页</a>") ;
			$(".page").append("<a class='page_item' id='p_last'>末页</a>") ;
		}
	}
	this.showComment = function(){
		if(this.items==0) return ;
		$(".comment_list").empty() ;
		begin = ( this.nowPage - 1 ) * this.per + 1 ;
		end = this.nowPage * this.per < this.items ? this.nowPage * this.per : this.items ;
		for(var i = begin ; i <= end ; i++)
		{
			var name = this.info[i-1].username ;   
			var id = this.info[i-1].comment_id ; 
			var msg = this.info[i-1].comment_msg ;
			var time = this.info[i-1].publish_time ;
			var face = this.info[i-1].face ;
			if( face == null || face == "" ) face = '../pic/head.png' ;
			else face = "../info/face/"+this.info[i-1].user_id+"/"+face ;
			$(".comment_list").append("<li id='li_"+id+"'>"+"<img class='face_one' src='"+face+"'>"+"<div class='l_title'><span class='l_num'>#"+id+"  "+"</span><span class='l_user'>"+name+"</span></div>"+"<div class='l_content'>"+msg+"</div>"+"<div class='l_info'><span class='l_time'>"+time+"</span><a class='reply'>回复</a></div>"+'<div class="reply_container"><ul class="reply_list"></ul><div class="join"><a class="join_it">参与回复</a></div><div class="reply_send"><img src="'+face+'" class="face face_two"><textarea name="reply" class="reply_info" cols="60" rows="5" placeholder="在这里输入回复"></textarea><input type="submit" class="reply_button" value="回复"></div></div>'+"</li>") ;					
			$.post("../handle/getReply.php",
				{
					vid: this.id ,
					cid: id
				},
				function(data){
					var id = data.substring(data.lastIndexOf("}")+1) ;
					var da = data.substring(0,data.lastIndexOf("}")+1) ;
				 	var rp = eval("("+da+")") ;
				 	var n = rp.message.length ;
				 	for(var j = 0 ; j < n ; j++)
				 	{
				 		var obj = rp.message[j] ;
				 		var uid = obj.user_id ;
				 		var pic = obj.face ;
				 		var p = ( pic == "" || pic == null ) ? "../pic/head.png" : "../info/face/"+uid+"/"+pic ;
				 		var name = obj.username ;
				 		var msg = obj.msg ;
				 		var time = obj.reply_time ;
				 		$(".comment_list").find("#li_"+id).find(".reply_list").append('<li><img src="'+p+'" class="replier_face"><div><span>  '+name+'</span><span> :  '+msg+'</span></div><span class="reply_time"> '+time+'</span></li>') ;
				 	}
				 	if(n>0)
				 	{
				 		$(".comment_list").find("#li_"+id).find(".reply_container").show() ;
				 		$(".comment_list").find("#li_"+id).find(".reply_send").hide() ;
				 	}
			});	
		}
	}
	this.showPage() ;
	this.showComment() ;
	//$(".reply_list").append('$(".join_it").click(function(){$(this).parent().next().toggle() ;});$(".reply").click(function(){$(this).parent().next().toggle() ;});$(".reply_button").click(function(){var $list = $(this).parent().prev().prev() ;var msg = $(this).prev().val() ;if( trim(msg)=="" ){alert("回复内容不能为空！") ;}else{var url = window.location.href ;var v_id = url.substring(url.lastIndexOf("=") + 1) ;var c_id = $(this).parent().parent().parent().attr("id").substring(3) ;$.post("../handle/replyComment.php",{vid: v_id , cid: c_id ,msg: msg},function(data){location.reload(true) ;});$(this).prev().val("") ;$(this).parent().hide() ;alert("回复成功！")}});') ;
	//$(".page").append('<script>$(".page_item").click(function(){var p_id = $(this).attr("id") ;if(p_id.substring(0,2)=="p_"){switch(p_id){case "p_prev" : pageObj.prevPage() ; break ;case "p_next" : pageObj.nextPage() ; break ;case "p_top"  : pageObj.toPage(1)  ; break ;case "p_last" : pageObj.lastPage() ; break ;case "p_now"  :case "p_all"  : break ;default : pageObj.toPage(parseInt(p_id.substring(p_id.lastIndexOf("_") + 1))) ;} pageObj.showPage() ;pageObj.showComment() ;}});</script>') ;
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

function createMarqueeObj(msg){
	this.current = 1 ;
	this.nowTime = 0 ;
	this.items = msg.length ;
	this.info = msg ;
	this.timePass = function() {
		this.nowTime ++ ;
	}
	this.goTime = function(data) {
		$(".biubiubiu").empty() ;
		this.nowTime = data ;
		this.current = this.items + 1 ;
		for(var i = 0 ; i < this.items ; i++)
		{
			if(this.info[i].time >= data)
			{
				this.current = i + 1 ;
				this.launch() ;
				break ;
			}
		}
	}
	this.launch = function() {
		if(this.current <= this.items)
		{
			while( this.current <= this.items && parseInt(this.info[this.current-1].time) <= parseInt(this.nowTime) )
			{
				var speed = this.info[this.current-1].speed ;
				var ms = this.info[this.current-1].msg ;
				var size = 6 - parseInt(this.info[this.current-1].size) ;
				$(".biubiubiu").append('<marquee style="top:'+rd(10,440)+'" behavior="slide" direction="left" width="3000px"  scrollamount="'+speed+'"><h'+size+' style="color:white">'+ms+'</h'+size+'></marquee>') ;
				this.current ++ ;
			}
		}
	}
}

function rd(n,m)
{
    var c = m - n + 1 ;  
    return Math.floor( Math.random() * c + n ) ;
}
