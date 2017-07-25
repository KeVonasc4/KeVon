function setup(){
    createCanvas(500,500);
    background(127);
} 

function mouseDragged(){
    fill(random(225),random(225),random(225));
    var radius = random(1,10);
    ellipse(mouseX,mouseY,radius);
    rect(mouseX,mouseY,radius,radius);

    var button = createButton("reset");
    button.mousePressed(resetSketch());
}


function resetSketch(){
    createCanvas(500,500);
    background(127);
}
