var i = location.search.slice(1).split("&");
var hide = i[0].split("=")[1];
var id = i[1].split("=")[1];
var titlea = document.getElementsByClassName("main")[0].children[0].children[0].lastElementChild;
var newsMain = document.getElementsByClassName("newsMain")[0];
ajax("php/index.php?hide=1&id=" + id, 0);

function ajax(url, i) {
	var xhr = getXhr();
	xhr.open("GET", url);
	xhr.send();
	xhr.onreadystatechange = () => {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			// console.log(xhr.responseText);
			if(i == 0) {
				var title = data.title;
				var content = data.content;
				var span = document.createElement("span");
				span.className = "title";
				span.innerHTML = titlea.innerHTML = title;
				newsMain.appendChild(span);

				for(let i = 0; i < content.length; i++) {
					var p = document.createElement("p");
					var img = document.createElement("img");
					var div = document.createElement("div");
					p.innerHTML = content[i].content;
					img.src = content[i].imgsrc;
					newsMain.appendChild(p);
					newsMain.appendChild(img);
					newsMain.appendChild(div);
				}
				if(newsMain.lastElementChild.nodeName == "DIV") {
					newsMain.removeChild(newsMain.lastElementChild);
				}
			}
		}
	}
}

function getXhr() {
	var xhr = null;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}