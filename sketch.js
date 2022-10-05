var box;
function setup() {
  createCanvas(400,800);
  box = createSprite(200,200,100,100)
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
   box.x += 10;
   console.log("right");
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x -= 10;
    console.log("left");
   }
  text("hello",200,200);
}




