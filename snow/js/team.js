ajaxs(-1, 0); //获取列表

function ajaxs(id, cz) {
	$.get("php/index.php?hide=2&id=" + id, function(data) {
		if(cz == 0) {
			nameUl(data);
			var i = $(".main>ul .active").attr("rm");
			ajaxs(i, 1);
		} else if(cz == 1) {
			showmain(data[0]);
		}
	}, "json");
}
//显示人名
function nameUl(data) {
	$ul = $(".main>ul");
	$li = $(`<li rm=${data[0].id} class='active'><em></em><span>${data[0].name}</span><img src='images/team/jt.png' alt=''></li>`);
	$ul.append($li);
	for(var i = 1; i < data.length; i++) {
		$li = $(`<li rm=${data[i].id}><em></em><span>${data[i].name}</span><img src='images/team/jt.png' alt=''></li>`);
		$ul.append($li);
	}
	$lis = $(".main>ul>li");
	$(".main_title div:first a:last").html(data[0].name);
	$lis.click(e => {
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName == "SPAN") {
			var li = $(target).parent();
			$(target).parent().attr("class", "active");
			$(target).parent().siblings().attr("class", "");
		} else if(target.nodeName == "LI") {
			var li = $(target);
		}
		$(".main_title div:first a:last").html(li.children()[1].innerHTML);
		var i = li.attr("rm");
		ajaxs(i, 1);
	})
}
//显示内容
function showmain(data) {
	$teamBox = $(".team_txt");
	$teamBox.html("");
	//第一部分标题
	$d1 = $("<div></div>");
	$d1_1 = $("<div></div>");
	$titles = data.title.split("&");
	$con = [data.con1, data.con2];
	for(var i = 0; i < 2; i++) {
		$d1_1_1 = $("<div></div>");
		$span1_1 = $(`<span>${$titles[i*2]}</span>`);
		$span1_2 = $(`<span>${$titles[1*2+1]}</span>`);
		$d = $("<div></div>");
		$d1_1_1.append($span1_1);
		$d1_1_1.append($span1_2);
		$d1_1_1.append($d);
		$p = $(`<p>${$con[i]}</p>`);
		$d1_1.append($d1_1_1);
		$d1_1.append($p);
	}
	$img = $(`<img src='${data.img}' alt=''>`);
	$d1.append($d1_1);
	$d1.append($img);
	$teamBox.append($d1);
	//第二部分
	$d2 = $("<div></div>");
	$span2_1 = $(`<span>${$titles[5]}</span>`);
	$span2_2 = $(`<span>${$titles[6]}</span>`);
	$d2_2 = $("<div></div>");
	$d2.append($span2_1);
	$d2.append($span2_2);
	$d2.append($d2_2);
	$teamBox.append($d2);
	//第三部分
	$d3 = $("<div class='works'></div>");
	var contimgarr = data.conimg.split("&");
	var page = contimgarr.length / 4; //页数，每页为4张图片
	for(var i = 0, n = 0; i < page; i++) {
		$d3_1 = $("<div></div>");
		for(var j = 0; j < 4; j++, n++) {
			if(n > contimgarr.length) {
				break;
			}
			$img = $(`<img src='${contimgarr[n]}' alt=''>`);
			$d3_1.append($img);
		}
		$d3.append($d3_1);
	}
	//btn
	$btn = $("<div class='btn'></div>");
	$lt = $("<span>&lt;</span>");
	$btn.append($lt);
	for(var i = 1; i < page + 1; i++) {
		$sp = $(`<span>${i}</span>`);
		$btn.append($sp);
	}
	$gt = $("<span>&gt;</span>");
	$btn.append($gt);
	$d3.append($btn);
	$teamBox.append($d3);
	$(".btn>span:eq(1)").attr("class", "active");
	$(".works>div:eq(0)").attr("class", "active");
	var p = 0;
	$btn.click(e => {
		console.log(p, page);
		p = btnspan(e, page, p);
	})
}

function btnspan(e, pages, p) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	$worksimg = $(".works>div");
	$btnnum = $(".btn>span");

	if($(target).html() == "&lt;") {
		p--;
		console.log(p, pages);
		if(p < 0) {
			p = 0;
		}
	} else if($(target).html() == "&gt;") {
		p++;
		console.log(p, pages);
		if(p = pages) {
			p = pages - 1;
		}
	}
	$($worksimg[p]).attr("class", "active");
	$($worksimg[p]).siblings().attr("class", "");
	$($btnnum[p + 1]).attr("class", "active");
	$($btnnum[p + 1]).siblings().attr("class", "");
	$(".works>div:last").attr("class", "btn");
	return p;
}