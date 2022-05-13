var s1,s2,s3
function setup(){
    let a1 = prompt("R for color", "");
    let a2 = prompt("G for color", "");
    let a3 = prompt("B for color", "");
    createCanvas(4000,4000);
    s1=a1
    s2=a2
    s3=a3
}
function draw(){
    background(s1,s2,s3);
}