var player;
var playerImage;
var imgTree;
var imgSand;
var imgPyramid;
var imgBox;
var imgWood;
var imgWood2;
var imgTrap;
var imgIce;
var scene;
var game;


function preload(){
	imgTree = loadImage('trees.png');
	imgSand = loadImage('sand.png');
	imgPyramid = loadImage('pyramid.png');
	imgBox= loadImage('box.png');
	imgWood= loadImage('wood.png')
	imgWood2= loadImage('wood2.png');
	imgTrap= loadImage('trap.png');
	imgFuji= loadImage('fuji.png');
	imgIce = loadImage('ice.png');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	scene=1;
	game= true;
	playerImage= loadImage('1.png');
	player = createSprite(200,605);
	player.scale-=0.5;
  player.maxSpeed = 10;
	player.addAnimation('stand','1.png');
	player.addAnimation('moving','1.png','2.png','4.png','2.png','3.png');
  player.addImage('normal', playerImage);
	player.setCollider("rectangle", 0,0,135,422);
	box1= createSprite(350,685,40,40);
	box1.addImage('normal',imgBox);
	wood1= createSprite(1400,-220);
	wood1.addImage('normal',imgWood);
	wood2= createSprite(1380,-200);
	wood2.addImage('normal',imgWood2)
	wood3= createSprite(1380,-700);
	wood3.addImage('normal',imgWood2)
	trap1= createSprite(600,740);
	trap1.scale-=0.2;
	trap1.addImage('normal',imgTrap);
	trap2= createSprite(1300,740);
	trap2.scale-=0.2;
	trap2.addImage('normal',imgTrap);
	trap3= createSprite(1460,740);
	trap3.scale-=0.2;
	trap3.addImage('normal',imgTrap);
	ice1= createSprite(400,-400);
	ice1.addImage('normal',imgIce);
	ice1.setCollider("rectangle",0,0,100,400);
	ice2= createSprite(600,-400);
	ice2.addImage('normal',imgIce)
	ice2.setCollider("rectangle",0,0,100,400);
	ice3= createSprite(800,-400);
	ice3.addImage('normal',imgIce)
	ice3.setCollider("rectangle",0,0,100,400);
	ice4= createSprite(1000,-400);
	ice4.addImage('normal',imgIce);
	ice4.setCollider("rectangle",0,0,100,400);
	ice5= createSprite(1200,-400);
	ice5.addImage('normal',imgIce);
	ice5.setCollider("rectangle",0,0,100,400);
}

function draw() {
	if(game==true){
		changeScene();
		movement();
		
		if(scene==1){
			trap1.visible= false;
			trap2.visible= false;
			trap3.visible= false;
			scene1();
		}
		if(scene==2){
			box1.remove();
			wood1.remove();
			scene2();
			trap1.visible= true;
			trap2.visible= true;
			trap3.visible= true;
		}
		if(scene==3){
			trap1.visible= false;
			trap2.visible= false;
			trap3.visible= false;
			wood2.visible=false;
			scene3();
		}
		if(scene==4){
			congrats();
		}
		gravity();
		drawSprites();
	}
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
	player.collide(wood1);
	player.collide(box1);
	fill(color(51,25,0));
	rect(750,700,140,500);
	if(player.position.x>=760 && player.position.x<= 880 && player.position.y==605 ){
		gameOver();
	}
	if(player.position.x>=1300){
		wood1.addSpeed(3,90);
	}
	if(wood1.position.y>700){
		wood1.setVelocity(0,0);
	}
	if(wood1.position.y<700 && player.position.y< wood1.position.y+20 && player.position.x> wood1.position.x-50){
		gameOver();
	}
}
function scene2(){
	background(color(255,204,153));
	image(imgSand,-380,480);
	image(imgPyramid,200,0);
	wood2.displace(trap3);
	wood2.displace(trap2);
	wood3.collide(wood2);
	player.collide(wood2);
	player.collide(wood3);
	if(player.position.y==605 && player.position.x>1250 && player.position.x<1500){
			gameOver();
	}
	if(player.position.y==605 && player.position.x>550 && player.position.x<650){
			gameOver();
	}
	if(player.position.y<570 && player.position.x>1000 && player.position.x<1100){
		wood2.addSpeed(2,90);
	}
	if(wood2.position.y>700){
		wood2.setVelocity(0,0);
	}
	if(player.position.x>1600){
		wood3.addSpeed(2,90);
	}
	if(wood3.position.y>405 && player.position.x>1100 && player.position.x<1600){
		gameOver();
	}
}
function scene3(){
	background(color(0));
	fill(color(120));
	rect(0,700,windowWidth,windowHeight-700);
	player.collide(ice1);
	player.collide(ice2);
	player.collide(ice3);
	player.collide(ice4);
	player.collide(ice5);
	if(player.position.x>300){
		ice1.addSpeed(1,90);
	}
	if(ice1.position.y>700){
		ice1.setVelocity(0,0);
		if(player.position.x<400){
			gameOver();
		}
	}
	if(player.position.x>500){
		ice2.addSpeed(1,90);
	}
	if(ice2.position.y>700){
		ice2.setVelocity(0,0);
		if(player.position.x<600){
			gameOver();
		}
	}
	if(player.position.x>700){
		ice3.addSpeed(1,90);
	}
	if(ice3.position.y>700){
		ice3.setVelocity(0,0);
		if(player.position.x<800){
			gameOver();
		}
	}
	if(player.position.x>900){
		ice4.addSpeed(1,90);
	}
	if(ice4.position.y>700){
		ice4.setVelocity(0,0);
		if(player.position.x<1000){
			gameOver();
		}
	}
	if(player.position.x>1100){
		ice5.addSpeed(1,90);
	}
	if(ice5.position.y>700){
		ice5.setVelocity(0,0);
		if(player.position.x<1200){
			gameOver();
		}
	}
	
}
function gravity(){
	if(player.position.y<605){
		player.addSpeed(0.5,90);
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
function clean(){
	box1.remove();
	wood1.remove();
	wood2.remove();
	wood3.remove();
	trap1.remove();
	trap2.remove();
	trap3.remove();
	
}
function cleanIce(){
	ice1.remove();
	ice2.remove();
	ice3.remove();
	ice4.remove();
	ice5.remove();
}
function gameOver(){
	fill(color(0));
	rect(0,0,windowWidth,windowHeight);
	fill(color(255));
	textSize(200);
	text('Game Over',400,400);
	player.remove();
	clean();
	game= false;
}
function congrats(){
	fill(color(0));
	rect(0,0,windowWidth,windowHeight);
	fill(color(255));
	textSize(200);
	text('YOU WIN!',400,400);
	player.position.x= windowWidth/2;
	clean();
	cleanIce();
	game=false;
}
