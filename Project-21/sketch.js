
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundobj;
var radius = 40;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	groundobj = new Ground(width/2,670,width,20);
    leftside = new Ground(1100,600,20,120);
	rightside = new Ground(1350,600,20,120);
	
	ball = Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);

  background(0);
  
  Engine.update(engine);
  
  groundobj.display();
  leftside.display();
  rightside.display();

  ellipse(ball.position.x,ball.position.y,radius,radius)

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); 
	
	}
}
