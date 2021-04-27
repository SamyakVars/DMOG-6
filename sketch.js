var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 1



// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg
//Platforms --- Maaot

function setup() {
  
  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  tutorial = new lvl1()

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 
  
  if(levelState == 1){
    tutorial.play()
    tutorial.end()
  }else{
    tutorial = null
  }
  

  drawSprites();
  
}