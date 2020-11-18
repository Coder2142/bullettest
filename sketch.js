var bullet;
var wall, thickness;
var speed, weight;





function setup() {
  createCanvas(1600,400);
  speed=random(210,220);
  weight=random(15,30);
  thickness=random(20,75);
  damage = Math.round(random(8,15));

  
  bullet = createSprite(200, 200, 20, 50);
  bullet.velocityX = speed;
  wall = createSprite(1000, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  
  
  if(hasCollided(bullet, wall))
  {
    //bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }

    if(damage<=10)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}


function hasCollided (bullet, wall) 
{
  bullet.collide(wall);
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if(bulletRightEdge<=wallLeftEdge)
  {
    return true
  }
  return false;
}

