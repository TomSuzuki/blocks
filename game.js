
// バーの情報を保存するクラス
function gameBar(){
	this.x = 320;
	this.y = 420;
	this.halfWidth = 48;
	this.halfHeight = 6;
}

// ボールの情報を保存するクラス（あとで処理と描画をまとめる）
function gameBall(){
	this.x = 320;
	this.y = 240;
	this.bx = 320;
	this.by = 240;
	this.r = 8;
	this.ang = 45+90;
	this.speed = 4.1;
}

// ゲーム本体
function runGame(){
	// 初期化（GameFlgが未定義かで判別）
	if(!('GameFlg' in runGame)){
		runGame.GameFlg = 0;
		runGame.cnt = 0;
		runGame.score = 0;
		runGame.mdBar = new gameBar();
		runGame.gameBall = new gameBall();
	}
	
	// 更新
	runGame.cnt = runGame.cnt + 1;
	runGame.mdBar.x = mouse.x;
	
	// ボールの処理
	if(runGame.gameBall.x <= runGame.gameBall.r) runGame.gameBall.ang = runGame.gameBall.ang - 180 + (270-runGame.gameBall.ang)*2;
	if(runGame.gameBall.x >= -runGame.gameBall.r+640) runGame.gameBall.ang = runGame.gameBall.ang - 180 + (90-runGame.gameBall.ang)*2;
	if(runGame.gameBall.y <= runGame.gameBall.r) runGame.gameBall.ang = runGame.gameBall.ang - 180 + (180-runGame.gameBall.ang)*2;
	if(runGame.gameBall.x+runGame.gameBall.r >= runGame.mdBar.x-runGame.mdBar.halfWidth && runGame.gameBall.x-runGame.gameBall.r <= runGame.mdBar.x+runGame.mdBar.halfWidth){
		if(runGame.gameBall.by+runGame.gameBall.r < runGame.mdBar.y-runGame.mdBar.halfHeight && runGame.gameBall.y+runGame.gameBall.r >= runGame.mdBar.y-runGame.mdBar.halfHeight){
			runGame.gameBall.ang = runGame.gameBall.ang - 180 + (-runGame.gameBall.ang)*2;
		}
	}
	if(runGame.gameBall.y >= 620) runGame.GameFlg = 1;
	runGame.gameBall.bx = runGame.gameBall.x;
	runGame.gameBall.by = runGame.gameBall.y;
	runGame.gameBall.x = runGame.gameBall.x + runGame.gameBall.speed * Math.sin(runGame.gameBall.ang * (Math.PI / 180));
	runGame.gameBall.y = runGame.gameBall.y + runGame.gameBall.speed * Math.cos(runGame.gameBall.ang * (Math.PI / 180));
	
	// 描画（背景）
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	
	// 描画（ボール）
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.arc(runGame.gameBall.x, runGame.gameBall.y, runGame.gameBall.r, 0, 2*Math.PI, true);
	ctx.fill();
	
	// 描画（バー）
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.fillRect((runGame.mdBar.x-runGame.mdBar.halfWidth),(runGame.mdBar.y-runGame.mdBar.halfHeight),(2*runGame.mdBar.halfWidth),(2*runGame.mdBar.halfHeight));
	
	// 表示
	ctx.font = "bold 24px Arial";
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText(runGame.score, 320, 30);
	
	// 表示
	if(runGame.GameFlg == 1){
		ctx.font = "bold 64px Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillText("GAME OVER", 320, 190);
	}
	
	/**/// 表示（デバッグ）
	ctx.font = "12px Arial";
	ctx.textAlign = "left";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("mouse [x,y] = ["+mouse.x+","+mouse.y+"]", 6, 15 );
	ctx.fillText("runGame [GameFlg] = ["+runGame.GameFlg+"]", 6, 30 );
	ctx.fillText("runGame [cnt] = ["+runGame.cnt+"]", 6, 45 );
	/**/
	
	// ループ処理
	setTimeout(arguments.callee, fps);
}
