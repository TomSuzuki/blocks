
// �}�E�X�̍��W��ۑ�����N���X
function Point(){
    this.x = 0;
    this.y = 0;
}

// �����_����Ԃ�
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// 2�_�Ԃ̋�����Ԃ�
function getkyori(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
} 
