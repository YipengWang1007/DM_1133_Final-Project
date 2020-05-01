var player;
var playerImage;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
	playerImage= loadImage('1.png');
	player = createSprite(400,515);
  player.maxSpeed = 10;
	player.addAnimation('stand','1.png');
	player.addAnimation('moving','1.png','2.png','4.png','2.png','3.png');
  player.addImage('normal', playerImage);
}
function preload(){
	
}

function draw() {
	
	
	if(keyDown(LEFT_ARROW)){
		player.mirrorX(-1);
		player.changeAnimation('moving');
		player.setVelocity(-2,0);
		
	}
  if(keyDown(RIGHT_ARROW)){
		player.mirrorX(1);
		player.changeAnimation('moving');
		player.setSpeed(2,0);
		
	}
	background(color(153,255,255));
	ground(700);
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