//changables
var Birds = 6;
var Birds1 = 6;
var Pigs=1;
function setup(){
    setup1();
    //Enter Objects Here
    //box = new Box(x,y,width,height)
    //log = new Log(x,y,thickness,length,PI/2)
    //pig = new Pig(x,y,width,height)
    box1 = new Box(600,100,400,400);
    box2 = new Box(600,400,200,200);
    box3 = new Box(600,550,100,100);
    box4 = new Box(1000,-300,400,400);
    box5 = new Box(1000,400,200,200);
    box6 = new Box(1000,550,100,100);
    box7 = new Box(600,-300,400,400);
    box8 = new Box(600,-700,400,400);
    box9 = new Box(1000,-700,400,400);
    box10 = new Box(1000,100,400,400);
    log1 = new Log(800,560,80,300,PI/2);
    //log2 = new Log(475,560,80,150,PI/2);
    pig1 = new Pig(800,470,100,100);
}
function draw(){
    draw1();
    //Enter Ojbects Here
    //box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    log1.display();
    //log2.display();
    pig1.display();
}