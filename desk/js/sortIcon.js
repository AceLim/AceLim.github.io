//对桌面的图标进行排序
//icons为所有图标的集合
var icons = document.getElementsByClassName("icon")[0].getElementsByTagName("li");
var contan = document.getElementsByClassName("contan")[0];
function sortIcon(icons,cont){
	//col代表列,默认一开始第一列
	var col=1;
	//获取icon容器的高度
	var height = cont.offsetHeight-40;
	//定位坐标xy
	var x=0,y=0;
	//图标之间的间距位20
	var temp=20;
	//遍历icons,把图标一个个的位置固定
	for(var i=0;i<icons.length;i++){
	//	通过x,y来定位
		icons[i].style.top=y+'px';
		icons[i].style.left=x+'px';
	//	定位完成,重新生成下一个x,y坐标
	//判断当前的icon是否为最后一个，如果是就不更新后面的坐标了
		if(i<icons.length-1){
			//判断目前的列高有没有溢出，如果将溢出，则另起一列
			if((y+icons[i].offsetHeight+temp+icons[i+1].offsetHeight)>height){
	//			另起一列,更新x,重置y
				x += 94;
				y = 0;
			}else{
	//			继续在原列添加,x不变,递增y值
				y += icons[i].offsetHeight+temp;
			}
		}
	}
}


sortIcon(icons,contan);

window.onresize = function(){
	sortIcon(icons,contan);
}




