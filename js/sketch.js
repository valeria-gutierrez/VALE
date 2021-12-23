var x=0
var y=0
var z=0
var v=0
var b=0
var n=0
let r;
let c;
let num = 5
var datos =[98.7,78.5,38.6,80.2,40.6,25.5,50,50.3];
var datos1 =[1,2,3];
var margin =2;
var h = 400 - 6 * margin;
var barWidth =  (h / datos.length) * 0.8;
var button;
var button1;
var valores;
 var datosl;
function setup() {
  createCanvas(400,650);
  //background('pink');
  textFont("monaco");
  noStroke();
  strokeWeight(10);
  //linea();
  drawText();
  col = color("yellow");
  button = createButton('VALORES EXACTOS');
  button.style('font-size', '15px');
  button.style("font-family", "monaco");
  button.style('background-color', col);
  button.position(140, 790);
  button.mousePressed(valores);
  cuadro();
  button1 = createButton('DATOS');
  button1.style('font-size', '15px');
  button1.style("font-family", "monaco");
  button1.style('background-color', col);
  button1.position(180, 760);
  button1.mousePressed(letras);

}

function draw() {
  
  noStroke();
  //MYSQL
  fill('#8793ff');
  rect(0,60,x,40,10);
  x+=18;
  if(x>=350)
  noLoop()   
  //POSTGRESQL
  fill('#8793ff');
  rect(0,120,y,40,10);
  y+=15;
  if(y>=378.5)
  noLoop()
  //ACCESS
  fill('#8793ff');
  rect(0,180,z,40,10);
  z+=6;
  if(z>=350) noLoop()
  //HTML
  fill('#94ff8f');
  rect(0,240,v,40,10);
  v+=9.0;
  if(v>=340) noLoop()
  //PYTHON
  fill('#ffff8a');
  rect(0,300,b,40,10);
  b+=9.5;
  if(b>=290) noLoop()
  //JS
  fill('#ffff8a');
  rect(0,360,n,40,10);
  n+=0.5;
  if(n>=107) noLoop()
  //MICROSOFT WORD
  fill('#7377ff');
  rect(0,420,n,40,10);
  n+=0;
  if(n>=350) noLoop()
  //MICROSOFT EXCEL
  fill('#4bc94b');
  rect(0,480,n,40,10);
  n+=3.9;
  if(n>=250) noLoop()
  //MICROSOFT POWER POINT
  fill('#c75e4e');
  rect(0,540,n,40,10);
  n+=0.9;
  if(n>=250) noLoop()
}
function cuadro(){
  fill('#bfc6d1');
  c=60;
  for(let k=1;k<=9;k++){
    rect(0,c,400,40,10);
    c+=60;
  }
}
function linea()
{
fill('#bfc6d1');
  r = 0;
  for (let i = 0; i < num; i++) {
    rect(r, 50, 4, height-120);
    r += 100; }
}

function drawText() {
  fill('BLACK');

  text('MY COMPUTER HABILITIES ',100, 30);
  fill("BLUE");
  text("25%",90,595);
  text("50%",192,595);
  text("75%",292,595);
  text("100%",392,595);
 
  text('DATA BASES SOFTWARE',0,50);
  text('WEB DESIGN',0,235);
  text('PROGRAMMING LANGUAGES',0,295);
  text('MICROSOFT OFFICE',0,535);
}

function valores(){
fill("black");
for(var g = 0; g < datos.length; g++) {
  push()
  translate(10, g * (barWidth + 10));
  text(datos[g],410, barWidth+25);
  text("%",450, barWidth+25);
  pop();
  }
}

function letras(){
  fill('black');
  textSize(15);
  text("MYSQL",10,85);
  text("POSTGRESQL",10,145);
  text("ACCES",10,205);
  text("HTML 5 & CSS 3",10,265);
  text("PYTHON",10,325);
  text("JAVA SCRIPT",10,385);
  text("MICROSOFT WORD",10,445);
  text("MICROSOFT EXCEL",10,505);
  text("MICROSOFT POWER POINT",10,565);
}