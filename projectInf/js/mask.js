//获取mask
var mask = document.getElementsByClassName("mask")[0];
//获取body
var body = document.getElementsByTagName("body")[0];

//添加mask点击事件
mask.onclick = cls;

function cls(){
	mask.style.display = "none";
	var details = document.getElementsByClassName("details")[0];
	body.removeChild(details);
}
