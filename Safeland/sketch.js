var cam = {
  x: 0,
  y: 0,
  stat: false
};
var objects = [];
var irX = [ 950, 960, 964, 960, 950, 940, 936, 940] ;
var irY = [ 56, 60, 70, 80, 84, 80, 70, 60] ;
function setup() {
  createCanvas(1200, 1200);
  video = createCapture(VIDEO);
  yolo = ml5.YOLO(video, startDetecting);
  video.hide();
}
function startDetecting() {
  detect();
  cam.stat = true;
}
function detect() {
  yolo.detect(function(err, results) {
    objects = results;
    detect();
  });
}
function cen(x) {
  return (x - 0.5) * 2;
}
function magi(x) {
  let sig = Math.sign(x);
  let a = abs(x);
  return sig * min(pow(a * 2, 1.4) / 2, 1);
}
function draw() {
  background(214, 202, 185);
  fill(105)
  rect(0, 0, 1200, 100)
  line(100, 0, 160, 100)
  line(600, 0, 640, 100)
  line(1100, 0, 1120, 100)
  for (wallY = 100; wallY < 1200; wallY = wallY + 150) {
    line(0, wallY, 1200, wallY)
  }
  for (wallX = 50; wallX < 1200; wallX = wallX + 300) {
    for (wallY2 = 100; wallY2 < 1200; wallY2 = wallY2 + 300) {
      line(wallX, wallY2, wallX, wallY2 + 150);
      line(wallX + 150, wallY2 + 150, wallX + 150, wallY2 + 300)
    }
  }
  //backgroud color bars
  fill(228, 220, 212);
  rect(420, 230, 780, 900);
  fill(222, 41, 16);
  rect(460, 280, 740, 800);
  fill(62, 138, 151);
  rect(15, 230, 390, 225);
  fill(220);
  rect(900, 0, 100, 55, 0, 0, 20, 20);
  fill(50);
  ellipse(950, 70, 80, 80);
  //camera
  fill(50, 10, 10);
  ellipse(950 + cam.x, 70 + cam.y, 50, 50);

  fill(100 + (cam.stat ? 90 : 0), 10, 10);
  for (let i = 0; i < objects.length; i++) {
    //console.log(objects[i]);
    cam.x = magi(cen(objects[i].x + objects[i].w / 2)) * -20;
    cam.y = magi(cen(objects[i].y + objects[i].h / 2)) * 20;
  }
    for (var i = 0; i < irX.length; i = i + 1) {  
  ellipse(irX[i] + cam.x, irY[i] + cam.y, 8, 8);
  }
  fill(255);
  //Text: Xinjiang
  textSize(50);
  text("Safeland", 100, 360);
  fill(235);
  textSize(80);
  textStyle(BOLD);
  text("Here,", 550, 750);
  fill(235);
  textSize(60);
  textStyle(BOLD);
  text("You Will Be Watched", 580, 860);
  fill(235);
  textSize(60);
  textStyle(BOLD);
  text("   by Millions of Eyes", 585, 940);
  //Arrow 
  push();
  var vertexX= [105,135,135,305,305,135,135];
  var vertexY= [390,375,383,383,397,397,405];
  noStroke();
  beginShape();
  for (var o = 0; o < vertexX.length; o++) {
  vertex(vertexX[o], vertexY[o]);}
  endShape();
  pop();
  //Right eye whilte
  push();
  noStroke();
  translate(550, 134);
  rotate(0.5);
  ellipse(550, 134, 190, 270);
  pop();
  //Left eye white
  push();
  noStroke();
  translate(320, 355);
  rotate(-0.5);
  ellipse(320, 355, 190, 270);
  pop();
  //Right eye black
  push();
  noStroke();
  fill(20);
  translate(550, 134);
  rotate(0.5);
  ellipse(550, 134, 140, 230);
  pop();
  //Left eye black
  push()
  fill(20)
  noStroke()
  translate(320, 355);
  rotate(-0.5);
  ellipse(320, 355, 140, 230);
  pop()
  //Right eye gold
  push();
  noStroke();
  fill(255, 222, 0)
  translate(545, 155);
  rotate(0.5);
  ellipse(545, 155, 100, 150);
  pop();
  //Left eye gold
  push();
  fill(255, 222, 0)
  noStroke()
  translate(325, 376);
  rotate(-0.5);
  ellipse(325, 376, 100, 150);
  pop();
  //Right eye black in gold
  push();
  noStroke();
  fill(20);
  translate(545, 155);
  rotate(0.5);
  ellipse(545, 155, 50, 75);
  pop();
  //Left eye black in gold
  push();
  fill(20);
  noStroke();
  translate(325, 376);
  rotate(-0.5);
  ellipse(325, 376, 50, 75);
  pop();
}