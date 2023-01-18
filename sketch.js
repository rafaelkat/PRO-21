
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world;
var engine;
var parede1;
var parede2;
var parede3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density: 1.2
		}

	Engine.run(engine);
	parede1 = new parede(width/2, 670, width, 20);
	parede2 = new parede(1100, 600, 20, 120);
	parede3 = new parede(1350, 600, 20, 120);

	ball = Bodies.circle(260, 100, 20, ball_options);
	World.add (world,ball);

}


function draw() {
  rectMode(CENTER);
  background("red");
  parede1.Show();
  parede2.Show();
  parede3.Show();
   ellipse(ball.position.x, ball.position.y, 20, 20);

}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x: 85, y: -85});

	}

}


