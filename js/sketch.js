let angles = [207.7,57.24,27.7,11.52,7.92,25.56,22.68];
var x=230;
var y=300;
function setup() {
  createCanvas(500, 400);
  textFont("monaco");
  //loadFont('/js/Digital.ttf', drawText);
 colorMode(RGB,200,100,100);
  col = color("yellow");
  button = createButton('VALORES EXACTOS');
  button.style('font-size', '15px');
  button.style("font-family", "monaco");
  button.style('background-color', col);
  button.position(360, 470);
  button.mousePressed(valores);
  linea();
  texto();
  cuadricula();
}
function cuadricula(){
 var i, j;
  for(i=0;i<=width;i+=50)
    for(j=0;j<=height;j+=50){
      line(i,0,i,height)
      line(0,j,width,j)
    }
}

function draw() {
  noStroke();
  let lastAngle = 0;
  frameRate(0.7);
  for (let i = 0; i < angles.length; i++) 
  {     
    fill(random(200),random(100),random(250));
    
    arc(
      width / 2,
      height / 2,
      200,
      200,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);

  }

 
}

function texto(font) {
  fill('BLACK');
  //textFont(font,21);
  text('PROGRAMMING LANGUAGES',30, 40);
  text("2021",230,380);
  textSize(15);
  text("MYSQL",170,350);
  text("POSTGRESQL",30,127);
  
  text("EXCEL",180,70);
  text("HTML5 & CS3",360,290);
  text("PYTHON ",380,155);
 
  text("C",350,127);
  text("JAVA SCRIPT",320,75);
 
}
function linea()
{
  strokeWeight(2);
  line(230,300,230,340);
  line(230,340,220,340);
  //
  line(200,120,120,120);
  //
  line(250,65,250,100);
  line(250,65,230,65);
  //
  line(360,190,340,190);
  line(360,190,360,270);
  //
  line(340,150,370,150);
  //
  line(310,122,340,122);
  //
  line(295,122,295,70);
  line(295,70,310,70);
}

function valores(){
fill("black");
text("57.7%",240,340);
text("15.9%",80,165);  
text("7.1%",395,200);   
text("6.3%",360,310); 
text("7.7%",70,90); 
text("3.2%",380,80); 
text("2.2%",450,135); 
}