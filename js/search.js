$(document).ready(function(){
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
					$(".face").attr("src","../info/face/"+user.user_id+"/"+user.face) ;
				}
			});
			showit() ;
		}		
	});
	var searchResultObj ;
	if(window.location.href.indexOf("=")!=-1)
	{
		var url = window.location.href ;
		var kwd = url.substring(url.indexOf("=")+1) ;
		$("#search").val( decodeURI(kwd) ) ;
		getMessage() ;
	}
	$("#search_button").click(function(){
		getMessage() ;
	});
	$("#rank").change(function(){
		getMessage() ;		
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
	// $(".page_item").click(function(){
	// 	var p_id = $(this).attr("id") ;
	// 	if(p_id.substring(0,2)=="p_")
	// 	{
	// 		switch(p_id)
	// 		{
	// 		case "p_prev" : searchResultObj.prevPage() ; break ;
	// 		case "p_next" : searchResultObj.nextPage() ; break ;
	// 		case "p_top"  : searchResultObj.toPage(1)  ; break ;
	// 		case "p_last" : searchResultObj.lastPage() ; break ;
	// 		case "p_now"  :
	// 		case "p_all"  : break ;
	//      case "p_to"   : searchResultObj.toPage(parseInt($("#page_num").val())) ; break ;                
	// 		default : searchResultObj.toPage(parseInt(p_id.substring(p_id.lastIndexOf("_") + 1))) ;
	// 		} 
	// 		searchResultObj.showPage() ;
	// 		searchResultObj.showResult() ;
	// 	}
	// });
	// $(".o").click(function(){
	// 	$(".o").attr("class","o") ;
	// 	$(this).attr("class","o o_now") ;
	// 	var id = $(this).attr("id") ; 
	// 	id = parseInt(id.substring(2)) ;
	// 	searchResultObj.changeCategory(id) ;
	// 	searchResultObj.showPage() ;
	// 	searchResultObj.showResult() ;
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

function createSearchResultObj(msg,type)
{
	this.items = msg.length ;
	this.per = 3 ;
	this.pages = 1 ;
	this.nowPage = 1 ;
	this.info = msg ;
	this.category = type ;   // 0 全部  1 娱乐  2 动画  3 科技  4 其它        
	this.categoryItemsInfo = new Array() ;
	for(var i = 0 ; i < 5 ; i++)
	{
		this.categoryItemsInfo[i] = new Array() ;
	}
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
		if(data>this.pages) this.lastPage() ;
		else if(data>=1&&data<=this.pages) this.nowPage = data ;
		else this.toPage(1) ;
	}
	this.changePage = function() {
		this.pages = Math.ceil( this.categoryItemsNum[this.category] / this.per ) ;
	}
	this.changeCategory = function(data) {
		this.category = data ;
		this.changePage() ;
		this.toPage(1) ;
	}
	this.init = function() {
		this.categoryItemsNum = [this.items,0,0,0,0] ;
		for(var i = 0 ; i < this.items ; i++)
		{
			this.categoryItemsInfo[parseInt(this.info[i].category_id)][this.categoryItemsNum[parseInt(this.info[i].category_id)]++] = i ;
		}
		this.changePage() ;
	}
	this.showPage = function() {
		$(".page").empty() ;
		if(this.pages==0) return ;
		$(".page").append("<span class='page_item'>共"+this.pages+"页 / "+this.categoryItemsNum[this.category]+"个搜索结果</span>") ;
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
		if(this.pages>1)
		{
			$(".page").append("<input type='text' class='page_item' id='page_num'><a class='page_item' id='p_to'>确定</a>") ;
		}
		$(".page").append("<script>	$('.page_item').click(function(){var p_id = $(this).attr('id') ;if(p_id.substring(0,2)=='p_'){switch(p_id){case 'p_prev' : searchResultObj.prevPage() ; break ;case 'p_next' : searchResultObj.nextPage() ; break ;case 'p_top'  : searchResultObj.toPage(1)  ; break ;case 'p_last' : searchResultObj.lastPage() ; break ;case 'p_now'  :case 'p_all'  : break ; case 'p_to'   : searchResultObj.toPage(parseInt($('#page_num').val())) ; break ; default : searchResultObj.toPage(parseInt(p_id.substring(p_id.lastIndexOf('_') + 1))) ;} searchResultObj.showPage() ;searchResultObj.showResult() ;}});</script>") ;
	}
	this.showResult = function() {
		$(".result_container").empty() ;
		if(this.categoryItemsNum[this.category]==0)
		{
			$(".result_container").append("<div class='result_list_no'><span class='no_msg'>没有相关视频</span></div>") ;
			return ;
		}
		var begin = ( this.nowPage - 1 ) * this.per + 1 ;
		var end = this.nowPage * this.per < this.categoryItemsNum[this.category] ? this.nowPage * this.per : this.categoryItemsNum[this.category] ;
		for(var i = begin - 1 ; i < end ; i++)
		{
			var Obj = this.category == 0 ? this.info[i] : this.info[this.categoryItemsInfo[this.category][i]] ;
			var src = "../info/video/"+Obj.video_id+"/"+Obj.picture ;
			var Category = Obj.category_name ;
			var Vname = Obj.name ;
			var uploader = Obj.username ;
			var click = avoidBigNum(Obj.clicked) ;
			var comment = avoidBigNum(Obj.commented) ;
			var great = avoidBigNum(Obj.greated) ;
			var collect = avoidBigNum(Obj.collected) ;
			var time = Obj.upload_time ;
			var arr = Obj.tag.split(",") ;	
			var tag = "" ;
			var url = "../html/play.html?id="+Obj.video_id ;
			var marquee = avoidBigNum(Obj.marquee) ;
			for(var j = 0 ; j < arr.length ; j++)
			{
				tag += " "+arr[j] ;
			}
			$(".result_container").append("<div class='result_list'><img src='"+src+"'><div class='result_info'><div class='info_top'><span class='info_type'>"+Category+"</span><span class='info_name'><a href='"+url+"'>"+Vname+"</a></span></div><div class='info_mid'><span class='info_uploader' title='作者'><i class='iconfont'>&#xe630; </i>"+uploader+"</span><span class='info_click' title='点击'><i class='iconfont'>&#xe633; </i>"+click+"</span><span class='info_comment' title='评论'><i class='iconfont'>&#xe6b8; </i>"+comment+"</span><span class='info_great' title='赞'><i class='iconfont'>&#x343f; </i>"+great+"</span><span class='info_collect' title='收藏'><i class='iconfont'>&#xe601; </i>"+collect+"</span><span class='info_marquee' title='弹幕''><i class='exiconfont'>&#xe60b; </i>"+marquee+"</span><span class='info_time' title='上传时间'><i class='iconfont'>&#x3435; </i>"+time+"</span></div><div class='info_bottom'><span class='info_tag'>"+tag+"</span></div></div></div>") ;
		}
		$(".result_container").append("<div style='clear:both;'></div>") ;
	}
	this.init() ;
	this.showPage() ;
	this.showResult() ;
	$(".result_container").append("<script>$('.o').click(function(){$('.o').attr('class','o') ;$(this).attr('class','o o_now') ;var id = $(this).attr('id') ; id = parseInt(id.substring(2)) ;searchResultObj.changeCategory(id) ;searchResultObj.showPage() ;searchResultObj.showResult() ;});</script>" ) ;
}

function getMessage()
{	
	var ksw = trim($("#search").val()) ;
	if(ksw!="")
	{
		$.post("../handle/searchVideo.php",
			{
				keyword: $("#search").val() ,
				rank: $("#rank").val() 
			},
			function(data){
				var msg = eval("("+data+")") ;
				var type = parseInt($(".o_now").attr("id").substring(2)) ;
				searchResultObj = new createSearchResultObj(msg.message,type) ;
		});
	}
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