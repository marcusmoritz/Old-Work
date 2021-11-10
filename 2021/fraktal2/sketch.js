"use strict";

var cs = 800
var ta = [[.2,-0.26],[.23,.22]]
var ka = [[.4*cs],[.045*cs]]
var tb = [[0.85,0.04],[-0.04,0.85]]
var kb = [[.075*cs],[.18*cs]]
var tc = [[0,0],[0,0.16]]
var kc = [[.5*cs],[0]]
var td = [[-0.15,0.28],[0.26,0.24]]
var kd = [[.575*cs],[0.086*cs]]
var i
var t = 0;

var xx = Math.floor(Math.random()*cs);
var yy = Math.floor(Math.random()*cs);

function setup() {
  fill(255)
  createCanvas(cs,cs)
  stroke(255)
  background(0)
}

function draw() {
  t+=0.5;
  for(i=0;i<(10000);i++){
    var r = Math.floor(Math.random()*4)
    switch(r){
      case 0:
        var c = t0(xx,yy);
        xx = c[0][0]
        yy = c[1][0]
        point(xx,yy)
        break;
      case 1:
        var c = t1(xx,yy)
        xx = c[0][0]
        yy = c[1][0]
        point(xx,yy)
        break;
      case 2:
        var c = t2(xx,yy)
        xx = c[0][0]
        yy = c[1][0]
        point(xx,yy)
        break;
      case 3:
        var c = t3(xx,yy)
        xx = c[0][0]
        yy = c[1][0]
        point(xx,yy)
        break;
    }
  }
}

function t0(a,b){
  let sum = addM(multiM(ta,[[a],[b]]),ka);
  return sum;
}

function t1(a,b){
  let sum = addM(multiM(tb,[[a],[b]]),kb);
  return sum;
}

function t2(a,b){
  let sum = addM(multiM(tc,[[a],[b]]),kc);
  return sum;
}

function t3(a,b){
  let sum = addM(multiM(td,[[a],[b]]),kd);
  return sum;
}

function skalM(a,b){
  let sum = [[a[0][0]*b,a[0][1]*b],[a[1][0]*b,a[1][1]*b]];
  return sum;
}

function addM(a,b){
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
      throw new Error('arguments should be in 2-dimensional array format');
   }
  let sum = [[a[0][0]+b[0][0],a[0][1]+b[0][1]],[a[1][0]+b[1][0],a[1][1]+b[1][1]]]
  return sum;
}

//multiplicerar matriser
function multiM(a, b){
   if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
      throw new Error('arguments should be in 2-dimensional array format');
   }
   let x = a.length,
   z = a[0].length,
   y = b[0].length;
   if (b.length !== z) {
      // XxZ & ZxY => XxY
      throw new Error('felfelfel');
   }
   let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
   let product = new Array(x);
   for (let p = 0; p < x; p++) {
      product[p] = productRow.slice();
   }
   for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
         for (let k = 0; k < z; k++) {
            product[i][j] += a[i][k] * b[k][j];
         }
      }
   }
   return product;
}

