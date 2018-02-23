window.onload = function(){
	var ban = document.getElementsByClassName("banner")[0];//获得存放轮播图的框
	var imgs = document.getElementsByClassName("img");//获取三张轮播图
	var btns = ban.getElementsByTagName("i");//获取按钮组
	var tipBtn = document.getElementsByClassName('tips-right')[0];
	var tip = document.getElementsByClassName('top-tips')[0];
	var video = document.getElementsByClassName('sp-pic')[0];
	var bd = document.getElementsByTagName('body')[0];
	var nowBtn = btns[0];
	var nextBtn;
	var timmer;
	var bHeight = document.getElementsByClassName("img-active")[0].offsetHeight;//获取当前显示图片的高度
	ban.style.height = bHeight +'px';
	
	//判断localStorage的tips值来选择是否显示tips
	var loc = window.localStorage;
	if(loc.tips){
		tip.style.display = 'none';
	}
	
	//点击不在显示之后设置localStorage的tips值为true，然后关闭tips
	tipBtn.onclick = function(){
		loc.tips = "true";
		tip.style.display = 'none';
	}
	video.onclick = function(){
		var zhezhao = document.createElement('div');
		var vd = document.createElement('video');
		vd.src="http://mov.bn.netease.com/open-movie/nos/mp4/2014/12/30/SADQ86F5S_shd.mp4";
		vd.className = 'sp';
		vd.controls = 'true';
		zhezhao.className = 'zhezhao';
		zhezhao.onclick = function(){
			bd.removeChild(zhezhao);
			bd.removeChild(vd);
		}
		bd.appendChild(zhezhao);
		bd.appendChild(vd);
	}
	
	window.onresize = function(){
		bHeight = document.getElementsByClassName("img-active")[0].offsetHeight;
		ban.style.height = bHeight +'px';
	}
//	遍历按钮组,给每个按钮编号
	for(var i = 0;i < btns.length;i ++){
		btns[i].dataset.index = i;
	}
	for(var i = 0;i < btns.length;i ++){
//		当按下按钮时触发以下事件
		btns[i].onclick = function(){	
//			把上一次的复原	
			imgs[nowBtn.dataset.index].className = "img";
			btns[nowBtn.dataset.index].className = "";
//			把当前按钮对应的图显示出来
			imgs[this.dataset.index].className += " img-active";
			btns[this.dataset.index].className = "btn-active";
			nowBtn = btns[this.dataset.index];
		}
	}
	
	ban.onmouseover = function(){clearInterval(timmer)};
	ban.onmouseout = function(){timmer = setInterval(nextBaner,5000)};
	
	var nextBaner = function(){
		imgs[nowBtn.dataset.index].className = "img";
		btns[nowBtn.dataset.index].className = "";
		if(nowBtn.dataset.index == btns.length-1){
			imgs[0].className += " img-active";
			btns[0].className = "btn-active";
			nowBtn = btns[0];
		}else {
			nextBtn = parseInt(nowBtn.dataset.index)+1;
			imgs[nextBtn].className += " img-active";
			btns[nextBtn].className = "btn-active";
			nowBtn = btns[nextBtn];
		}
	}
	timmer = setInterval(nextBaner,5000);
	
	var kczs = document.getElementsByClassName('kczs')[0];
	
	var createDiv = function(src,title,zuozhe,renshu,price){
		var li = document.createElement('li');
		li.innerHTML = '<img src="' + src +  '" alt="图片">\
								<h3 class="ms" title='+title+'>'+title+'</h3>\
								<p class="zuozhe">'+zuozhe+'</p>\
								<span class="people">'+renshu+'</span>\
								<p class="price">￥'+price+'</p>';
			kczs.appendChild(li);
	}
	
	
	
	var src,title,zuozhe,renshu,price;
	var obj,lise;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				obj = JSON.parse(xhr.responseText);
				list = obj.list;
				for(var i = 0;i < list.length;i ++){
					src = list[i].middlePhotoUrl;
					title = list[i].description;
					zuozhe = list[i].provider;
					renshu = list[i].learnerCount;
					if(list[i].price == 0){
						price = '免费';
					}else{
						price = list[i].price;
					}	
					createDiv(src,title,zuozhe,renshu,price);			
				}
				
			}
		}
	xhr.open('get','http://study.163.com/webDev/couresByCategory.htm'+'?pageNo=1&psize=20&type=10',true);
	xhr.send(null);
	
	var nav = document.getElementsByClassName("cont-nav")[0];
	var tabs = nav.getElementsByTagName('span');
	
	for(var i = 0;i <tabs.length;i ++){
		tabs[i].dataset.index = i;
	}
	
//	当前课程类型
	var classType ='10';
	for(var i = 0;i <tabs.length;i ++){
		tabs[i].onclick = function(){
			pager.pageTo(1);
			for(var j = 0;j <tabs.length;j++){
				tabs[j].className = '';
			}
			this.className = 'on';
			
			if(this.dataset.index==0){
				classType='10';
				kczs.innerHTML = '';
				xhr.open('get','http://study.163.com/webDev/couresByCategory.htm'+'?pageNo=1&psize=20&type='+classType,true);
				xhr.send(null);
			}else{
				classType='20';
				kczs.innerHTML = '';
				xhr.open('get','http://study.163.com/webDev/couresByCategory.htm'+'?pageNo=1&psize=20&type='+classType,true);
				xhr.send(null);
			}
		}
	}
	
	var pageUl = document.getElementsByClassName("page")[0];
	var pager = new Pager(3);
	pager.pageTo(1);
	pageUl.onclick = function(e){
//		更新翻页器
		var page = e.target.dataset.pageid;
		pager.pageTo(page);
//		更新内容区
		kczs.innerHTML = '';
		xhr.open('get','http://study.163.com/webDev/couresByCategory.htm'+'?pageNo='+page+'&psize=20&type='+classType,true);
		xhr.send(null);
	}
	
	var hotobj,sr,ms,rs;
		var hotxhr = new XMLHttpRequest();
		hotxhr.onreadystatechange = function(){
			if(hotxhr.readyState ==4 && hotxhr.status == 200){
				hotobj = JSON.parse(hotxhr.responseText);
				for(var i = 0;i < 10;i ++){
					sr = hotobj[i].smallPhotoUrl;
					ms = hotobj[i].description;
					rs = hotobj[i].learnerCount;
					createHotDiv(sr,ms,rs);
				}
			}
		}
		
		hotxhr.open('get','http://study.163.com/webDev/hotcouresByCategory.htm',true);
		hotxhr.send(null);
		
		var zrph = document.getElementsByClassName('hot-list')[0];
		var createHotDiv = function(sr,ms,rs){
			var hotLi = document.createElement('li');
			hotLi.innerHTML = '<img src='+sr+' alt="图片"/><h4>'+ms+'</h4><span>'+rs+'</span>';
			zrph.appendChild(hotLi);
		}
	
}
