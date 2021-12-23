var x=0
var y=0
var z=0
var v=0
var b=0
var n=0
let r;
let num = 5
var datos =[98.7,78.5,38.6,80.2,40.6,25.5];
var datos1 =[1,2,3];
var margin =2;
var h = 400 - 6 * margin;
var barWidth =  (h / datos.length) * 0.8;
var button;
var button1;
var valores;
 var datosl;
function setup() {
  createCanvas(500,460);
  textFont("monaco");

  drawText();

  //loadFont('Computerfont.ttf', drawText);
  noStroke();
  strokeWeight(10);
  linea();
  text('MY COMPUTER HABILITIES',150, 30);
  col = color("yellow");
  button = createButton('VALORES EXACTOS');
  button.style('font-size', '15px');
  button.style("font-family", "monaco");
  button.style('background-color', col);
  button.position(850, 640);
  button.mousePressed(valores);
  //
  
  button1 = createButton('D A T O S');
  button1.style('font-size', '15px');
  button1.style("font-family", "monaco");
  button1.style('background-color', col);
  button1.position(600, 640);
  button1.mousePressed(letras);
}

function draw() {
  
  noStroke();
  fill(random(255),random(255),random(255));
  rect(0,50,x,40);
  x+=3.5;
  if(x>=300)
  noLoop()   
  fill(random(255),random(255),random(255));
  rect(0,110,y,40);
  y+=2.9;
  if(y>=378.5)
  noLoop()
  //EXCEL
  fill(random(255),random(255),random(255));
  rect(0,170,z,40);
  z+=2.7;
  if(z>=380.2) noLoop()
  //HTML
  fill(random(255),random(255),random(255));
  rect(0,230,v,40);
  v+=2.0;
  if(v>=240.1) noLoop()
  //PYTHON
  fill(random(255),random(255),random(255));
  rect(0,290,b,40);
  b+=2.2;
  if(b>=190.5) noLoop()
  //JS
  fill(random(255),random(255),random(255));
  rect(0,350,n,40);
  n+=0.9;
  if(n>=107) noLoop()

}
function linea()
{
fill("black");
  r = 0;
  for (let i = 0; i < num; i++) {
    rect(r, 50, 4, height-120);
    r += 100; }
}

function drawText(font) {
  fill('BLACK');
  //textFont(font,20);

  text("2021",width/2,height-5);
  fill("BLUE");
  text("25 %",90,415);
  text("50%",192,415);
  text("75%",292,415);
  text("100%",392,415);
 
}

function valores(){
fill("black");
for(var g = 0; g < datos.length; g++) {
  push()
  translate(10, g * (barWidth + 8));
  text(datos[g],410, barWidth+25);
  text("%",450, barWidth+25);
  pop();
  }
}

function letras()
{
fill("black");
textSize(18);
text("MYSQL",10,75);
text("POSTGRESQL",10,135);
text("EXCEL",10,195);
text("HTML 5 & CSS 3",10,255);
text("PYTHON",10,315);
text("JAVA SCRIPT",10,375);

}