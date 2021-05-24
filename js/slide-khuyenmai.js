var time = 4000;
var indx_slide = 0;
var list_khuyenmai = document.querySelector(".list-khuyenmai");
var pre_scl = 0;
let sl = setInterval(function(){
	var width = $('.slide').css('width');
	width = Number(width.slice(0, -2));
	var scl = list_khuyenmai.scrollLeft;
	list_khuyenmai.scrollTo({
        left: scl + width/2,
        behavior: 'smooth'
    });
}, time);