
img = "";
status = "";

function preload(){
    img = loadImage('download.jpeg');
}

function setup(){
    canvas = createCanvas( 640,420);
    canvas.center();
}
function draw(){
    image(img,0 ,0, 640, 420);
    fill("#ff00ae");
    text("boy", 100, 90);
    noFill();
    stroke("#ff00ae");
    rect(100, 60, 200, 300);

    fill("#000000");
    text("Ball",300,350);
    noFill();
    stroke("#000000");
    rect(300,300, 200, 100);
}

function setup() {

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Dectecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
}

