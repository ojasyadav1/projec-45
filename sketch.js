var towerImg, tower;
var doorImg, door, doorsgroup;
var climber, climberImg;
var ghost, ghostImg;
var gamestate = "play";

function preload(){
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("ghost-standing.png");
spookySound = loadSound("spooky.wav");

}

function setup(){
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;
  
}



function draw(){
drawSprites();
}