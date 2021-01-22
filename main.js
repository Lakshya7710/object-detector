img=0;
status="";
object=[];

function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(550,350);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
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
        object=results;
    }
}

function draw(){
    image(img,0,0,550,350);
    if(status != ""){
    
for(var i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="Status : objects detected";
    fill("red");
    percentage=floor(object[i].confidence * 100);
    text(object[i].label+ " " + percentage + "%",object[i].x+15,object[i].y+15);
    noFill();
    stroke("red");
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
}

}
}