var zarazara="";
var aajasanam="";
var leftwristX="0";
var leftwristY="0";
var rightwristX="0";
var rightwristY="0";

function preload()
{
    zarazara=loadSound("zara zara.mp3");
    aajasanam=loadSound("aaja sanam.mp3");
}

function setup()
{
    canvas=createCanvas(600 ,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(VIDEO,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
 if (results.length>0)
 {
     console.log(results);
     leftwristX=results[0].pose.leftwrist.x;
     leftwristY=results[0].pose.leftwrist.y;
     console.log("leftwristX ="+leftwristX +"leftwristY ="+leftwristY );

     rightwristX=results[0].pose.rightwrist.x;
     rightwristY=results[0].pose.leftwrist.y;
     console.log("rightwristX ="+rightwristX +"rightwristY ="+rightwristY );
 }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 77, 77, 600, 500);
}

function play1()
{
    zarazara.play1();
}

function play2()
{
    aajasanam.play2();
}

function stop()
{
    zarazara.stop();
    aajasanam.stop();
}