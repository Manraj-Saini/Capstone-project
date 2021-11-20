  
var towerImg, tower;
var targetImg, target,
var person, personImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  targetImg = loadImage("target.png");
  personImg = loadImage("person.jpg");
  
}

function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 
  invisibleBlockGroup = new Group();
  
  person = createSprite(200,200,50,50);
  person.scale = 0.3;
  person.addImage("person", personImg);
}


function draw() {
  background(255);
 if(tower.y > 400){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        person.x = person.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right_arrow")){
  
          person.x = person.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
  
         person.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  person.velocityY = person.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawntarget();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     
    if(invisibleBlockGroup.isTouching(person) || person.y > 600){
      person.destroy();
      person = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawntarget()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var target = createSprite(200, -50);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    target.addImage(targetImg);
    
    
    target.velocityY = 1;
    
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     
person.depth = target.depth;
    person.depth +=1;
    
    //assign lifetime for the  door, climber and invisible block

 target.lifetime = 800;
    
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     
    invisibleBlock.debug = true;
    
    invisibleBlockGroup.add(invisibleBlock);
  }
}

