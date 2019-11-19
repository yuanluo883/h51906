var xnav =document.getElementsByClassName("xnav")[0];
var uls2 = xnav.getElementsByTagName("ul");
var ulslss = document.getElementsByClassName("lss")[0];
init();
li2change();

//初始化二级菜单的高
function init(){
	var lislss = ulslss.children;
	var height = lislss.length*36;
	ulslss.style.height = height+"px";
}
//给一级菜单绑定点击事件
for(var i=0;i<xnav.children.length;i++){
	if(i%2==1){
		var lis1 = xnav.children[i];
		lis1.onclick=function(){
			var sp = this.getElementsByTagName("span")[1];
			var sid = this.getAttribute("ycx");
			if(sp.innerHTML=="-"){
				uls2[sid].style.height = 0;
				uls2[sid].className = "";
				sp.innerHTML = "+";
				this.className ="";
			}else if(sp.innerHTML=="+"){
				isclear();
				var lis2 = uls2[sid].children;
				var height = lis2.length*36;
				uls2[sid].style.height = height+"px";
				uls2[sid].className = "lss";
				uls2[sid].children[0].className = "lsli";
				this.className ="active";
				sp.innerHTML = "-";
				li2change();
				mainshow();
			}
		}
	}
}
//二级标签的点击事件
function li2change(){
	var ul2 = document.getElementsByClassName("lss")[0];
	var lis2 = ul2.children;
	for(var j=0;j<lis2.length;j++){
		lis2[j].onclick = function(){
			for(var k=0;k<lis2.length;k++){
				lis2[k].className = "";
			}
			this.className = "lsli";
			mainshow();
		}
	}
}
//右边页面的显示
function mainshow(){
	var li_ac = document.getElementsByClassName("xnav")[0].getElementsByClassName("active")[0];
	var index = li_ac.getAttribute("ycx");
	var li_ls = li_ac.nextElementSibling.getElementsByClassName("lsli")[0]
	var ind = li_ls.getAttribute("ls");
	var indextitle = document.getElementsByClassName("mains")[0].getElementsByTagName("h4")[0].children[2];
	var indtitle = document.getElementsByClassName("mains")[0].getElementsByTagName("h4")[0].children[3];
	var basemain = document.getElementsByClassName("basemain")[0];
	var basess = basemain.children;
	for(var i=0;i<basess.length;i++){
		basess[i].className = "";
	}
	basess[index].className = "baseon";
	var bases = basess[index].children;
	for(var j=0;j<bases.length;j++){
		bases[j].className = "";
	}
	bases[ind].className = 'active';
	indextitle.innerHTML = li_ac.children[1].innerHTML;
	console.log(li_ac.children)
	indtitle.innerHTML = li_ls.children[0].innerHTML;
}
//清除className用的
function isclear(){
	for(var i=0;i<xnav.children.length;i++){
		if(i%2==1){
		for(var j=0;j<uls2.length;j++){
			var lis1 = xnav.children[i];
			lis1.getElementsByTagName("span")[1].innerHTML = "+";
			lis1.className = "";
			uls2[j].style.height = 0+"px";
			uls2[j].className = "";
			var lis2 =uls2[j].children;
			for(var k=0;k<lis2.length;k++){
				lis2[k].className = "";
			}
		}
		}
	}
}

