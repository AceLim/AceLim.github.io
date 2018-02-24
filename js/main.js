//获取图片的宽高
var WIDTH = parseInt(getComputedStyle(document.getElementById("img"),null).width);
var HEIGHT = parseInt(getComputedStyle(document.getElementById("img"),null).height);
//取得图片中心点的坐标
var orginW = WIDTH/2;
var orginH = HEIGHT/2;

var DEG = 10;

new Vue({
	el: "#app",
	data() {
		return {
			currentImg: null,
			xDeg: 0,
			yDeg: 0
		}
	},
	methods: {
		enter(e) {
			this.currentImg = e.target.firstElementChild
		},
		leave() {
			this.xDeg = 0
			this.yDeg = 0
			this.currentImg.style.transform = "rotateX("+this.yDeg+"deg) rotateY("+this.xDeg+"deg)"
			this.currentImg = null
		},
		move(e) {
			if(!this.currentImg) {
				return
			}
			// 取得鼠标x、y坐标，并进行边界处理
			var offsetX = e.offsetX
			var offsetY = e.offsetY
			if(offsetX < 0) {
				offsetX = 0
			}else if(offsetX > WIDTH) {
				offsetX = WIDTH
			}
			if(offsetY < 0) {
				offsetY = 0
			}else if(offsetY > HEIGHT) {
				offsetY = HEIGHT
			}

			this.xDeg = (offsetX-orginW)/orginW*DEG
			this.yDeg = -(offsetY-orginH)/orginH*DEG

			this.currentImg.style.transform = "rotateX("+this.yDeg+"deg) rotateY("+this.xDeg+"deg)"
		}
	}
})
