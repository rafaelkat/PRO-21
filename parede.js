class parede {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var propriedades = {
            isStatic: true
            
        }
        this.body = Bodies.rectangle(x,y,w,h,propriedades);
        World.add (world,this.body);
    }
    Show(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
      
    }
}