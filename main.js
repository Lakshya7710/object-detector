img=0;
status="";

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(550,350);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerhtml="Status : detecting objects";
}

function modelLoaded(){
    console.log("model is loaded")
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,550,350);
    fill("red");
    text("Dog",70,50);
    noFill()
    stroke("red")
    rect(50,25,250,300);


    fill("red");
    text("Cat",275,75);
    noFill()
    stroke("red")
    rect(240,40,250,285);

}