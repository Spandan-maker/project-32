class polygon {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("polygon.png");
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 3, this.width, this.height);
        pop();
  }
};
