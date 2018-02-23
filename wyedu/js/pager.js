//Pager构造函数,size:总页数
function Pager(size){
//	pageUl:翻页器容器
	pageUl = document.getElementsByClassName('page')[0];
//	size:总页数
	var size = size;
	
//	创建li,传入li名字,li类名,页数，并append到pageUl中
	var createLi = function(liName,liClass,pageId){
		var li = document.createElement('li');
		li.innerHTML=liName;
		li.className += liClass;
		li.dataset.pageid=pageId;
		pageUl.appendChild(li);
	}
	
	return {
//		pageTo:翻至第几页,传入一个num
		pageTo:function(pageNum){
			if(pageNum<1){
				return;
			}
//			step1:清空ul
			pageUl.innerHTML='';
//			step2:判断传入的pageNum,创建首页与上一页	
			if(pageNum == 1){
				createLi('首页','page-first-li-disable',0);
				createLi('上一页','page-previous-li-disble',0);
			}else{
				createLi('首页','page-first-li',1);
				createLi('上一页','page-previous-li',pageNum-1);
			}
			
//			step3:判断总页数,创建页数li
//			如果总页数在8页内,直接全部显示
			if(size <= 8){
				for(var i = 1;i <= size;i++){
//					把pageNum设置为当前页，其余的页数正常显示
					if(pageNum == i){
						createLi(i,'page-index-li',i);
					}else{
						createLi(i,'page-normal-li',i);
					}
				}
			}else{
//				总页数大于8时,根据pageNum来生成页码
//				判断pageNum
//				当pageNum在前三位之中时
				if(pageNum < 4){
					for(var i=1;i<5;i++){
						if(pageNum == i){
							createLi(i,'page-index-li',i);
						}else{
							createLi(i,'page-normal-li',i);
						}
					}
					createLi('...','page-space-li',0);
					for(var i=size-2;i<=size;i++){
						createLi(i,'page-normal-li',i);
					}
//				当pageNum > size-3 就是最后四位之中时
				}else if(pageNum > size-3){
					for(var i=1;i<4;i++){
						createLi(i,'page-normal-li',i);
					}
					createLi('...','page-space-li',0);
					for(var i=size-3;i<=size;i++){
						if(pageNum == i){
							createLi(i,'page-index-li',i);
						}else{
							createLi(i,'page-normal-li',i);
						}
					}
//				当pageNum在前四位与后四位之间时
				}else{
//					pageNum在前半段时
					if(pageNum < size/2){
						for(i=pageNum-2;i<=parseInt(pageNum)+1;i++){
						if(pageNum==i){
								createLi(i,'page-index-li',i);
							}else{
								createLi(i,'page-normal-li',i);
							}						
						}
						createLi('...','page-space-li',0);
						for(i=size-2;i<=size;i++){
							createLi(i,'page-normal-li',i);
						}
//					pageNum在后半段时
					}else{
						for(i=1;i<=3;i++){
							createLi(i,'page-normal-li',i);
						}
						createLi('...','page-space-li',0);
						for(var i=pageNum-1;i<=parseInt(pageNum)+2;i++){
							if(pageNum==i){
								createLi(i,'page-index-li',i);
							}else{
								createLi(i,'page-normal-li',i);
							}
						}
					}	
				}			
			}
//			最后显示下一页与末页
//			如果是当前页是最后一页
			if(pageNum==size){
				createLi('下一页','page-next-li-disable',0);
				createLi('末页','page-last-li-disable',0)
			}else{
				createLi('下一页','page-next-li',parseInt(pageNum)+1);
				createLi('末页','page-last-li',size);
			}
		}
	}
}