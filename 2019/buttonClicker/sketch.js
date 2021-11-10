var cs = 800;
var extend = 1;
var time = 0;
var extendGoal = 1;
var extend = 1;
var extendSpeed = 0;
var buttonColor = 0;
var onButton = false;
var buttScore = 0;
var sps = 0;
var objects = [];
var selectedButton = 0;
var CP = 1;
var framesPerSecond = 60;
var CPI1 = 1;
var CPI2 = 1;
var CPI3 = 1;
var tooltip = 0;
var tooltipTime = 0;


//defining the cost of buttons.
var CPc = 15;
var CPI1c = 150;
var CPI2c = 15000;
var CPI3c = 1500000;


function setup() {
  frameRate(framesPerSecond);
  createCanvas(cs,cs)
  colorMode(HSB);
  makeButton(cs/2,cs/2,cs/6,1);
  makeButton(2*cs/8,cs/8,cs/16,2);
  makeButton(4*cs/8,cs/8,cs/16,3);
  makeButton(6*cs/8,cs/8,cs/16,4);
  makeButton(cs/8,2*cs/8,cs/16,5);
  //makeButton(7*cs/8,2*cs/8,cs/16,5);
}

function draw() {
  //setup and cleanup
  background(25);
  //changing variables once per frame
  perFrame();
  //detects how the player passivly interacts with the envoirnment
  detection();
  //actual drawing
  actualDrawing();
}

function makeButton(x,y,r,id) {
  var newButton = {};
  newButton.xPos = x;
  newButton.yPos = y;
  newButton.radius = r;
  newButton.id = id;
  newButton.extend = r;
  newButton.extendGoal = r;
  newButton.onButton = false;
  objects.push(newButton);
}

function detection(){
  for (i = 0; i < objects.length; i++) {
    objects[i].extendGoal = 1;
    if (objects[i].extend*objects[i].radius>=Math.sqrt(Math.pow(objects[i].xPos-mouseX,2)+Math.pow(objects[i].yPos-mouseY,2))){
      objects[i].extendGoal += .2;
      objects[i].onButton = true;
      tooltip = objects[i].id;
      tooltipTime += 1;
      if (mouseIsPressed) {
        objects[i].extendGoal += .2;
      }
    } else {
      objects[i].onButton = false;
    }
    
    
    //objects[i].extend = (objects[i].extend + objects[i].extendGoal)/2
    objects[i].extend = (objects[i].extend + objects[i].extendGoal)/2
  }
}

function perFrame() {
  time += 1;
  buttScore += sps/framesPerSecond;
  tooltip = 0;
}



function actualDrawing() {
  //main button
  //ellipse(cs/2,cs/2,extend*cs/3,extend*cs/3);
  
  //drawing objects
  for (i = 0; i < objects.length; i++) {
    switch(objects[i].id){
      case 1:
        fill(0,0,100)
        ellipse(objects[i].xPos,objects[i].yPos,objects[i].radius*objects[i].extend*2,objects[i].radius*objects[i].extend*2)
        fill(0,0,0)
        text(str(int(buttScore)), objects[i].xPos, objects[i].yPos, cs/5, cs/5);
        break;
        
      case 2:
        if(buttScore<CPc){
          fill(0,0,70);
        } else{
          fill(0,0,100)
        }
        ellipse(objects[i].xPos,objects[i].yPos,objects[i].radius*objects[i].extend*2,objects[i].radius*objects[i].extend*2)
        if(buttScore<=CPc){
          fill(0,0,30);
        } else{
          fill(0,0,0)
        }
        text(str(int(CP-1)), objects[i].xPos, objects[i].yPos, cs/5, cs/5);
        break;
        
      case 3:
        if(buttScore<CPI1c){
          fill(0,0,70);
        } else{
          fill(0,0,100)
        }
        ellipse(objects[i].xPos,objects[i].yPos,objects[i].radius*objects[i].extend*2,objects[i].radius*objects[i].extend*2)
        if(buttScore<=CPc){
          fill(0,0,30);
        } else{
          fill(0,0,0)
        }
        text(str(int(CPI1-1)), objects[i].xPos, objects[i].yPos, cs/5, cs/5);
        break;
        
      case 4:
        if(buttScore<CPI2c){
          fill(0,0,70);
        } else{
          fill(0,0,100)
        }
        ellipse(objects[i].xPos,objects[i].yPos,objects[i].radius*objects[i].extend*2,objects[i].radius*objects[i].extend*2)
        if(buttScore<=CPI2c){
          fill(0,0,30);
        } else{
          fill(0,0,0)
        }
        text(str(int(CPI2-1)), objects[i].xPos, objects[i].yPos, cs/5, cs/5);
        break;
        
      case 5:
        if(buttScore<CPI3c){
          fill(0,0,70);
        } else{
          fill(0,0,100)
        }
        ellipse(objects[i].xPos,objects[i].yPos,objects[i].radius*objects[i].extend*2,objects[i].radius*objects[i].extend*2)
        if(buttScore<=CPI3c){
          fill(0,0,30);
        } else{
          fill(0,0,0)
        }
        text(str(int(CPI3-1)), objects[i].xPos, objects[i].yPos, cs/5, cs/5);
        break;
    }
  }
  //drawing tooltips
  
  switch(tooltip){
    case 1:
      //no tooltips for the main button.
      break;
      
    case 2:
      fill(0,0,100);
      rect(cs/8,6*cs/8,6*cs/8,2*cs/8);
      fill(0,0,0)
      text("Button of Clickpower\nCosts: " + str(int(CPc)) + " points.\nThis Uppgrade increases the Power of your Click by " + CPI1 + ".\nYour current Clickpower is " + str(int(CP)) + ".",1.5*cs/8,6.5*cs/8,6*cs/8,2*cs/8)
      break;
      
    case 3:
      fill(0,0,100);
      rect(cs/8,6*cs/8,6*cs/8,2*cs/8);
      fill(0,0,0)
      text("Button of Clickpowerpower\nCosts: " + str(int(CPI1c)) + " points.\nThis Uppgrade increases the Power of your Button of Clickpower by " + CPI2 + ".\nYour current Clickpowerpower is " + str(int(CPI1)) + ".",1.5*cs/8,6.5*cs/8,6*cs/8,2*cs/8)

      break;
      
    case 4:
      fill(0,0,100);
      rect(cs/8,6*cs/8,6*cs/8,2*cs/8);
      fill(0,0,0)
      text("Button of Clickpower^3\nCosts: " + str(int(CPI2c)) + " Points.\nThis Uppgrade increases the Power of your Button of Clickpowerpower by " + CPI3 + ".\nYour current Clickpower^3 is " + str(int(CPI2)) + ".",1.5*cs/8,6.5*cs/8,6*cs/8,2*cs/8)
      break;
      
    case 5:
      fill(0,0,100);
      rect(cs/8,6*cs/8,6*cs/8,2*cs/8);
      fill(0,0,0)
      text("Button of Clickpower^4\nCosts: " + str(int(CPI3c)) + " points.\nThis Uppgrade increases the Power of your Button of Clickpower^3 by " + 1 + ".\nYour current Clickpower^4 is " + str(int(CPI3)) + ".",1.5*cs/8,6.5*cs/8,6*cs/8,2*cs/8)
      break;
  }
  
}

function mouseReleased() {
  for (i = 0; i < objects.length; i++) {
    if (objects[i].onButton && (objects[i].extend*objects[i].radius>=Math.sqrt(Math.pow(objects[i].xPos-mouseX,2)+Math.pow(objects[i].yPos-mouseY,2)))) {
      switch(objects[i].id){
        case 1:
          buttScore += CP;
          break;
        
        case 2:
          if (buttScore>=CPc){
            CP += CPI1;
            buttScore -= CPc;
            CPc *= 1.15;
            
          }
          break;
          
        case 3:
          if (buttScore>=CPI1c){
            CPI1 += CPI2;
            buttScore -= CPI1c;
            CPI1c *= 1.15;
          }
          break;
          
        case 4:
          if (buttScore>=CPI2c){
            CPI2 += CPI3;
            buttScore -= CPI2c;
            CPI2c *= 1.15;
            
          }
          break;
          
        case 5:
          if (buttScore>=CPI3c){
            CPI3 += 1;
            buttScore -= CPI3c;
            CPI3c *= 1.15;
            
          }
          break;
      }
    }
  }
}