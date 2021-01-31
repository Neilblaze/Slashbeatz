const videoWidth = 500;
const videoHeight = 500;
const video = document.getElementById('myVideo');
const imageScaleFactor = 0.5;   // 0.5 because (0.5 + 0.5) = 1
const outputStride = 16;
const flipHorizontal = false;   // Otherwise face flipping hobe

async function setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
            'Browser API navigator.mediaDevices.getUserMedia is not available');
    }

    video.width = videoWidth; // Eta basically object & subject body k same frame e impose korche
    video.height = videoHeight;

    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
        facingMode: 'user',
        width: videoWidth,
        height: videoHeight,
        },
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
        resolve(video);
        };
    });
}

async function loadVideo() {
    const video = await setupCamera();
    video.play();
    return video;
}

loadVideo();

// https://stackoverflow.com/questions/48234696/how-to-put-a-gif-with-canvas/48348567
/* var Img = [];
for (var i = 0; i < 5; i++) {
  Img[i] = new Image();
  Img[i].src = "/images/up/f"+i+".png";
}


function drawAnimatedImage(arr,x,y,angle,factor,changespeed) {
    if (!factor) {
        factor = 1;
    }
    if (!changespeed) {
        changespeed = 1;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    if (!!arr[Math.round(Date.now()/changespeed) % arr.length]) {
    ctx.drawImage(arr[Math.round(Date.now()/changespeed) % arr.length], -(arr[Math.round(Date.now()/changespeed) % arr.length].width * factor / 2), -(arr[Math.round(Date.now()/changespeed) % arr.length].height * factor / 2), arr[Math.round(Date.now()/changespeed) % arr.length].width * factor, arr[Math.round(Date.now()/changespeed) % arr.length].height * factor);
    }
    ctx.restore();
}

function yop() {
    ctx.clearRect(0,0,1000,1000)
              if (Img.length == 6) {
                  drawAnimatedImage(Img,300,100,0,1,60)
              }
  requestAnimationFrame(yop);
  }
  requestAnimationFrame(yop); */

// For Boxes
const DOMboxes = document.getElementById('boxes');
// For Score
const DOMscore = document.getElementById('score');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
