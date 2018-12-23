// �O���[�o���Ŏg������
var fps = 1000 / 30;
var mouse = new Point();
var screenCanvas, ctx, info;

// �ŏ��Ɏ��s
window.addEventListener('load', function() {
	initialize();
})

// ������
function initialize(){
	screenCanvas = document.getElementById('canvas');
	screenCanvas.addEventListener('mousemove', mouseMove, true);
	ctx = screenCanvas.getContext('2d');
	info = document.getElementById('info');
	runGame();
}

// �}�E�X�J�[�\�����W�̍X�V
function mouseMove(event){
	mouse.x = event.clientX - screenCanvas.offsetLeft + 640/2;
	mouse.y = event.clientY - screenCanvas.offsetTop + 480/2;
}

// �Q�[���{��
function runGame(){
	// �X�V
		
	// �`��
	ctx.beginPath();
	ctx.fillStyle = "rgb(20,20,20)";
	ctx.fillRect(0,0,640,480);
	ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
	ctx.arc(mouse.x-5, mouse.y-5, 10, 0, Math.PI * 2, false);
	ctx.fill();
	
	// ���[�v����
	setTimeout(arguments.callee, fps);
}


