var photoscount = document.getElementsByClassName("photoscount")[0];
var xnav = document.getElementsByClassName("xnav")[0];
var lisnav = xnav.getElementsByTagName("li");
var mains = document.getElementsByClassName("mains")[0];
var spans = mains.children[0].children[1];
for(var i =0 ;i<lisnav.length;i++){
	lisnav[i].onclick = function(){
		var i = this.getAttribute("ycx");
		var sp = this.getElementsByTagName("span")[1];
		if(sp.innerHTML=="-"){
			sp.innerHTML = "+";
			this.className ="";
		}else if(sp.innerHTML=="+"){
			isclear();
			this.className ="active";
			sp.innerHTML = "-";
			spans.innerHTML = this.getElementsByTagName("span")[0].innerHTML;
			var s = this.getAttribute("ycx");
			divshow(s);
		}
	}
}
//清除className
function isclear(){
	for(var j=0;j<lisnav.length;j++){
		lisnav[j].getElementsByTagName("span")[1].innerHTML = "+";
		lisnav[j].className = "";
	}
}
function divshow(s){
	var count = document.getElementsByClassName("photoscount")[0].children;
	for(var i=0;i<count.length;i++){
		count[i].className = "";
	}
	count[s].className = "photosmain";
}
