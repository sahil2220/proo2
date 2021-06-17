class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("block.png")
      this.Visibility=255;

    }
    display(){
      if(this.body.speed< 6.5){
        console.log();
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       } 
       else{
        World.remove(world, this.body);}
        push();
     this.Visibility = this.Visibility -4;
     tint(255,this.Visibility);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    
    
    }
}