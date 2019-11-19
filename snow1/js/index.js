var srcs = ["images/banner1.png", "images/banner2.png", "images/banner3.png", "images/banner4.png", "images/banner5.png", "images/banner6.png"];
var i = 0;
$(".banner button").click(e => {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if(!$(".banner img").is(":animated")) {
		if($(target).html() == "&lt;") {
			showLbt(1);
		} else if($(target).html() == "&gt;") {
			showLbt(-1);
		}
	}
});
$(".banner li").click(e => {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if(!$(".banner img").is(":animated")) {
		var oldi = $(".banner .btn_on").index();
		i = $(target).index();
		if(oldi < i) {
			showLbt(1 + "");
		} else if(oldi > i) {
			showLbt(-1 + "");
		}
	}
});

function showLbt(x) {
	if(x === 1) {
		i += x;
		if(i == srcs.length) {
			i = 0;
		}
	} else if(x === -1) {
		i += x;
		if(i == -1) {
			i = srcs.length - 1;
		}
	}
	if(x == 1) {
		$img = $(`<img class='ling ' src='${srcs[i]}'>`);
	} else if(x == -1) {
		$img = $(`<img class='ring' src='${srcs[i]}'>`);
	}
	$(".imgs").append($img);
	$(".imgs img:eq(1)").animate({
		"left": "0%"
	}, 1000);
	if(x == 1) {
		$(".imgs img:eq(0)").animate({
			"left": "-100%"
		}, 1000, () => {
			$(".imgs img:eq(0)").remove();
		});
	} else if(x == -1) {
		$(".imgs img:eq(0)").animate({
			"left": "100%"
		}, 1000, () => {
			$(".imgs img:eq(0)").remove();
		});
	}
	$(".imgs img:eq(1)").animate({
		"left": "0"
	}, 1000);
	$($(".banner li")[i]).addClass("btn_on");
	$($(".banner li")[i]).siblings().removeClass();
}
timer = setInterval("showLbt(1)", 4000);

$(".banner").mouseover(() => {
	clearInterval(timer);
	timer = null;
});
$(".banner").mouseout(() => {
	timer = setInterval("showLbt(1)", 4000);
})