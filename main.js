img=0;
status="";
object=[];

function preload(){
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
}

function modelLoaded(){
    console.log("model is loaded")
    status=true;
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
    image(video,0,0,300,300);
    if(status != ""){
        objectDetector.detect(video,gotResults);

        r=random(255);
        g=random(255);
        b=random(255);
        document.getElementById("number_of_objects").innerHTML="Number of objects detected : " + object.length;
    
for(var i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="Status : objects detected";
    document.getElementById("number_of_objects").innerHTML="Number of objects detected : " + object.length;
    fill(r,g,b);
    percentage=floor(object[i].confidence * 100);
    text(object[i].label+ " " + percentage + "%",object[i].x+15,object[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
}

}
}