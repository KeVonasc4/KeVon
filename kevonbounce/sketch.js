function setup(){
    createCanvas(500,500);
    background(170);
    xspd=random(2,-3)
    yspd=random(2,-3)
}
var x =90;
var y=90;
var xspd=1;
var yspd=1;

function draw(){
    background(170);
    fill(random(255),random(255),random(255));
    ellipse(x,y,30);
    
    if(x>=500){
      xspd= -1;
    } else if(x<=0){
        xspd= 1;
    }


    if(y>=500){
      yspd = -1;
    } else if(y<=0){
        yspd = 1;
    }

    x += xspd;
    y += yspd;

}
