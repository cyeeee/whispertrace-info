var Img_logo_front, Img_logo_back, myFont1, myFont2;

var cardSizeX, cardSizeY;

var txtArray = [];
var txtIdx;

var link = "https://cyeeee.github.io/projects/whispertrace.html";
var linkTxt = "Project Archive";
var linkTxtY;

var angle = 0;
var targetAngle = 0;
var isDragging = false;
var lastMouseX;

function preload() {
  Img_logo_front = loadImage("images/logo.png");
  Img_logo_back = loadImage("images/logo.png");
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

  Img_logo_front.resize(cardSizeX/2.5, 0);
  Img_logo_back.resize(cardSizeX/4, 0);

  linkTxtY = -cardSizeY/6.8;

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

  angle = lerp(angle, targetAngle, 0.1);

  translate(width/2, height/2);
  
  let scaleX = cos(radians(angle));
  scale(scaleX, 1);
  
  if (abs(angle % 360) > 90 && abs(angle % 360) < 270) {
    drawBack();
  } else {
    drawFront();
  }
}

function drawFront() {
  noStroke();
  fill(229, 220, 198);
  rectMode(CENTER);
  rect(0, 0, cardSizeX, cardSizeY, 30);

  imageMode(CENTER);
  image(Img_logo_front, 0, -cardSizeY/4);

  fill(0);
  textAlign(CENTER);
  textWrap(WORD);
  textFont(myFont1);
  textSize(cardSizeX / 20);
  text(txtArray[txtIdx]+"\n\n\n-\nWhispertrace", 0, 0, cardSizeX*0.8);

  textFont(myFont2);
  textSize(cardSizeX / 20);
  text("A puzzle adventure that explores the limits of AI and the infinite creativity of the human mind.", 0, cardSizeY/3, cardSizeX*0.8);
}

function drawBack() {
  noStroke();
  fill(229, 220, 198);
  rectMode(CENTER);
  rect(0, 0, cardSizeX, cardSizeY, 30);

  push();
  scale(-1, 1);
  
  imageMode(CENTER);
  image(Img_logo_back, 0, 0);

  fill(0);
  textAlign(CENTER);
  textWrap(WORD);
  textFont(myFont1);
  textSize(cardSizeX / 15);
  text("Chenyi Wang", 0, -cardSizeY/3, cardSizeX*0.8);
  textSize(cardSizeX / 30);
  text("Designer & Developer", 0, -cardSizeY/3.3, cardSizeX*0.8);
  textSize(cardSizeX / 23);
  text("-\nchenyi.w@nyu.edu", 0, -cardSizeY/3.7, cardSizeX*0.8);

  textFont(myFont2);
  textSize(cardSizeX / 19);
  text("Whispertrace is inspired by the “black box” effect in modern technology, especially Artificial Intelligence (AI), which leads to user overwhelm and mistrust. By leveraging the properties of decision trees and pruning algorithms in AI and focusing on human cognition, this project created a gamified decision-making experience.", 0, cardSizeY/7, cardSizeX*0.8);
  textSize(cardSizeX / 20);
  text("May 2025", 0, cardSizeY/2.4, cardSizeX*0.8);

  textFont(myFont1);
  textSize(cardSizeX / 20);
  text(linkTxt, 0, linkTxtY, cardSizeX*0.8);
  let tw = textWidth(linkTxt);
  stroke(0);
  strokeWeight(1);
  line(-tw/2, linkTxtY, tw/2, linkTxtY); 

  pop();
}

function mousePressed() {
  isDragging = true;
  lastMouseX = mouseX;
}

function mouseDragged() {
  if (isDragging) {
    let dx = mouseX - lastMouseX;
    angle += dx * 0.5;
    targetAngle = angle;
    lastMouseX = mouseX;
  }
}

function mouseReleased() {
  isDragging = false;
  let a = ((angle % 360) + 360) % 360;

  if (a < 90 || a > 270) { // front
    if (abs(a) > 15) {
      targetAngle = 180;
    } else {
      targetAngle = 0;
    }
  } else { // back
    if (a > 225 || a < 135) {
      targetAngle = 0;
    } else {
      targetAngle = 180;
    }
  }
}

function mouseClicked() {
  let a = ((angle % 360) + 360) % 360;
  if (a > 90 && a < 270) { // back
    let localX = mouseX - width / 2;
    let localY = mouseY - height / 2;
    localX = -localX;

    let w = textWidth(linkTxt);
    let h = cardSizeX / 20;

    if (localX > -w/2 && localX < w/2 && localY > linkTxtY-h/2 && localY < linkTxtY+h/2) {
      window.open(link, "_black");
    }
  }
}