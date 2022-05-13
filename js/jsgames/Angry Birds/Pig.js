class Pig extends BaseClass {
  constructor(x, y,q,w){
    super(x,y,q,w);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     if(Pigs===1){
       Pigs=0
     }
     if(Pigs===2){
       Pigs=1
     }
     if(Pigs===3){
       Pigs=2
     }
     if(Pigs===4){
       Pigs=3
     }
     if(Pigs===5){
       Pigs=4
     }
     if(Pigs===6){
       Pigs=5
     }
     if(Pigs===7){
       Pigs=6
     }
     if(Pigs===8){
       Pigs=7
     }
     if(Pigs===9){
       Pigs=8
     }
     if(Pigs===10){
       Pigs=9
     }
     push();
     this.Visiblity = this.Visiblity - 2;
     tint(200,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};

