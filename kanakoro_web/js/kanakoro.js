var gifImage1 = document.getElementById("title01");
var gifImage2 = document.getElementById("title02");
var gifImage3 = document.getElementById("title03");
var gifImage4 = document.getElementById("title04");

gifImage1.src = "img/ka_d.gif?" + (new Date).getTime();
gifImage2.src = "img/na_d.gif?" + (new Date).getTime();
gifImage3.src = "img/ko_d.gif?" + (new Date).getTime();
gifImage4.src = "img/ro_d.gif?" + (new Date).getTime();

window.onload = function(){
	$(function() {
		$("#loading").delay(2000).fadeOut();
		$("#sec01").delay(2000).fadeIn();
		$("#sec01").delay(10000).fadeOut();
		$("#sec02").delay(10000).fadeIn("slow");
		$("#sec02 img").mouseover(function(){
			if ($(this).attr("src")){
					var bf_src = $(this);
					setTimeout(function(){
						if(srcがpngだったら){
							var af_src = bf_src.attr("src").replace(".png", ".gif");
						}else if(srcがgifだったら){
							var af_src = bf_src.attr("src").replace("_b.gif", ".gif");
						}
						bf_src.attr("src",af_src);
					},0);
			}
		});
		$("#sec02 img").mouseout(function(){
			if ($(this).attr("src")){
				var bf_src = $(this);
				setTimeout(function(){
					var af_src = bf_src.attr("src").replace(".gif", "_b.gif");
					bf_src.attr("src",af_src);
					},1400);
			}
		})
	});
}