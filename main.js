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


