const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cbase;
var Playerbase;
var p,c;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
cbase = new CB(width-150,height/2,100,100);
Playerbase = new PB(150,height/2,100,100);
p = new P(165,height/2-100,50,100);
c = new C(width-140,height/2-100,50,100)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cbase.display();
Playerbase.display();
p.display();
c.display();
   //display Player and computerplayer


}
