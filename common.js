
// マウスの座標を保存するクラス
function Point(){
    this.x = 0;
    this.y = 0;
}

// ランダムを返す
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// 2点間の距離を返す
function getkyori(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
} 
