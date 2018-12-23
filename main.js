// グローバルで使うもの
var fps = 1000 / 30;
var mouse = new Point();
var screenCanvas, ctx, info;

// 最初に実行
window.addEventListener('load', function() {
	initialize();
})

// 初期化
function initialize(){
	screenCanvas = document.getElementById('canvas');
	screenCanvas.addEventListener('mousemove', mouseMove, true);
	ctx = screenCanvas.getContext('2d');
	info = document.getElementById('info');
	runGame();
}

// マウスカーソル座標の更新
function mouseMove(event){
	mouse.x = event.clientX - screenCanvas.offsetLeft + 640/2;
	mouse.y = event.clientY - screenCanvas.offsetTop + 480/2;
}


