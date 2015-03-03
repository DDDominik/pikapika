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
	var categoryObj ;
	$.post("../handle/getCollection.php",{},function(data){
		var msg = eval("("+data+")") ;
		categoryObj = new createCategoryObj(msg.message) ;
	}) ;
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
	$("ul li a").click(function(){
		var id = $(this).attr("id") ;
		$("ul li a").attr("class","") ;
		$(this).attr("class","now") ;
		categoryObj.change(id) ;
		categoryObj.showCategory() ;
	});
});

function createCategoryObj(msg){
	this.items = msg.length ;
	this.now = 0 ;                 // 0 全部  1 娱乐  2 动画  3 科技  4 其它 
	this.info = msg ;
	this.change = function(n){
		this.now = n ;
	}
	this.showCategory = function(){
		$("#collection_container").empty() ;
		for(var i = 0 , cnt = 0 ; i < this.items ; i++)
		{	
			var tid = this.info[i].category_id ; 
			if( this.now==0 || tid==this.now )
			{
				cnt++ ;
				var pic = this.info[i].picture == null && this.info[i].picture == "" ? "../pic/logo.png" : "../info/video/"+this.info[i].video_id+"/"+this.info[i].picture ;
				var cid = this.info[i].category_id ;
				var category = this.info[i].category_name ;
				var video_name = this.info[i].name ;
				var time = this.info[i].collect_time ;
				var video_id = this.info[i].video_id ;
				$("#collection_container").append("<div class='collections' id='co_"+video_id+"'><img src='"+pic+"'><span class='tag'><a href='../html/category.html?c="+cid+"'>● "+category+"</a></span><span class='video_name'><a class='tit' href='../html/play.html?id="+video_id+"'>"+video_name+"</a></span><br><span class='time'>收藏时间 "+time+"</span><span class='click'><input type='submit' value='X' class='button' hidden='true' id='de_"+video_id+"'></span></div>") ;
			}
		}
		if( cnt == 0 )
		{
			$("#collection_container").append("<div class='collections_no'><span class='no_msg'>没有相关数据</span></div>")
		}
		else
		{
			$("#collection_container").append("<script>	$('.collections').hover(function(){$(this).css('box-shadow','0 0 10px #DDD') ; var id = $(this).attr('id') ;id = id.substring(3) ;$('#de_'+id).show() ;},function(){ $(this).css('box-shadow','none') ; var id = $(this).attr('id') ;id = id.substring(3) ;$('#de_'+id).hide() ;});</script>") ;
			$("#collection_container").append("<script> $('.button').click(function(){var vid = $(this).attr('id') ;vid = vid.substring(3) ;if(confirm('确定删除?')){$.post('../handle/deleteCollect.php',{id: vid },function(){alert('删除成功!') ;window.location.href = 'collection.html' ;});}});</script>") ;
		}
	}
	this.showCategory() ;
}