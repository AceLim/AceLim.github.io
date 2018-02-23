var hour = document.getElementsByClassName("hour")[0];
var dat = document.getElementsByClassName("date")[0];
var sj = document.getElementsByClassName("sj")[0];
var rq = document.getElementsByClassName("rq")[0];
var td = document.getElementsByClassName("table-data")[0];

function checkTime(){
	//	获取当前时间
	var now = new Date();
	var sec = now.getSeconds();
	var min = now.getMinutes();
	if(sec<=9) sec = '0'+sec;
	if(min<=9) min = '0'+min;
	hour.innerText = now.getHours()+':'+min;
	dat.innerText = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
	
	
	sj.innerText = now.getHours()+':'+min+':'+sec;
	rq.innerText = now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日';
	
	td.innerText = now.getFullYear()+'年'+(now.getMonth()+1)+'月';
}

checkTime();

//每隔十秒钟刷新一次时间
var timmer = setInterval(checkTime,1000)


var table = document.getElementsByClassName("tb-body")[0];
var tds = table.getElementsByTagName("td");
var day = new Date().getDay();
tds[day+1].style.backgroundColor="black";
tds[day+1].style.border="1px solid red";
