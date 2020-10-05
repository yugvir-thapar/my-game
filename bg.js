class Bg{
    constructor(){
       this.body= Bodies.rectangle(1200,800,1200,800);
       this.image=loadImage("images/bg.png");
       World.add(world, this.body);
    }
    display(){
       push();
       imageMode(CENTER);
       pop();
    }
}