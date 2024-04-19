//preparar e rodar um código
function setup() {
  createCanvas(400, 400);//criar tela
  background("pink");
}

//responsável por desenhar 
function draw() {
  stroke("rgb(251,255,0)");
  fill("red"); 

  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}  
