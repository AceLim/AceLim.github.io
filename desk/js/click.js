var marsk = document.getElementsByClassName("marsk")[0];

//采用面向对象的方法

//定义startmenu类,该类有三个方法,一个是获取目前的状态,一个是显示,一个隐藏
function StartMenu(){
	var isShow = false;
	var startMenu = document.getElementsByClassName("start-menu")[0];
	return {
		state:function(){return isShow},
		show:function(){startMenu.style.display="block";marsk.style.display="block";isShow=true},
		hidden:function(){startMenu.style.display="none";marsk.style.display="none";isShow=false}
	}
}
//定义时间日期面板类,该类有三个方法,一个是获取目前的状态,一个是显示,一个隐藏
function DateMenu(){
	var isShow = false;
	var datemenu = document.getElementsByClassName("date-menu")[0];
	return {
		state:function(){return isShow},
		show:function(){datemenu.style.display='block';marsk.style.display="block";isShow=true;},
		hidden:function(){datemenu.style.display='none';marsk.style.display="none";isShow=false;}
	}
}


//点击切换中英文显示
var lang = document.getElementsByClassName("langue")[0];
function Language(){
	var flag = false;
	return {
		tabLang:function(){
			if(flag){
				flag = false;
				lang.style.backgroundImage = "url(img/english.png)";
			}else{
				flag = true;
				lang.style.backgroundImage = "url(img/chinese.png)";
			}
		}
	}
}
var lg = new Language();
lang.onclick = function(){
	lg.tabLang();
}







//给开始按钮添加事件
var start = document.getElementsByClassName("w-start")[0];
//创建开始面板对象
var sM = new StartMenu();//new一个startmenu类
start.onclick = function(e){
	//判断startmenu的状态来选择是显示还是隐藏
	if(sM.state()){
		sM.hidden();
	}else{
		sM.show();
	}
}


//给时间日期按钮添加事件
var timer = document.getElementsByClassName('timer')[0];
//创建事件面板对象
var dm = new DateMenu();
timer.onclick = function(e){
	if(dm.state()){
		dm.hidden();
	}else{
		dm.show();
	}
}





//给遮罩添加事件,点击遮罩关闭所有面板
marsk.onclick = function(){
	dm.hidden();
	sM.hidden();
}

