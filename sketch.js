var Img_logo, myFont1, myFont2;

var txtArray = [];
var txtIdx;

function preload() {
  Img_logo = loadImage("images/logo.png");
  myFont1 = loadFont("font/underwood_champion.ttf");
  myFont2 = loadFont("font/Pompiere-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (windowWidth < windowHeight) {
    Img_logo.resize(windowWidth/3, 0);
  }
  else {
    Img_logo.resize(0, windowHeight/3);
  }

  txtArray.push("Trace the Whispers of What Machines Can't Imagine");
  txtArray.push("The Puzzle Isn't the Game - It's What the AI Left Out");
  txtArray.push("Prune the Decision Tree: Your Creativity Defies the Branches");
  txtArray.push("Infinite Paths, Limited Code - Which Will You Create?");
  txtArray.push("AI Prunes Possibilities - Dare to Grow Beyond the Algorithm?");
  txtArray.push("Unlock the Black Box - Your Imagination Holds the Key");
  txtArray.push("Every Choice Branches a Universe - Can You See the Forest?");

  txtIdx = floor(random(0, txtArray.length));
}

function draw() {
  background(0);
  fill(229, 220, 198);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, windowWidth*0.9, windowHeight*0.9, 30);

  imageMode(CENTER);
  image(Img_logo, windowWidth/2, windowHeight*0.3);

  fill(0);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  textFont(myFont1);
  textSize(windowHeight / 40);
  text(txtArray[txtIdx], windowWidth/2, windowHeight*0.6, windowWidth*0.5);
  
  text("-", windowWidth/2, windowHeight*0.65, windowWidth*0.5);
  text("Whispertrace", windowWidth/2, windowHeight*0.7, windowWidth*0.5);

  textFont(myFont2);
  textSize(windowHeight / 40);
  text("A puzzle adventure that explores the limits of AI and the infinite creativity of the human mind.", windowWidth/2, windowHeight*0.8, windowWidth*0.5);

}
