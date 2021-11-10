//point connecting square in p5js


var Cs = 850;
var r = Cs/2;
var p = 0;
var p2 = 25;
var s = Cs/(p-1)-1;
var n = 0;
var ox = Cs/2;
var oy = Cs/2
var pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679

function setup() {
  createCanvas(Cs, Cs);
}

function draw() {
  //noCursor();
  var o = mouseX;
  colorMode(HSB)
  stroke(360,100,0)
  background(255);
  n+=1/100;
  p3 = sin(1*n)*r;
  p = sin(n)*p2;
  p = p2;
  //p3 = r;
  for(i=-p;i<p;i++){
    for(j=-p;j<p;j++){
      //for(k=-p;k<p;k++){
        x = sin(i*3.1415/p);
        y = cos(i*3.1415/p);
        x2 = sin(j*3.1415/p);//*(i*3.1415/p);
        y2 = cos(j*3.1415/p);//*(i*3.1415/p);
        //x3 = sin(j*3.1415/p)*(i*3.1415/p)*(k*3.1415/p);
        //y3 = cos(j*3.1415/p)*(i*3.1415/p)*(k*3.1415/p);
      
        line(x*mouseX+ox ,y*mouseX+oy ,x2*mouseY+ox ,y2*mouseY+oy)
        //line(x2*mouseY+ox ,y2*mouseY+oy ,x3*mouseX+ox ,y3*mouseX+oy)
        //line(x*mouseX+ox ,y*mouseY+oy ,x3*mouseY+ox ,y3*mouseX+oy)
      //}
    }
  }
  
}