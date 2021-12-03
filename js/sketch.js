var x=0;
var y=0;
var ix=3;
var iy=2;
var xx=1;
var yy=1;
var ixx=2;
var iyy=3;
var buenas=0,malas=0;
function setup() {
  createCanvas(400, 400);
  x=random(200,200);
  y=random(200,200);
  xx=random(200,200);
  yy=random(200,200);
  noStroke();
  
  
}

function draw() {
  background(220);
  
  fill(0,0,255);
  ellipse(x,y, 50,50);
  x+=ix;
  y+=iy;
  
  fill(0,255,255);
  ellipse(xx,yy, 50,50);
  xx+=ixx;
  yy+=iyy;
  fill(0);
  rect(0, mouseY, 10,100);
  
   
  
 
  //Detectar colision.
  if((y<=mouseY +100) && (y >= mouseY) && (x<=35))
  {
  console.log("xD");
    buenas+=1;
    ix=-ix;
    
  }
  
  
   if((yy<=mouseY +100) && (yy >= mouseY) && (xx<=35))
  {
  console.log("LOL");
    buenas+=1;
    ixx=-ixx;
    
  }

if(xx>=width-25 || xx<=25) 
  
  {
  if(xx<=25)
    
   malas+=1;
   ixx=-ixx;
  console.log("LL");
  }
  if(yy>=height-25 || yy<=25)
  {
   iyy=-iyy;
  }
  
  
  textFont("Bodoni");
  textSize(20);
  text("Buenas: "+buenas,20,20 );
  text("Malas:  "+malas,20,50 );
  
if(x>=width-25 || x<=25) 
  
  {
  if(x<=25)
    
   malas+=1;
   ix=-ix;
    console.log("DD");
  }
  if(y>=height-25 || y<=25)
  {
   iy=-iy;
  }
  
}