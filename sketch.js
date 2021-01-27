
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var p,dustbinObj;
var g;

function setup() {
	createCanvas(1200, 600);
    background(0);

	engine = Engine.create();
  world = engine.world;
  
  var render = Render.create({element: document.body,
     engine: engine,
    options: {width: 200, height: 200, wireFrame: false}});
 
  g = new Ground(600,height,1200,20)

  dustbinObj=new dustbin(1000,560);
  
  p = new dump(100,450,20);


  Engine.run(engine);
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 400,
	    height: 400,
	    wireframes: false
	  }
	});

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  g.display();
  
  dustbinObj.display();
  

  p.display();

  console.log(p.y);

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(p.body,p.body.position,{x:85,y:-85});
  
  }
}



