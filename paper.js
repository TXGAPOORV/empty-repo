class paper{
	constructor(x,y,r)
	{
      var options={
    isStatic=false,
	'restitution':0.3,
	'friction':0,
	'density':1.2
	  }
		this.image=loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			fill("blue");
			ellipseMode(CENTER);
			ellipse(0,0,this.r,this.r);
			pop();
	}

}