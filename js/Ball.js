class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        if (pos.x < 300 && pos.y >700){
            score = score + 500;
            ball= null;
        }
        if (pos.x > 301 && pos.x <600 && pos.y >700){
            score = score + 100;
            ball= null;
        }
        if (pos.x > 601 && pos.x <900 && pos.y >700){
            score = score + 200;
            ball= null;
        }
        
        
        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};