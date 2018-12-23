
// �o�[�̏���ۑ�����N���X
function gameBar(){
	this.x = 320;
	this.y = 420;
	this.halfWidth = 48;
	this.halfHeight = 6;
}

// �{�[���̏���ۑ�����N���X
function gameBall(){
	this.x = 320;
	this.y = 480;
	this.r = 4;
	this.ang = 120;
	this.speed = 2.1;
}

// �Q�[���{��
function runGame(){
	// �������iGameFlg������`���Ŕ��ʁj
	if(!('GameFlg' in runGame)){
		runGame.GameFlg = 0;
		runGame.cnt = 0
		runGame.mdBar = new gameBar();
	}
	
	// �X�V
	runGame.cnt = runGame.cnt + 1;
	runGame.mdBar.x = mouse.x;
	
	// �`��i�w�i�j
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	
	// �`��i�o�[�j
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.fillRect((runGame.mdBar.x-runGame.mdBar.halfWidth),(runGame.mdBar.y-runGame.mdBar.halfHeight),(2*runGame.mdBar.halfWidth),(2*runGame.mdBar.halfHeight));
	
	// �\��
	ctx.font = "12px Arial";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("mouse [x,y] = ["+mouse.x+","+mouse.y+"]", 6, 15 );
	ctx.fillText("runGame [GameFlg] = ["+runGame.GameFlg+"]", 6, 30 );
	ctx.fillText("runGame [cnt] = ["+runGame.cnt+"]", 6, 45 );
	
	// ���[�v����
	setTimeout(arguments.callee, fps);
}
