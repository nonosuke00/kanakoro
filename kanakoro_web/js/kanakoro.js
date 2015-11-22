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
		$("#container").delay(2000).fadeIn();
		$("#sec01").delay(1000000).hide(1000000);
	});
}