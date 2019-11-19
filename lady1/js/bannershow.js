var btns = document.getElementsByClassName("btn");
var uls = document.getElementsByClassName("show")[0];
var lis1 = uls.children;
uls.appendChild(lis1[0]).cloneNode(true);//没追加进去  不写了
var len = lis1.length;
uls.style.width = len*lis1[0].offsetWidth;

for(var i=0;i<btns.length;i++){
	btns[i].onclick = function(){
		if(this.innerHTML=="&lt;"){
			
		}else if(this.innerHTML == "&gt;"){
			
		}
	}
}
