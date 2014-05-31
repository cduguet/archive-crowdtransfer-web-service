$(document).ready( function(){

	$(window).scroll( function(){
		var scr = $(document).scrollTop();
		if(scr > 30){
			$(".header").addClass("compact");
			$(".section.desc").addClass("push-down");
		}else{
			$(".header").removeClass("compact");
			$(".section.desc").removeClass("push-down");
		}
	});

});
