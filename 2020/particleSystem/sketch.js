var cs = 800;
var fps = 240;
var bgb = 40;
var bgh = 180;
var bgs = 10;
var particles = [];
var time = 0;
var number = 185;
var mapPosition = {};


function setup() {
  frameRate(fps);
  createCanvas(cs,cs);
  noCursor();
  colorMode(HSB,255);
  angleMode(RADIANS);
  mapPosition = createVector(0,0,0)
  background(0);
  }

function draw() {
  everyFrame();
  interaction()
  removeParticles();
  physicsParticles();
  drawParticles();
  fill(color(0,0,0,1));
  //triangle(0,cs*4/5,0,cs*6/7,cs*2/4,cs*4/5)
  print(particles.length);
}

function everyFrame(){
  background(color(bgh,bgs,bgb));
  //createParticle(cs*2/3,cs/2,cs/100*(Math.random()-0.5),cs/100*(Math.random()-0.5),0,0,4,-15,"diamond",int(random()*256),"glitchPortal",256,0);
  //createParticle(cs*2/3,cs/2,(cs/100)*(Math.random()-0.5),(cs/100)*(Math.random()-0.5),0,(Math.random()-0.5),4,-20,"diamond",int(random()*256),"glitchMagic",256,0);
}

function interaction(){
  if(mouseIsPressed){
    createParticle(mouseX,mouseY,cs/100*(Math.random()-0.5),cs/100*(Math.random()-0.5),0,0,4,-15,"diamond",int(random()*256),"blackWhite",256,0);
    //number += 0.25;
    
  } else  {
    //createParticle(mouseX,mouseY,cs/200*(Math.random()-0.5),cs/200*(Math.random()-0.5),0,20*(int((Math.random()<0.5))-0.5),1,random()*10,"diamond",int(random()*256),"witchMagic",256,0);
    //createParticle(mouseX,mouseY,cs/200*(Math.random()-0.5),cs/200*(Math.random()-0.5),0,20*(Math.random()-0.5),1,random()*10,"diamond",int(random()*256),"glitchMagic",256,0);
    //createParticle(mouseX,mouseY,cs/200*(Math.random()-0.5),cs/200*(Math.random()-0.5),0,20*(Math.random()-0.5),1,random()*10,"diamond",int(random()*256),"glitchMagic",256,0);
    //createParticle(mouseX,mouseY,cs/200*(Math.random()-0.5),cs/200*(Math.random()-0.5),0,20*(Math.random()-0.5),1,random()*10,"diamond",int(random()*256),"glitchMagic",256,0);
    //createParticle(mouseX,mouseY,cs/200*(Math.random()-0.5),cs/200*(Math.random()-0.5),0,20*(Math.random()-0.5),1,random()*10,"diamond",int(random()*256),"glitchMagic",256,0);
    
  }
}

function removeParticles(){
  for(i=0;i<particles.length;i++){
    if(fps<=particles[i].age-particles[i].maxAge){
      particles.splice(i,1);
      i -= 1;
    }
  }
  particles.sort(function(a,b){return a.age - b.age});
}

function physicsParticles(){
  for(i=0;i<particles.length;i++){
    if(particles[i].age>=particles[i].maxAge){
      particles[i].yVel += particles[i].gravity/fps;
      particles[i].xVel /= 1.01;
      particles[i].yVel /= 1.01;
      particles[i].rotS /= 1.02;
      particles[i].size /= 1.04;
      //particles[i].size *= Math.pow(1/256,1/fps);
      
    } else {
    particles[i].yVel += (particles[i].gravity)/cs;
    }
    particles[i].age += 1;
    particles[i].rot += particles[i].rotS;
    //particles[i].color += Math.E*5;
    //particles[i].color = particles[i].color%256;
    particles[i].xPos += particles[i].xVel;
    particles[i].yPos += particles[i].yVel;
  }
}

function drawParticles(){
  noStroke();
  for(i=0;i<particles.length;i++){
    push();
    switch(particles[i].colorType){
      
      case "witchMagic":
        fill(color((particles[i].color)%256,int(200-particles[i].size*60),int(particles[i].size/particles[i].sizeO*150)))//colorful
        break;
      case "glitchMagic":
        fill(color(int(Math.random()*particles[i].glitchRange%256),int(256-particles[i].size*70),int(particles[i].size*70)))//colorful but flashing colors //136
        break;  
      case "glitchFire":
        fill(color(int(Math.random()*particles[i].glitchRange%256),int(256-particles[i].size*128),int(particles[i].size*128)))//colorful but flashing colors
        break;   
      case "glitchPortal":
        fill(color(int(Math.random()*particles[i].glitchRange+particles[i].color%256),int(256-particles[i].size*128),int(particles[i].size*128)))//colorful but flashing colors
        break; 
      case "blackWhite":
        fill(color(0,0,int(256-particles[i].size*70)))//standard b&w
        break;
    }
    translate(particles[i].xPos,particles[i].yPos)
    rotate(-1*PI*particles[i].rot/fps)
    switch(particles[i].shape){
      case "ball":
        ellipse(0,0,particles[i].size*cs/10);
        break;
        
      case "cube":
        //quad(111111111particles[i].xPos+Math.cos(particles[i].rotation)*particles[i].size*cs/5,222222222particles[i].yPos+Math.sin(particles[i].rotation)*particles[i].size*cs/5,333333333particles[i].xPos+Math.cos(particles[i].rotation+90)*particles[i].size*cs/5,4444444particles[i].yPos+Math.sin(particles[i].rotation+90)*particles[i].size*cs/5,5555555particles[i].xPos+Math.cos(particles[i].rotation+180)*particles[i].size*cs/5,6666666particles[i].yPos+Math.sin(particles[i].rotation+180)*particles[i].size*cs/5,777777particles[i].xPos+Math.cos(particles[i].rotation+270)*particles[i].size*cs/5,888888particles[i].yPos+Math.sin(particles[i].rotation+270)*particles[i].size*cs/5)
        quad(cs/10*particles[i].size,0,0,cs/10*particles[i].size,0-cs/10*particles[i].size,0,0,0-cs/10*particles[i].size);
        break;
        
      case "diamond":
        quad(0+cs/20*particles[i].size,0,0,0+cs/10*particles[i].size,0-cs/20*particles[i].size,0,0,0-cs/10*particles[i].size);
        break;
    }
    translate(-particles[i].xPos,-particles[i].yPos)
    pop()
  }
  stroke(0);
  
}

function createObject(x,y,id){
  
}

function createParticle(x,y,xVelocity,yVelocity,rotation,rotationSpeed,size,gravity,shape,color,colorType,glitchRange,maxAge){
  var newParticle = {};
  newParticle.xPos = x;
  newParticle.yPos = y;
  newParticle.xVel = xVelocity;
  newParticle.yVel = yVelocity;
  newParticle.rot = rotation;
  newParticle.rotS = rotationSpeed;
  newParticle.gravity = gravity;
  newParticle.shape = shape;
  newParticle.maxAge = maxAge;
  newParticle.age = 0;
  newParticle.id = generateId();
  newParticle.sizeO = size;
  newParticle.size = size;
  newParticle.color = str(color);
  newParticle.colorType = str(colorType);
  newParticle.glitchRange = glitchRange;
  particles.push(newParticle);
}



function generateId(){
  return int(Math.random()*Math.pow(10,9))
}



/*
class Particle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  double(){
    this.height *= 2
    this.width *= 2
  }
}
/*
rectangel = new Rectangel(20,10)
rectangel.height # 20
rectangel.double()
*/



/*
push()
pop()
rotate()
translate()
*/