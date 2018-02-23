//获取图片的宽高
const WIDTH = parseInt(getComputedStyle(document.getElementById("img"),null).width);
const HEIGHT = parseInt(getComputedStyle(document.getElementById("img"),null).height);
//取得图片中心点的坐标
const orginW = WIDTH/2;
const orginH = HEIGHT/2;

const DEG = 10;

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
			this.currentImg = e.target
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
			let offsetX = e.offsetX
			let offsetY = e.offsetY
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

			// this.currentImg.style.transform = "rotate("+this.xDeg+"deg,"+this.yDeg+"deg)"
			this.currentImg.style.transform = "rotateX("+this.yDeg+"deg) rotateY("+this.xDeg+"deg)"
			console.log(this.currentImg.style.transform)
		}
	}
})
