var number;
var q1,q2,q3,q4;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var s1,s2,s3,s4,s5,s6,s7,s8,s9;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63,w64,w65,w66,w67,w68,w69,w70,w71,w72,w73,w74,w75,w76,w77,w78,w79,w80,w81,w82,w83,w84,w85,w86,w87,w88,w89,w90,w91,w92,w93,w94,w95,w96,w97,w98,w99,w100;
var n1,n2=0;
var play1,play2=0,play3;
var t1,t3;
var t2=[1,2,3,4,5];
function preload(){
    
}
function setup(){
    //let p1 = prompt("R for color", "");
    //t1=p1;
    createCanvas(900,570);
    frameRate(2)
    w1=createSprite(325,75,50,50);
    w2=createSprite(325,125,50,50);
    w3=createSprite(325,175,50,50);
    w4=createSprite(325,225,50,50);
    w5=createSprite(325,275,50,50);
    w6=createSprite(325,325,50,50);
    w7=createSprite(325,375,50,50);
    w8=createSprite(325,425,50,50);
    w9=createSprite(325,475,50,50);
    w10=createSprite(325,525,50,50);
    w11=createSprite(375,75,50,50);
    w12=createSprite(375,125,50,50);
    w13=createSprite(375,175,50,50);
    w14=createSprite(375,225,50,50);
    w15=createSprite(375,275,50,50);
    w16=createSprite(375,325,50,50);
    w17=createSprite(375,375,50,50);
    w18=createSprite(375,425,50,50);
    w19=createSprite(375,475,50,50);
    w20=createSprite(375,525,50,50);
    w21=createSprite(425,75,50,50);
    w22=createSprite(425,125,50,50);
    w23=createSprite(425,175,50,50);
    w24=createSprite(425,225,50,50);
    w25=createSprite(425,275,50,50);
    w26=createSprite(425,325,50,50);
    w27=createSprite(425,375,50,50);
    w28=createSprite(425,425,50,50);
    w29=createSprite(425,475,50,50);
    w30=createSprite(425,525,50,50);
    w31=createSprite(475,75,50,50);
    w32=createSprite(475,125,50,50);
    w33=createSprite(475,175,50,50);
    w34=createSprite(475,225,50,50);
    w35=createSprite(475,275,50,50);
    w36=createSprite(475,325,50,50);
    w37=createSprite(475,375,50,50);
    w38=createSprite(475,425,50,50);
    w39=createSprite(475,475,50,50);
    w40=createSprite(475,525,50,50);
    w41=createSprite(525,75,50,50);
    w42=createSprite(525,125,50,50);
    w43=createSprite(525,175,50,50);
    w44=createSprite(525,225,50,50);
    w45=createSprite(525,275,50,50);
    w46=createSprite(525,325,50,50);
    w47=createSprite(525,375,50,50);
    w48=createSprite(525,425,50,50);
    w49=createSprite(525,475,50,50);
    w50=createSprite(525,525,50,50);
    w51=createSprite(575,75,50,50);
    w52=createSprite(575,125,50,50);
    w53=createSprite(575,175,50,50);
    w54=createSprite(575,225,50,50);
    w55=createSprite(575,275,50,50);
    w56=createSprite(575,325,50,50);
    w57=createSprite(575,375,50,50);
    w58=createSprite(575,425,50,50);
    w59=createSprite(575,475,50,50);
    w60=createSprite(575,525,50,50);
    w61=createSprite(625,75,50,50);
    w62=createSprite(625,125,50,50);
    w63=createSprite(625,175,50,50);
    w64=createSprite(625,225,50,50);
    w65=createSprite(625,275,50,50);
    w66=createSprite(625,325,50,50);
    w67=createSprite(625,375,50,50);
    w68=createSprite(625,425,50,50);
    w69=createSprite(625,475,50,50);
    w70=createSprite(625,525,50,50);
    w71=createSprite(675,75,50,50);
    w72=createSprite(675,125,50,50);
    w73=createSprite(675,175,50,50);
    w74=createSprite(675,225,50,50);
    w75=createSprite(675,275,50,50);
    w76=createSprite(675,325,50,50);
    w77=createSprite(675,375,50,50);
    w78=createSprite(675,425,50,50);
    w79=createSprite(675,475,50,50);
    w80=createSprite(675,525,50,50);
    w81=createSprite(725,75,50,50);
    w82=createSprite(725,125,50,50);
    w83=createSprite(725,175,50,50);
    w84=createSprite(725,225,50,50);
    w85=createSprite(725,275,50,50);
    w86=createSprite(725,325,50,50);
    w87=createSprite(725,375,50,50);
    w88=createSprite(725,425,50,50);
    w89=createSprite(725,475,50,50);
    w90=createSprite(725,525,50,50);
    w91=createSprite(775,75,50,50);
    w92=createSprite(775,125,50,50);
    w93=createSprite(775,175,50,50);
    w94=createSprite(775,225,50,50);
    w95=createSprite(775,275,50,50);
    w96=createSprite(775,325,50,50);
    w97=createSprite(775,375,50,50);
    w98=createSprite(775,425,50,50);
    w99=createSprite(775,475,50,50);
    w100=createSprite(775,525,50,50);  
    w1.shapeColor=("yellow");
    w2.shapeColor=("yellow");
    w3.shapeColor=("yellow");
    w4.shapeColor=("yellow");
    w5.shapeColor=("yellow");
    w6.shapeColor=("yellow");
    w7.shapeColor=("yellow");
    w8.shapeColor=("yellow");
    w9.shapeColor=("yellow");
    w10.shapeColor=("yellow");
    w11.shapeColor=("yellow");
    w12.shapeColor=("yellow");
    w13.shapeColor=("yellow");
    w14.shapeColor=("yellow");
    w15.shapeColor=("yellow");
    w16.shapeColor=("yellow");
    w17.shapeColor=("yellow");
    w18.shapeColor=("yellow");
    w19.shapeColor=("yellow");
    w20.shapeColor=("yellow");
    w21.shapeColor=("yellow");
    w22.shapeColor=("yellow");
    w23.shapeColor=("yellow");
    w24.shapeColor=("yellow");
    w25.shapeColor=("yellow");
    w26.shapeColor=("yellow");
    w27.shapeColor=("yellow");
    w28.shapeColor=("yellow");
    w29.shapeColor=("yellow");
    w30.shapeColor=("yellow");
    w31.shapeColor=("yellow");
    w32.shapeColor=("yellow");
    w33.shapeColor=("yellow");
    w34.shapeColor=("yellow");
    w35.shapeColor=("yellow");
    w36.shapeColor=("yellow");
    w37.shapeColor=("yellow");
    w38.shapeColor=("yellow");
    w39.shapeColor=("yellow");
    w40.shapeColor=("yellow");
    w41.shapeColor=("yellow");
    w42.shapeColor=("yellow");
    w43.shapeColor=("yellow");
    w44.shapeColor=("yellow");
    w45.shapeColor=("yellow");
    w46.shapeColor=("yellow");
    w47.shapeColor=("yellow");
    w48.shapeColor=("yellow");
    w49.shapeColor=("yellow");
    w50.shapeColor=("yellow");
    w51.shapeColor=("yellow");
    w52.shapeColor=("yellow");
    w53.shapeColor=("yellow");
    w54.shapeColor=("yellow");
    w55.shapeColor=("yellow");
    w56.shapeColor=("yellow");
    w57.shapeColor=("yellow");
    w58.shapeColor=("yellow");
    w59.shapeColor=("yellow");
    w60.shapeColor=("yellow");
    w61.shapeColor=("yellow");
    w62.shapeColor=("yellow");
    w63.shapeColor=("yellow");
    w64.shapeColor=("yellow");
    w65.shapeColor=("yellow");
    w66.shapeColor=("yellow");
    w67.shapeColor=("yellow");
    w68.shapeColor=("yellow");
    w69.shapeColor=("yellow");
    w70.shapeColor=("yellow");
    w71.shapeColor=("yellow");
    w72.shapeColor=("yellow");
    w73.shapeColor=("yellow");
    w74.shapeColor=("yellow");
    w75.shapeColor=("yellow");
    w76.shapeColor=("yellow");
    w77.shapeColor=("yellow");
    w78.shapeColor=("yellow");
    w79.shapeColor=("yellow");
    w80.shapeColor=("yellow");
    w81.shapeColor=("yellow");
    w82.shapeColor=("yellow");
    w83.shapeColor=("yellow");
    w84.shapeColor=("yellow");
    w85.shapeColor=("yellow");
    w86.shapeColor=("yellow");
    w87.shapeColor=("yellow");
    w88.shapeColor=("yellow");
    w89.shapeColor=("yellow");
    w90.shapeColor=("yellow");
    w91.shapeColor=("yellow");
    w92.shapeColor=("yellow");
    w93.shapeColor=("yellow");
    w94.shapeColor=("yellow");
    w95.shapeColor=("yellow");
    w96.shapeColor=("yellow");
    w97.shapeColor=("yellow");
    w98.shapeColor=("yellow");
    w99.shapeColor=("yellow");
    w100.shapeColor=("yellow");
    q1=createSprite(299,300,8,510);
    q2=createSprite(801,300,8,510);
    q3=createSprite(550,055,510,8);
    q4=createSprite(550,555,510,8);
    q1.shapeColor=("red");
    q2.shapeColor=("red");
    q3.shapeColor=("red");
    q4.shapeColor=("red");
    a1=createSprite(350,300,03,510);
    a2=createSprite(400,300,03,510);
    a3=createSprite(450,300,03,510);
    a4=createSprite(500,300,03,510);
    a5=createSprite(550,300,03,510);
    a6=createSprite(600,300,03,510);
    a7=createSprite(650,300,03,510);
    a8=createSprite(700,300,03,510);
    a9=createSprite(750,300,03,510);
    s1=createSprite(550,100,510,03);
    s2=createSprite(550,150,510,03);
    s3=createSprite(550,200,510,03);
    s4=createSprite(550,250,510,03);
    s5=createSprite(550,300,510,03);
    s6=createSprite(550,350,510,03);
    s7=createSprite(550,400,510,03);
    s8=createSprite(550,450,510,03);
    s9=createSprite(550,500,510,03);
    a1.shapeColor=("red");
    a2.shapeColor=("red");
    a3.shapeColor=("red");
    a4.shapeColor=("red");
    a5.shapeColor=("red");
    a6.shapeColor=("red");
    a7.shapeColor=("red");
    a8.shapeColor=("red");
    a9.shapeColor=("red");
    s1.shapeColor=("red");
    s2.shapeColor=("red");
    s3.shapeColor=("red");
    s4.shapeColor=("red");
    s5.shapeColor=("red");
    s6.shapeColor=("red");
    s7.shapeColor=("red");
    s8.shapeColor=("red");
    s9.shapeColor=("red");
    play1=createButton('Next');
    play1.position(100,400);
    play1.size(100,50);
    t2=[];
}
function draw(){
    background(86,225,241);
    
    drawSprites();
    textSize(35);
    fill("black");
    text("1",325-12,75+12)
    text("2",325-12,123+12)
    text("3",325-12,173+12)
    text("4",325-12,223+12)
    text("5",325-12,273+12)
    text("6",325-12,323+12)
    text("7",325-12,373+12)
    text("8",325-12,423+12)
    text("9",325-12,473+12)
    text("10",325-18,523+12)
    text("11",375-18,75+12);
    text("12",375-18,123+12)
    text("13",375-18,173+12)
    text("14",375-18,223+12)
    text("15",375-18,273+12)
    text("16",375-18,323+12)
    text("17",375-18,373+12)
    text("18",375-18,423+12)
    text("19",375-18,473+12)
    text("20",375-18,523+12)
    text("21",425-18,75+12);
    text("22",425-18,123+12)
    text("23",425-18,173+12)
    text("24",425-18,223+12)
    text("25",425-18,273+12)
    text("26",425-18,323+12)
    text("27",425-18,373+12)
    text("28",425-18,423+12)
    text("29",425-18,473+12)
    text("30",425-18,523+12)
    text("31",475-18,75+12);
    text("32",475-18,123+12)
    text("33",475-18,173+12)
    text("34",475-18,223+12)
    text("35",475-18,273+12)
    text("36",475-18,323+12)
    text("37",475-18,373+12)
    text("38",475-18,423+12)
    text("39",475-18,473+12)
    text("40",475-18,523+12)
    text("41",525-18,75+12);
    text("42",525-18,123+12)
    text("43",525-18,173+12)
    text("44",525-18,223+12)
    text("45",525-18,273+12)
    text("46",525-18,323+12)
    text("47",525-18,373+12)
    text("48",525-18,423+12)
    text("49",525-18,473+12)
    text("50",525-18,523+12)
    text("51",575-18,75+12);
    text("52",575-18,123+12)
    text("53",575-18,173+12)
    text("54",575-18,223+12)
    text("55",575-18,273+12)
    text("56",575-18,323+12)
    text("57",575-18,373+12)
    text("58",575-18,423+12)
    text("59",575-18,473+12)
    text("60",575-18,523+12)
    text("61",625-18,75+12);
    text("62",625-18,123+12)    
    text("63",625-18,173+12)
    text("64",625-18,223+12)
    text("65",625-18,273+12)
    text("66",625-18,323+12)
    text("67",625-18,373+12)
    text("68",625-18,423+12)
    text("69",625-18,473+12)
    text("70",625-18,523+12)
    text("71",675-18,75+12);
    text("72",675-18,123+12)
    text("73",675-18,173+12)
    text("74",675-18,223+12)
    text("75",675-18,273+12)
    text("76",675-18,323+12)
    text("77",675-18,373+12)
    text("78",675-18,423+12)
    text("79",675-18,473+12)
    text("80",675-18,523+12)
    text("81",725-18,75+12);
    text("82",725-18,123+12)
    text("83",725-18,173+12)
    text("84",725-18,223+12)
    text("85",725-18,273+12)
    text("86",725-18,323+12)
    text("87",725-18,373+12)
    text("88",725-18,423+12)
    text("89",725-18,473+12)
    text("90",725-18,523+12)
    text("91",775-18,75+12);
    text("92",775-18,123+12)
    text("93",775-18,173+12)
    text("94",775-18,223+12)
    text("95",775-18,273+12)
    text("96",775-18,323+12)
    text("97",775-18,373+12)
    text("98",775-18,423+12)
    text("99",775-18,473+12)
    textSize(30);
    text("100",775-23,523+12)
    textSize(50);
    
    fill("red");
    textSize(100);
    text(n1,100,300);
    play1.mousePressed(()=>{
        temp1();
    });
    
    glow();

































    
}
function temp(){
    t1=Math.round(random(1,100));
}
function temp1(){
    temp();
        if(t2.includes(t1)){
            temp1();
            
        }
        else{
            t2.push(t1);
            n1=t1
    }
}