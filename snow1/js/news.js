var page = 1;
var news_main = document.getElementsByClassName("news_main")[0];
ajax("php/index.php?hide=0&page=" + page, 0);

// ajax请求
function ajax(url, i) {
	var xhr = getXhr();
	xhr.open("GET", url);
	xhr.send();
	xhr.onreadystatechange = () => {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			if(i == 0) {
				createNews(data);
			}
		}
	}
}

// 生成界面
function createNews(data) {
	var arr = data.content;
	var page = data.pagenum;
	news_main.innerHTML = "";
	//生成内容
	for(let i = 0; i < arr.length; i++) {
		var li = document.createElement("li");
		var div1 = document.createElement("div");
		var div2 = document.createElement("div");
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var a = document.createElement("a");
		var p3 = document.createElement("p");

		p2.innerHTML = arr[i].year;
		p1.innerHTML = arr[i].month;
		a.innerHTML = arr[i].title;
		a.href = "newsContent.html?hide=1&id=" + arr[i].cid;
		p3.innerHTML = arr[i].introduce;

		div1.appendChild(p1);
		div1.appendChild(p2);
		div2.appendChild(a);
		div2.appendChild(p3);
		li.appendChild(div1);
		li.appendChild(div2);

		news_main.appendChild(li);
	}
	//生成页数
	var ul = document.getElementsByClassName("news_main_btn")[0].getElementsByTagName("ul")[0];
	ul.innerHTML = "";
	for(let i = 1; i < page + 1; i++) {
		var li = document.createElement("li");
		li.innerHTML = i;
		li.onclick = function() {
			var i = this.innerHTML;
			page = i;
			ajax("php/index.php?hide=0&page=" + page, 0);
		}
		ul.appendChild(li);
	}
}

//创建ajax
function getXhr() {
	var xhr = null;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}