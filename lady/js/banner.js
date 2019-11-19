var banner = document.getElementsByClassName("banner")[0];
var banner_img = document.getElementsByClassName("banner_img")[0];
var imgs = banner_img.getElementsByTagName("img");
var btns = document.getElementsByTagName("button");
var lis = document.getElementsByClassName("bannerBtn")[0].getElementsByTagName("li");
j=0;
//上一张下一张按钮点击事件
for(var i=0;i<btns.length;i++){
	btns[i].onclick = function(){
		switch(this.innerHTML){
			case "&lt;":
				animate(-1);
			break;
			case "&gt;":
				animate(1);
			break;
		}
	}
}
//鼠标点击小按钮的事件
for(var j=0;j<lis.length;j++){
	lis[j].onclick = function(){
		var sid = this.innerHTML;
		animate(sid);
	}
}
//改变className用的
function animate(x){
	if(x===1){
		j+=x;
		if(j>3){
			j=0;
		}
	}else if(x===-1){
		j+=x;
		if(j<0){
			j=3;
		}
	}else{
		j=x*1;
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].className = "";
		lis[i].className = "";
	}
	imgs[j].className = "active";
	lis[j].className = "active";
}

//计时器自动改变图片
timer=setInterval("animate(1)",3000);
//鼠标移入暂停计时器
banner.onmousemove = function(){
	clearInterval(timer);
	timer = null;
}
//鼠标移出开启计时器
banner.onmouseout = function(){
	timer=setInterval("animate(1)",3000);
}
