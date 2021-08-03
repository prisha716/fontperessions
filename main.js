

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
     
  if(results.length > 0){
    console.log(results);

    leftwristx=results[0].pose.leftwrist.x;
    rightwristx=results[0].pose.rightwrist.x;
    difference=floor(leftwristx-rightwristx);
    removedecimal=floor("difference")
    console.log("leftwristx=" + leftwristx + "rightwristx=" + rightwristx +
    "difference=" + difference);
    }
    }
    function draw() {
    background('#08050a');
    fill('#a13fe8');
    Text(Prisha,50,500)
    }