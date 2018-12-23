
// バーの情報を保存するクラス
function gameBar(){
	this.x = 320;
	this.y = 420;
	this.halfWidth = 48;
	this.halfHeight = 6;
}

// ボールの情報を保存するクラス
function gameBall(){
	this.x = 320;
	this.y = 480;
	this.r = 4;
	this.ang = 120;
	this.speed = 2.1;
}

// ゲーム本体
function runGame(){
	// 初期化（GameFlgが未定義かで判別）
	if(!('GameFlg' in runGame)){
		runGame.GameFlg = 0;
		runGame.cnt = 0
		runGame.mdBar = new gameBar();
	}
	
	// 更新
	runGame.cnt = runGame.cnt + 1;
	runGame.mdBar.x = mouse.x;
	
	// 描画（背景）
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	
	// 描画（バー）
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.fillRect((runGame.mdBar.x-runGame.mdBar.halfWidth),(runGame.mdBar.y-runGame.mdBar.halfHeight),(2*runGame.mdBar.halfWidth),(2*runGame.mdBar.halfHeight));
	
	// 表示
	ctx.font = "12px Arial";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("mouse [x,y] = ["+mouse.x+","+mouse.y+"]", 6, 15 );
	ctx.fillText("runGame [GameFlg] = ["+runGame.GameFlg+"]", 6, 30 );
	ctx.fillText("runGame [cnt] = ["+runGame.cnt+"]", 6, 45 );
	
	// ループ処理
	setTimeout(arguments.callee, fps);
}
