var Img_logo, myFont1, myFont2;

var cardSizeX, cardSizeY;

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
    cardSizeX = windowWidth*0.9;
    cardSizeY = cardSizeX*2;
  }
  else {
    cardSizeY = windowHeight*0.9;
    cardSizeX = cardSizeY/2;
  }

  Img_logo.resize(cardSizeX/2.5, 0);

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
  rect(windowWidth/2, windowHeight/2, cardSizeX, cardSizeY, 30);

  imageMode(CENTER);
  image(Img_logo, windowWidth/2, cardSizeY*0.35);

  fill(0);
  textAlign(CENTER);
  textWrap(WORD);
  textFont(myFont1);
  textSize(cardSizeX / 20);
  text(txtArray[txtIdx]+"\n\n\n-\nWhispertrace", windowWidth/2, cardSizeY/5*3, cardSizeX*0.8);

  textFont(myFont2);
  textSize(cardSizeX / 20);
  text("A puzzle adventure that explores the limits of AI and the infinite creativity of the human mind.", windowWidth/2, cardSizeY*0.9, cardSizeX*0.8);

}
