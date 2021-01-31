class Chain{
    constructor (myA, myB){
        var options={
            bodyA:myA,
            bodyB:myB,
            length:10,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
        var posA=this.chain.bodyA.position
        var posB=this.chain.bodyB.position
        line(posA.x, posA.y, posB.x, posB.y)
    }
    
}