var line1,line2,line3,line4,line5,line6,line7,line8;
var inv1,inv2,inv3,iv4,iv5,inv6,inv7,inv8,inv9;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var s1,s2,s3,s4,s5,s6,s7,s8,s9;
var gamemode=0;
var chance=0;
var chance1,chance2;
var C,O;
var q1,q2,q3,q4,q5,q6,q7,q8,q9;
var w1,w2,w3,w4,w5,w6,w7,w8,w9;
let pass=0;
function preload(){
 C=loadImage("png/cross.png")
 O=loadImage("png/O.png")
}
function setup(){
  alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    let person = prompt("File is protected please enter PIN - 3288", "");
    if (person == "3288") {
        pass=1
    } else{
        alert("Wrong PIN");
    }
    if(pass===1){
 createCanvas(800,600);
 sprites();
    }
}
function draw(){
  if(pass===1){
 background(0,255,0);
 if(gamemode===0){
   chance1.visible=true;
   chance2.visible=false;
 }
 if(gamemode===1){
   chance2.visible=true;
   chance1.visible=false;
 }
 
 main();
 win();
 drawSprites();
 textSize(20);
 fill("blue");
 text("4",406.66,266.99);
 text("1",406.66,133.66);
 text("7",406.66,400.33);
 text("5",539.99,266.99);
 text("2",539.99,133.66);
 text("8",539.99,400.33);
 text("6",673.33,266.99);
 text("3",673.33,133.66);
 text("9",673.33,400.33);
}
}
