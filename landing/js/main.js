var submitted = false;

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

	$("select#entry_18730254").change(function(){
		setCurrency();
	});

	$('.icheck').iCheck({
		radioClass: 'iradio_minimal-blue',
		increaseArea: '50%' // optional
	});

	$("input.from-to-chile").on("ifChecked", function(){
		var label = $(this).data("label");
		if(label){
			$("#from-to-label").html(label);
		}
		setCurrency();
	});

});

function setCurrency(){
	if($("#group_1568613071_1").is(":checked") /*FROM CHILE is checked*/){
		$("#currency").html("CLP");
		$("#currency").removeClass("icon-bill");
		$("#currency").addClass("currency");
		return;
	}
	var cur = $("select#entry_18730254").find(":selected").data("currency");
	if(cur){
		$("#currency").html(cur.toUpperCase());
		$("#currency").removeClass("icon-bill");
		$("#currency").addClass("currency");
	}else{
		$("#currency").html("");
		$("#currency").addClass("icon-bill");
		$("#currency").removeClass("currency");
	}
}