//Create variables here
var dog,dogImg,happyDogImg;
var database;
var foods,foodStock;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;

  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}

function draw() {  
   background("yellow");
   if(keyWentDown(UP_ARROW)){
     writeStock(foods);
     dog.addImage(happyDogImg)
   }
  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
  text("Press UP_ARROW key to feed",100,50);
  text("Food:"+foodS,100,100)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{

  x=x-1;
  }
  
  database.ref('/').update({
   Food:x 
  })
}


