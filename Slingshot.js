class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5            
        }
    
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){
        image(this.chain,200,20);
        
     
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}