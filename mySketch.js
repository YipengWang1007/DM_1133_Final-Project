var player;
var playerImage;
var imgTree;
var imgSand;
var imgPyramid;
var scene;
function preload(){
	imgTree = loadImage('trees.png');
	imgSand = loadImage('sand.png');
	imgPyramid = loadImage('pyramid.png');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	scene=1;
	
	playerImage= loadImage('1.png');
	player = createSprite(200,605);
	player.scale-=0.5;
  player.maxSpeed = 10;
	player.addAnimation('stand','1.png');
	player.addAnimation('moving','1.png','2.png','4.png','2.png','3.png');
  player.addImage('normal', playerImage);
}

function draw() {
	movement();
	changeScene();
	if(scene==1){
		scene1();
	}
	if(scene==2){
		scene2();
	}
	gravity();
	drawSprites();
}
function movement(){
		if(keyDown(LEFT_ARROW)){
			player.mirrorX(-1);
			player.changeAnimation('moving');
			player.setVelocity(-5,0);

		}
		if(keyDown(RIGHT_ARROW)){
			if(player.position.x<10){
				player.position.x=12;
			}
			player.mirrorX(1);
			player.changeAnimation('moving');
			player.setSpeed(5,0);

		}
	  if(keyDown(UP_ARROW)){
			if(player.position.y>500){
				player.addSpeed(9,270)
			}
		}
	  if(player.position.x<10){
			player.setSpeed(0,0);
		}
}
function scene1(){
	background(color(102,255,255));
	ground1(700);
	image(imgTree,400,290); 
}
function scene2(){
	background(color(255,204,153));
	image(imgSand,-380,480);
	image(imgPyramid,200,0);
}
function gravity(){
	if(player.position.y<570){
		player.addSpeed(4,90);
	}
	if(player.position.y>605){
		player.position.y=605;
		player.setSpeed(0,90);
	}
}
function ground1(y){
	fill(color(0,102,0));
	rect(0,y,windowWidth,40);
	fill(color(102,51,0));
	rect(0,y+20,windowWidth,windowHeight-y+40);
}
function changeScene(){
	if(player.position.x> windowWidth){
		scene+=1;
		player.position.x=200;
	}
}