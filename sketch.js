const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse

var engine,world
var bob1,bob2,bob3,bob4,bob5
var sling1,sling2,sling3,sling4,sling5

function setup() {
  createCanvas(windowWidth/2,windowHeight/1.5);

  engine=Engine.create();
  world = engine.world

  let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity()

  let options = {
    mouse:canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options)
  World.add(world,mConstraint)

  bob1=new Bob(width/5+30,height/2,25);
  bob2=new Bob(bob1.body.position.x+50,height/3,25);
  bob3=new Bob(bob2.body.position.x+50,height/3,25);
  bob4=new Bob(bob3.body.position.x+50,height/3,25);
  bob5=new Bob(bob4.body.position.x+50,height/3,25);

  sling1=new Slingshot(bob1.body,{x:width/5+30,y:height/3})
  sling2=new Slingshot(bob2.body,{x:sling1.sling.pointB.x+50,y:height/3})
  sling3=new Slingshot(bob3.body,{x:sling2.sling.pointB.x+50,y:height/3})
  sling4=new Slingshot(bob4.body,{x:sling3.sling.pointB.x+50,y:height/3})
  sling5=new Slingshot(bob5.body,{x:sling4.sling.pointB.x+50,y:height/3})
}

function draw() {
  background(0); 
  
  Engine.update(engine)

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()

  text(mouseX+","+mouseY,mouseX,mouseY)
}