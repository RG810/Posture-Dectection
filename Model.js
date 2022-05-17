let WebCam;
let model;
let singlePose
let skeleton;


function setup(){
    
    var cnv = createCanvas(600,400);
    
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y-100);
    
    console.log('setUP')
    WebCam = createCapture(VIDEO);
    WebCam.hide()
    
    model = ml5.poseNet(WebCam,modelLoaded);
    model.on('pose',pose_instance);
}

function pose_instance(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;

    }
    
    
}
function modelLoaded(){
    console.log('Model Has Loaded');
}


// function getRandomArbitary(min ,max){
//     return Math.random()*(max-min)+min;
// }

function draw(){
    // background(0,0,0)
    // stroke(255,0,0)
    // strokeWeight(2)
    // point(200,200)
    // line(200,200,300,300)
    // triangle(100,200,300,400,150,450)
    // stroke(255,255,0)
    // rect(500, 200, 100, 100)
    // ellipse(600, 300, 100, 100)
    // r=getRandomArbitary(0,255);
    // g=getRandomArbitary(0,255);
    // b=getRandomArbitary(0,255);
    // console.log(r,g,b);
    // fill(r, g, b)
    // ellipse(mouseX, mouseY, 70, 70)const flippedVideo = ml5.flipImage(video);
    image(WebCam,0,0);
    
    // filter(INVERT);
    fill(255,0,0);
    if(singlePose){

        for (let i =0;i<singlePose.keypoints.length;i++){
            ellipse(singlePose.keypoints[i].position.x,
                singlePose.keypoints[i].position.y,10);
        }
        stroke(255,255,255);
        strokeWeight(2);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, 
                skeleton[j][0].position.y, 
                skeleton[j][1].position.x,
                 skeleton[j][1].position.y)
        }
        
    }
}