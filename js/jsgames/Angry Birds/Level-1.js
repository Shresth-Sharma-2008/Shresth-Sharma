//changables
var Birds = 1;
var Birds1 = 1;
var Pigs=1;
function setup(){
  //frameRate(1);
    setup1();
    //Enter Objects Here
    //box = new Box(x,y,width,height)
    //log = new Log(x,y,width,length,PI/2)
    //pig = new Pig(x,y,width,height)
    log1 = new Log(890,590,20,110,PI/2);
    log2 = new Log(800,500,60,200,PI);
    log3 = new Log(980,500,60,200,PI);
    pig1 = new Pig(885,530,100,100);
    box1 = new Box(885,290,200,200);
    box2 = new Box(885,115,150,150);
}

function draw(){
    draw1();
    //Enter Ojbects Here
    log1.display();
    log2.display();
    log3.display();
    pig1.display();
    box1.display();
    box2.display();
}