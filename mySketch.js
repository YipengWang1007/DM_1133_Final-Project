var player;
var playerImage;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(color(153,255,255));
	
	playerImage= loadImage('player.png');
	player = createSprite(400,650);
  player.maxSpeed = 10;

  player.addImage('normal', playerImage);
}

function draw() {
	ground(700);
	
	if(keyDown(LEFT_ARROW)){
		player.setVelocity(-1,0);
		
	}
  if(keyDown(RIGHT_ARROW)){
		player.setSpeed(1,0);
		
	}
	drawSprites();
}
function pipe(x,h){
	
}
function ground(y){
	fill(color(0,102,0));
	rect(0,y,windowWidth,40);
	fill(color(102,51,0));
	rect(0,y+20,windowWidth,windowHeight-y+40);
}