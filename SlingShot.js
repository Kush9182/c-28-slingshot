class slingShot{
    constructor(a,b){
      var options ={
          bodyA:  a,
          pointB:  b,
          length:  10,
          stiffness:  0.2,
      }
      this.body=Constraint.create(options);
      this.s=b; 
      World.add(world,this.body);  
    }
    fly(){
      this.body.bodyA=null;
    }

    display(){
       if(this.body.bodyA){
       push();
       var posa=this.body.bodyA.position;
       var posb=this.s; 
       strokeWeight(6);
       line(posa.x,posa.y,posb.x,posb.y);
       pop()
      }
       
      }
}