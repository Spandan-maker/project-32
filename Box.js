class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.Visiblity = 255;
    this.image = loadImage("crate.png");
  }

  score(){
    if(this.Visiblity < 0 && this.Visiblity > -10){
      score++

    }
  }


  display(){

    if(this.body.speed < 6){
 
     super.display();
    }
 
    else{
      World.remove(world, this.body);
 
       push();
       this.Visiblity = this.Visiblity - 5;
 
       tint(244,122,157, this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
 
       pop();
    }
    
  }
}