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

// ゲーム本体
function runGame(){
	// 更新
		
	// 描画
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
	ctx.arc(mouse.x-5, mouse.y-5, 10, 0, Math.PI * 2, false);
	ctx.fill();
	
	// ループ処理
	setTimeout(arguments.callee, fps);
}


