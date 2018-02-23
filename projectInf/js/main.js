//此数组用以保存所有的项目信息
var projectMessage = [];

//定义所有用到的变量
var xmmc,jsdw,dlgs,xmjl,kbrq,zzyq,wtr,bzj,gq,gczj,bz,scrq,xgrq,sfwj,sfzb,sfwg;
//所有本地存储的信息
var lsg = window.localStorage;
//获取按钮
var add = document.getElementsByClassName("add")[0];

//获取ul
var ul = document.getElementsByTagName("ul")[0];

//第一步，获取信息，把获取到的信息在页面中显示出来
//数据不为空时，读取数据

function showall(){
	for(var i=0;i < lsg.length;i++){
		var key = lsg.key(i);//获取每一个key
		projectMessage.push(lsg.getItem(key));//通过获取到的key把每一个值放进数组中
	}
	
	//把数组中所有数遍历，并显示在页面上
	for(var i=0;i <projectMessage.length;i++){
		var temp = JSON.parse(projectMessage[i]);
		var li = document.createElement("li");
		li.dataset.id = temp.scrq;
		li.innerHTML = temp.xmmc+'<span class="dlt"><a href="">删除</a></span><span class="xg"><a href="">修改</a></span>';
		ul.insertBefore(li,ul.children[0]);
	}
}

if(lsg.length){
	showall();
}


//第二步，添加信息
//点击添加按钮时触发下面的操作
add.onclick = function(){
	//1、把mask显示出来 2、创建模板  3、把模板添加到页面中显示出来  4、给确定及取消按钮添加事件
	mask.style.display = "block";
	var details = document.createElement("div");
	details.className = "details";
	details.innerHTML = '<div class="details-box"><p><label for="projectname">项目名称：</label><input type="text" id="projectname" class="ck"/></p><p><label for="buildcom">建设单位：</label><input type="text" id="buildcom"  class="ck"/></p>	<p><label for="dlgs">代理公司：</label><input type="text" id="dlgs"  class="ck"/></p><p><label for="xmjl">项目经理：</label><input type="text" id="xmjl"  class="ck"/><label for="kbrq">开标日期：</label><input type="text" id="kbrq" class="ck"/></p><p><label for="zzyq">资质要求：</label><input type="text" id="zzyq" class="ck"/><label for="wtq">委托人：</label><input type="text" id="wtr" class="ck"/></p><p><label for="bzj">保证金：</label><input type="text" id="bzj" class="ck"/>万&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="gq">工期：</label><input type="text" id="gq" class="ck"/>天</p><p><label for="gczj">工程造价：</label><input type="text" id="gczj" class="ck"/>万元</p><p><label for="bz">备注：</label><textarea name="bz" id="bz" rows="4" cols="40" class="ck"></textarea></p><button class="ok">确定</button><button class="no">取消</button></div>';
	body.appendChild(details);
	var ok = document.getElementsByClassName("ok")[0];
	var no = document.getElementsByClassName("no")[0];
	ok.onclick = appendnew;
	no.onclick = cls;
}

//获取到所有信息
function getMsg(){
	xmmc = document.getElementById("projectname").value;
	jsdw = document.getElementById("buildcom").value;
	dlgs = document.getElementById("dlgs").value;
	xmjl = document.getElementById("xmjl").value;
	kbrq = document.getElementById("kbrq").value;
	zzyq = document.getElementById("zzyq").value;
	wtr = document.getElementById("wtr").value;
	bzj = document.getElementById("bzj").value;
	gq =  document.getElementById("gq").value;
	gczj = document.getElementById("gczj").value;
	bz = document.getElementById("bz").value;
}

var msg = {
		//项目名称，此为必填
		"xmmc":"",
		//建设单位，默认为空
		"jsdw":"",
		//代理公司，默认为空
		"dlgs":"",
		//项目经理，默认为空
		"xmjl":"",
		//开标日期，默认为空
		"kbrq":"",
		//资质要求，默认为空
		"zzyq":"",
		//委托人，默认为空
		"wtr":"",
		//保证金，默认为无
		"bzj":"",
		//工期,默认为空
		"gq":"",
		//工程造价,默认为空
		"gczj":"",
		//备注信息，默认为空
		"bz":"",
		//生成日期，自动生成当前日期毫秒
		"scrq":"",
		//修改日期，默认空，当发生修改时，修改此日期时间
		"xgrq":"",
		//是否完结,默认为未完结
		"sfwj":"未完结",
		//是否中标,默认为未中标
		"sfzb":"未中标",
		//是否为外挂项目，默认为是
		"sfwg":"是"
	}

//
var appendnew = function(){
	getMsg();
	scrq = Date.now();
	msg.xmmc = xmmc;
	msg.jsdw = jsdw;
	msg.dlgs = dlgs;
	msg.xmjl = xmjl;
	msg.kbrq = kbrq;
	msg.zzyq = zzyq;
	msg.wtr = wtr;
	msg.bzj = bzj;
	msg.gq = gq;
	msg.gczj = gczj;
	msg.bz = bz;
	msg.scrq = scrq;
	msg.xgrq = msg.scrq;
	
	if(!msg.xmmc){
		cls();
		return;
	}
	
	//把获取到的信息拼成字符串
	var strMsg = JSON.stringify(msg);
	lsg.setItem(scrq,strMsg);
	cls();
	
	//添加完毕之后显示在页面中
	var li = document.createElement("li");
	li.dataset.id = msg.scrq;
	li.innerHTML = msg.xmmc+'<span class="dlt"><a href="">删除</a></span><span class="xg"><a href="">修改</a></span>';
	ul.insertBefore(li,ul.children[0]);
}



//增加数据
var addMsg = function(msg){
	//传入的msg为一个obj，包含所有信息
	lsg.setItem();
};


//更改与删除数据
ul.onclick = function(e){
	e.preventDefault();
	var txt = e.target.text;
	var id = e.target.parentElement.parentElement.dataset.id;
	if(txt === "修改"){
		var message = JSON.parse(lsg.getItem(id));
		mask.style.display = "block";
		var details = document.createElement("div");
		details.className = "details";
		details.innerHTML = '<div class="details-box"><p><label for="projectname">项目名称：</label><input value="'+message.xmmc+'" type="text" id="projectname" class="ck"/></p><p><label for="buildcom">建设单位：</label><input value="'+message.jsdw+'" type="text" id="buildcom"  class="ck"/></p>	<p><label for="dlgs">代理公司：</label><input value="'+message.dlgs+'" type="text" id="dlgs"  class="ck"/></p><p><label for="xmjl">项目经理：</label><input value="'+message.xmjl+'" type="text" id="xmjl"  class="ck"/><label for="kbrq">开标日期：</label><input value="'+message.kbrq+'" type="text" id="kbrq" class="ck"/></p><p><label for="zzyq">资质要求：</label><input value="'+message.zzyq+'" type="text" id="zzyq" class="ck"/><label for="wtq">委托人：</label><input value="'+message.wtr+'" type="text" id="wtr" class="ck"/></p><p><label for="bzj">保证金：</label><input value="'+message.bzj+'" type="text" id="bzj" class="ck"/>万&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="gq">工期：</label><input value="'+message.gq+'" type="text" id="gq" class="ck"/>天</p><p><label for="gczj">工程造价：</label><input value="'+message.gczj+'" type="text" id="gczj" class="ck"/>万元</p><p><label for="bz">备注：</label><textarea name="bz" id="bz" rows="4" cols="40" class="ck">'+message.bz+'</textarea></p></div><button class="ok">确定</button><button class="no">取消</button>';
		body.appendChild(details);
		var ok = document.getElementsByClassName("ok")[0];
		var no = document.getElementsByClassName("no")[0];
		ok.onclick = function(){
						getMsg();
						message.xmmc = xmmc;
						message.jsdw = jsdw;
						message.dlgs = dlgs;
						message.xmjl = xmjl;
						message.kbrq = kbrq;
						message.zzyq = zzyq;
						message.wtr = wtr;
						message.bzj = bzj;
						message.gq = gq;
						message.gczj = gczj;
						message.bz = bz;
						message.xgrq = Date.now();
						
						//把获取到的信息拼成字符串
						var strMsg = JSON.stringify(message);
						lsg[id] = strMsg;
						cls();
						ul.innerHTML='';
						projectMessage = [];
						showall();
					}
		no.onclick = cls;
	}else if(txt === "删除"){
		lsg.removeItem(id);
		ul.innerHTML='';
		projectMessage = [];
		showall();
	}else{
		return;
	}
}

//查询数据
ul.ondblclick = function(e){
	var id = e.target.dataset.id;
	var message = JSON.parse(lsg.getItem(id));
	//mask显示出来
	mask.style.display = "block";
	var details = document.createElement("div");
	details.className = "details";
	details.innerHTML = '<div class="details-box"><p><label for="projectname">项目名称：</label><input value="'+message.xmmc+'" type="text" id="projectname" class="ck" disabled="disabled"/></p><p><label for="buildcom">建设单位：</label><input value="'+message.jsdw+'" disabled="disabled" type="text" id="buildcom"  class="ck"/></p>	<p><label for="dlgs">代理公司：</label><input value="'+message.dlgs+'" disabled="disabled" type="text" id="dlgs"  class="ck"/></p><p><label for="xmjl">项目经理：</label><input value="'+message.xmjl+'" disabled="disabled" type="text" id="xmjl"  class="ck"/><label for="kbrq">开标日期：</label><input value="'+message.kbrq+'" disabled="disabled" type="text" id="kbrq" class="ck"/></p><p><label for="zzyq">资质要求：</label><input value="'+message.zzyq+'" disabled="disabled" type="text" id="zzyq" class="ck"/><label for="wtq">委托人：</label><input value="'+message.wtr+'" disabled="disabled" type="text" id="wtr" class="ck"/></p><p><label for="bzj">保证金：</label><input value="'+message.bzj+'" disabled="disabled" type="text" id="bzj" class="ck"/>万&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="gq">工期：</label><input value="'+message.gq+'" disabled="disabled" type="text" id="gq" class="ck"/>天</p><p><label for="gczj">工程造价：</label><input value="'+message.gczj+'" disabled="disabled" type="text" id="gczj" class="ck"/>万元</p><p><label for="bz">备注：</label><textarea disabled="disabled" name="bz" id="bz" rows="4" cols="40" class="ck">'+message.bz+'</textarea></p></div>';
	body.appendChild(details);
}
