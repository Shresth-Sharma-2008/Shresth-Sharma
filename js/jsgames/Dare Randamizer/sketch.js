var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18,e19,e20;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20;
var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20;
var gameState=0,number=0;
var ran;
function setup(){
    alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    createCanvas(800,600);
    sprites();
}
function draw(){
    background("orange");
    if(gameState===0){
        textSize(70);
        fill("red");
        text("Enter your name",50,100);
        text("Enter a dare",50,350);
        textSize(30);
        text(number,750,40);
    }
    if(gameState===1){
        fill("red");
        textSize(30);
        text(q1+"  :  "+w10,50,30);
        text(q2+"  :  "+w7,50,60);
        text(q3+"  :  "+w17,50,90);
        text(q4+"  :  "+w6,50,120);
        text(q5+"  :  "+w11,50,150);
        text(q6+"  :  "+w12,50,180);
        text(q7+"  :  "+w20,50,210);
        text(q8+"  :  "+w18,50,240);
        text(q9+"  :  "+w4,50,270);
        text(q10+"  :  "+w15,50,300);
        text(q11+"  :  "+w14,50,330);
        text(q12+"  :  "+w11,50,360);
        text(q13+"  :  "+w16,50,390);
        text(q14+"  :  "+w19,50,420);
        text(q15+"  :  "+w13,50,450);
        text(q16+"  :  "+w2,50,480);
        text(q17+"  :  "+w5,50,510);
        text(q18+"  :  "+w8,50,540);
        text(q19+"  :  "+w9,50,570);
        text(q20+"  :  "+w3,50,600);
    }
    button();
    
}