
// �o�[�̏���ۑ�����N���X
function gameBar(){
	this.x = 320;
	this.y = 420;
	this.halfWidth = 48;
	this.halfHeight = 6;
}

// �{�[���̏���ۑ�����N���X�i���Ƃŏ����ƕ`����܂Ƃ߂�j
function gameBall(){
	this.x = 320;
	this.y = 240;
	this.bx = 320;
	this.by = 380;
	this.r = 8;
	this.ang = 45+90;
	this.speed = 4.1;
}

// �u���b�N��ۑ�����iry
function gameBlock(x, y){
	this.x = x;
	this.y = y;
	this.width = 48;
	this.cnt = -60;
}

// �Q�[���{��
function runGame(){
	// �������iGameFlg������`���Ŕ��ʁj
	if(!('GameFlg' in runGame)){
		runGame.GameFlg = 0;
		runGame.cnt = 0;
		runGame.score = 0;
		runGame.mdBar = new gameBar();
		runGame.gameBall = new gameBall();
		runGame.gameBlock = [];
	}
	
	// �u���b�N�̐���
	if(runGame.cnt%15 == 0 && runGame.gameBall.y >= 250){
		var x = getRandomInt(480-60)+30;
		var y = getRandomInt(210)+30;
		var flg = 1;
		for(var i = 0;i < runGame.gameBlock.length;i++){
			if(getkyori(x,y,runGame.gameBlock[i].x,runGame.gameBlock[i].y) < 64) flg = 0;
		}
		if(flg == 1){
			runGame.gameBlock.push(new gameBlock(x,y));
		}
	}
	
	// �X�V
	runGame.cnt = runGame.cnt + 1;
	runGame.mdBar.x = mouse.x;
	
	// �u���b�N�̏���
	for(var i = 0;i < runGame.gameBlock.length;i++){
		var x = runGame.gameBlock[i].x;
		var y = runGame.gameBlock[i].y;
		var width = runGame.gameBlock[i].width;
		runGame.gameBlock[i].cnt++;
		// �����蔻��
		if(runGame.gameBlock[i].cnt >= 0){
			if(runGame.gameBall.x+runGame.gameBall.r >= x-width/2 && runGame.gameBall.x-runGame.gameBall.r <= x+width/2){	// x���W��������i��Ɖ��̔�����s�����Ƃ��ł���j
				if(runGame.gameBall.by+runGame.gameBall.r < y-width/2 && runGame.gameBall.y+runGame.gameBall.r >= y-width/2){		// ��ɂ�������
					runGame.gameBall.ang = runGame.gameBall.ang - 180 + (-runGame.gameBall.ang)*2;
					runGame.gameBlock.splice(i,1);
					runGame.score = runGame.score + 100;
					continue;
				}
				if(runGame.gameBall.by-runGame.gameBall.r > y+width/2 && runGame.gameBall.y-runGame.gameBall.r <= y+width/2){		// ���ɂ�������
					runGame.gameBall.ang = runGame.gameBall.ang - 180 + (180-runGame.gameBall.ang)*2;
					runGame.gameBlock.splice(i,1);
					runGame.score = runGame.score + 100;
					continue;
				}
			}
			if(runGame.gameBall.y+runGame.gameBall.r >= y-width/2 && runGame.gameBall.y-runGame.gameBall.r <= y+width/2){	// y���W��������i�E�ƍ��̔�����s�����Ƃ��ł���j
				if(runGame.gameBall.bx+runGame.gameBall.r < x-width/2 && runGame.gameBall.x+runGame.gameBall.r >= x-width/2){		// ���ɂ�������
					runGame.gameBall.ang = runGame.gameBall.ang - 180 + (90-runGame.gameBall.ang)*2;
					runGame.gameBlock.splice(i,1);
					runGame.score = runGame.score + 100;
					continue;
				}
				if(runGame.gameBall.bx-runGame.gameBall.r > x+width/2 && runGame.gameBall.x-runGame.gameBall.r <= x+width/2){		// �E�ɂ�������
					runGame.gameBall.ang = runGame.gameBall.ang - 180 + (270-runGame.gameBall.ang)*2;
					runGame.gameBlock.splice(i,1);
					runGame.score = runGame.score + 100;
					continue;
				}
			}
		}
	}

	// �{�[���̏���
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
	
	// �`��i�w�i�j
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	
	// �`��i�u���b�N�j
	for(var i = 0;i < runGame.gameBlock.length;i++){
		var x = runGame.gameBlock[i].x;
		var y = runGame.gameBlock[i].y;
		var cnt = runGame.gameBlock[i].cnt;
		var width = runGame.gameBlock[i].width;
		if(cnt < 0){
			var w = ((255.0+(cnt*255/60))/255);
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(cnt*8*Math.PI/180);
			ctx.fillStyle = "rgba(120,120,120,"+w+")";
			ctx.fillRect(-width/2*w,-width/2*w,width*w,width*w);
			ctx.restore();
		}else{
			ctx.fillStyle = "rgb(120,120,120)";
			ctx.fillRect(x-width/2,y-width/2,width,width);
		}
	}
	
	// �`��i�{�[���j
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.arc(runGame.gameBall.x, runGame.gameBall.y, runGame.gameBall.r, 0, 2*Math.PI, true);
	ctx.fill();
	
	// �`��i�o�[�j
	ctx.fillStyle = "rgb(120,120,120)";
	ctx.fillRect((runGame.mdBar.x-runGame.mdBar.halfWidth),(runGame.mdBar.y-runGame.mdBar.halfHeight),(2*runGame.mdBar.halfWidth),(2*runGame.mdBar.halfHeight));
	
	// �\��
	ctx.font = "bold 24px Arial";
	ctx.textAlign = "center";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText(runGame.score, 320, 30);
	
	// �\��
	if(runGame.GameFlg == 1){
		ctx.font = "bold 64px Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillText("GAME OVER", 320, 190);
		ctx.font = "bold 48px Arial";
		ctx.fillText(("SCORE : "+runGame.score), 320, 280);
	}
	
	/*// �\���i�f�o�b�O�j
	ctx.font = "12px Arial";
	ctx.textAlign = "left";
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillText("mouse [x,y] = ["+mouse.x+","+mouse.y+"]", 6, 15 );
	ctx.fillText("runGame [GameFlg] = ["+runGame.GameFlg+"]", 6, 30 );
	ctx.fillText("runGame [cnt] = ["+runGame.cnt+"]", 6, 45 );
	/**/
	
	// ���[�v����
	setTimeout(arguments.callee, fps);
}
