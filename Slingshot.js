class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        //loading the images for the slingshot
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        
    }
    //when the function key realeased is called the constraint should be detatched from the bird
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //assinging the image only for the slingshot
        image(this.image1,200,20);
        image(this.image2,175,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke("#301608")
            //if the bird is on the left side of the slingshot then the image of the rubber band and the supporter should be changed
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-5);
                //if the bird is on the right side of the slingshot then the image of the rubber band and the supporter should be changed
            }else{
                strokeWeight(3);
                line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
                image(this.image3,pointA.x+25,pointA.y-10,15,30);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-5);
            }
            pop()
        }
    }
    
}