const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball;
var ground;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

  var ballOptions={
    restitution:1.3,
    density:0.8,
  }
  ball=Bodies.circle(400,100,25,ballOptions);
  World.add(world,ball);

  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,800,20,groundOptions);
  World.add(world,ground);
}

function draw() {
  background("red"); 
  Engine.update(engine);
  fill ("brown");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  fill("cyan");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
}