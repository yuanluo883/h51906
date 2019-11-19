ajaxs(-1, 0); //获取列表

function ajaxs(id, cz) {
	$.get("php/index.php?hide=3&id=" + id, function(data) {
		if(cz == 0) {
			nameUl(data);
			var i = $(".main>ul .active").attr("style");
			ajaxs(i, 1);
		} else if(cz == 1) {
			showmain(data[0]);
		}
	}, "json");
}
//显示人名
function nameUl(data) {
	$ul = $(".main>ul");
	$li = $(`<li style=${data[0].id} class='active'><em></em><span>${data[0].name.split("&")[0]}</span><img src='images/team/jt.png' alt=''></li>`);
	$ul.append($li);
	for(var i = 1; i < data.length; i++) {
		$li = $(`<li style=${data[i].id}><em></em><span>${data[i].name.split("&")[0]}</span><img src='images/team/jt.png' alt=''></li>`);
		$ul.append($li);
	}
	$lis = $(".main>ul>li");
	$(".main_title div:first a:last").html(data[0].name.split("&")[0]);
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
		var i = li.attr("style");
		ajaxs(i, 1);
	})
}
//显示内容
function showmain(data) {
	var titles = data.title.split("&");
	var yws = data.yw.split("&");
	var zws = data.zw.split("&");
	var img = data.src.split("&");
	console.log(titles)
	$productMain = $(".product_main");
	$productMain.html("");
	$dtext = $("<div class='product_text'></div>");

	//第一部分
	$d1 = $("<div></div>");
	$d1_1 = $("<div></div>");
	$sp1 = $(`<span>${titles[0]}</span>`);
	$sp2 = $(`<span>${titles[1]}</span>`);
	$d1_1.append($sp1);
	$d1_1.append($sp2);
	$d1_2 = $("<div></div>");
	$p = $(`<p>${data.content}</p>`);
	$d1_1.append($d1_2);
	$d1.append($d1_1);
	$d1.append($p);
	$dtext.append($d1);
	//第二部分
	$ul = $("<ul></ul>");
	for(var i = 0; i < img.length; i++) {
		$li = $("<li></li>");
		$d1 = $("<div></div>");
		$img = $(`<img src=${img[i]} alt=''>`);
		$d1_1 = $(`<div><div><span>${zws[i]}</span></div></div>`);
		$d1.append($img);
		$d1.append($d1_1);
		$d2 = $(`<div><span>${zws[i]}</span><span>${yws[i]}</span></div>`);
		$li.append($d1);
		$li.append($d2);
		$ul.append($li);
	}
	$dtext.append($ul);

	$productMain.append($dtext);
}