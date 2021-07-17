
function preload() {
}
 function setup() {
     video=createCapture(VIDEO);
     video.size(500,350);
     video.hide();
     canvas=createCanvas(500,350);
     canvas.center();
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
 }
 function modelLoaded() {
     console.log('PoseNet is started');
 }
 function gotPoses(results) {
     
  if(results.length > 0){}
    }
    function draw() {
    background('#08050a');

    }
