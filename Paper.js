 class Paper{
    constructor(x, y) {
        var options = {
            IsStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(56, 45, 55 , 55 , options);
        this.width = 55;
        this.height = 55;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0,0, this.width, this.height);
        pop();
      }
    };

 