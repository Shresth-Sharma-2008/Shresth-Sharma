var A1=0;
var A2=0;
var A3=0;
var P1,P2,P3;
var M1,M2,M3;
let pass;
function setup(){
    alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    let person = prompt("File is protected please enter PIN - 3288", "");
    if (person == 3288) {
        pass=1
    } else{
        alert("Wrong PIN");
    }
    if(pass==1){
    createCanvas(windowWidth,windowHeight);
    P1=createButton('+');
    P2=createButton('+');
    P3=createButton('+');
    P1.position(windowWidth/2-150,170);
    P2.position(windowWidth/2,170);
    P3.position(windowWidth/2+150,170);
    M1=createButton('-');
    M2=createButton('-');
    M3=createButton('-');
    M1.position(windowWidth/2-150,200);
    M2.position(windowWidth/2,200);
    M3.position(windowWidth/2+150,200);
    }
}
function draw(){
    if(pass==1){
    background(A1,A2,A3)
    textSize(50);
    text("Red",windowWidth/2-150,100);
    text("Green",windowWidth/2,100);
    text("Blue",windowWidth/2+150,100);
    text(A1,windowWidth/2-150,150);
    text(A2,windowWidth/2,150);
    text(A3,windowWidth/2+150,150);
    P1.mousePressed(()=>{
        A1=A1+1
    });
    P2.mousePressed(()=>{
        A2=A2+1
    });
    P3.mousePressed(()=>{
        A3=A3+1
    });
    M1.mousePressed(()=>{
        A1=A1-1
    });
    M2.mousePressed(()=>{
        A2=A2-1
    });
    M3.mousePressed(()=>{
        A3=A3-1
    });
}
}
