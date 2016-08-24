$(function() {
	$(".dropMenu li a").click(function(){
		var src = $(this).data('src');
		var srcTop = $('.' + src).offset().top;
		$("html,body").animate({scrollTop:srcTop - 135},{duration:1000, easing:"easeOutQuad"});
	});
	$("h1 a").click(function(){
		$("html,body").animate({scrollTop:0},{duration:500, easing:"easeOutQuad"});
	});

	var likesArray = ['SHINee','桃','Perfumen','スキューバーダイビング','ホワイトモカフラペチーノ','EXO','Hawaii','仲宗根梨乃','お好み焼き','横浜','寝ること','千鳥','ラムネ','菅原小春','高校野球','','','','','',''];
	for(var i = 0; i < likesArray.length; i++) {
		$(".likes ul").append('<li>' + likesArray[i] +'</li>')
	}
});

/*
$(window).scroll(function(){
	var scrPos = 500;
	if($("#pageTop").size()!=0){
		if($("#pageTop").hasClass("hidden") && scrPos<=$(window).scrollTop()){
			$("#pageTop").removeClass("hidden").addClass("show");
			$("#pageTop").css('display','block');
			$("#pageTop").animate({'opacity':1},500);
		}else if($("#pageTop").hasClass("show") && $(window).scrollTop()<scrPos){
			$("#pageTop").removeClass("show").addClass("hidden");
			$("#pageTop").animate({'opacity':0},500,function(){$("#pageTop").css('display','none');});
		}
	}
});

function ltie(){
	userAgent = window.navigator.userAgent.toLowerCase(),
	appVersion = window.navigator.appVersion.toLowerCase();
	if(userAgent.indexOf('msie') != -1){
		if(appVersion.indexOf('msie 8.') != -1 || appVersion.indexOf('msie 7.') != -1){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}*/

function getDevice(){
	if(navigator.userAgent.indexOf('iPhone')!=-1 || navigator.userAgent.indexOf('iPod')!=-1 || (navigator.userAgent.indexOf('Android')!=-1 && navigator.userAgent.indexOf('Mobile')!=-1)){
		return "sp";
	}else{
		return "pc";
	}
}

function isHakTablet(){
	if(navigator.userAgent.indexOf('iPad')!=-1 || (navigator.userAgent.indexOf('Android')!=-1 && navigator.userAgent.indexOf('Mobile')==-1)){
		return true;
	}else{
		return false;
	}
}