class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:35
        }
        this.sling1 = loadImage('bulldozer.png');
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        image(this.sling1,50,140,200,200);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}