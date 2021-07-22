var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
  ball.shapeColor="red"
}

function draw() 
{
  background("Green"); 
  if (keyDown(RIGHT_ARROW)){
    ball.position.x=ball.position.x+5
  }
  if (keyDown(LEFT_ARROW)){
    ball.position.x=ball.position.x-5
  }
  if (keyDown(UP_ARROW)){
    ball.position.y=ball.position.y-5
  }
  if (keyDown(DOWN_ARROW)){
    ball.position.y=ball.position.y+5
  }

  drawSprites();
}





