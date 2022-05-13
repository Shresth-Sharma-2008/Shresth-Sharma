//changables
var Birds = 1;
var Birds1 = 1;
var Pigs=3;
function setup(){
    //frameRate(1);
    setup1();
    //Enter Objects Here
    //box = new Box(x,y,width,height)
    //log = new Log(x,y,width,length,PI/2)
    //pig = new Pig(x,y,width,height)
    box1 = new Box(800,550,100,100);
    box2 = new Box(1000,550,100,100);
    box3 = new Box(800,440,80,80);
    box4 = new Box(1000,440,80,80);
    box5 = new Box(800,360,80,80);
    box6 = new Box(1000,360,80,80);
    box7 = new Box(800,280,80,80);
    box8 = new Box(1000,280,80,80);
    log1 = new Log(900,490,20,300,PI/2);
    log2 = new Log(720,350,60,500,PI);
    log3 = new Log(1080,350,60,500,PI);
    pig1 = new Pig(900,450,60,60);
    pig2 = new Pig(800,210,60,60);
    pig3 = new Pig(1000,210,60,60);
}

function draw(){
    draw1();
    //Enter Ojbects Here
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    log1.display();
    log2.display();
    log3.display();
    pig1.display();
    pig2.display();
    pig3.display();
}