var cam = {
  x: 0,
  y: 0,
  stat: false
};
var objects = [];
let gun;
let t;
function preload() {
  gun = loadModel('gun.obj');
}

function setup() {
  createCanvas(1200, 1200, WEBGL);
  video = createCapture(VIDEO);
  yolo = ml5.YOLO(video, startDetecting);
  video.hide();
  t = createGraphics(1200, 1200);
  t.textFont('Source Code Pro');
  t.textAlign(CENTER);
  t.textSize(350);
  t.fill(150);
  t.text('You Are', 600, 200);
  t.text('Free', 600, 450);
  t.text('to Be', 600, 700);
  t.text('Shot in', 600, 950)
  t.text('Freeland', 600, 1200)
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

function draw() {
  background(255);
  push()
  texture(t);
  rotateY(0 - cam.x);
  plane(1200, 1200);
  pop()
  scale(40);
  translate(-1, 2);
  rotateY(3.135 + cam.x);
  model(gun);
  normalMaterial();
  for (let i = 0; i < objects.length; i++) {
    cam.x = map(cen(objects[i].x), 0, 1, 0.3, -0.3) - 0.65;
  }
}
